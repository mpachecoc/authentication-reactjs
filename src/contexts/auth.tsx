import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import login from '../services/auth';

// Typescript
interface User {
   name: string;
   email: string;
}

interface AuthContextData {
   signed: boolean;
   user: User | null;
   loading: boolean;
   signIn(): Promise<void>;
   logout(): void;
}

// Create Context
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Set Provider as Component
export const AuthProvider: React.FC = ({ children }) => { 
   
   // Init states
   const [user, setUser] = useState<User | null>(null);
   const [loading, setLoading] = useState(true);

   // Check if User has been logged
   useEffect(() => {
      const storedUser = localStorage.getItem('@Auth:user');
      const storedToken = localStorage.getItem('@Auth:token');

      // If logged, save data in "user"
      if (storedUser && storedToken) {
         setUser(JSON.parse(storedUser));
         api.defaults.headers['Authorization'] = `Bearer ${storedToken}`
      }

      // Simulate to take 500 ms. the check process
      setTimeout(() => setLoading(false), 500);

   }, []);
   
   // Sign In Funct.
   async function signIn() {
      const response = await login();

      setUser(response.user);
      api.defaults.headers['Authorization'] = `Bearer ${response.token}`

      localStorage.setItem('@Auth:user', JSON.stringify(response.user));
      localStorage.setItem('@Auth:token', JSON.stringify(response.token));
   }

   // Logout Funct.
   function logout() {
      localStorage.clear();
      setUser(null);
   }

   // Provider  (!!user => if something return true : false)
   return (
      <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, logout }}>  
         {children}
      </AuthContext.Provider>
   );
};

// Instead of export "AuthContext", export a created hook
export function useAuth() {
   const context = useContext(AuthContext);
   
   return context;
}