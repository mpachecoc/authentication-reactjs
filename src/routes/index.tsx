import React from 'react';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
   // Context
   const { signed, loading } = useAuth();

   // Loading 
   if (loading) {
      return (
         <div style={styles.container}>
            <span style={styles.text}>Loading...</span>
         </div>
      );
   }

   return signed ? <AppRoutes /> : <AuthRoutes />;
};

const styles = {
   container: {
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
   },

   text: {
      color: '#FFF',
   },
}

export default Routes;