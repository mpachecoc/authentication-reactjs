import React from 'react';
import { useAuth } from '../../contexts/auth';

const SignIn: React.FC = () => {
   const { signed, user, signIn } = useAuth();
   
   console.log(signed);
   console.log(user);

   // Sign In
   function handleSignIn() {
      signIn();
   }

   return (
      <div style={styles.container}>
         <h1 style={styles.title}>Sign In</h1>
         <button style={styles.button} type="button" onClick={handleSignIn}>Sign In</button>
      </div>
   );
}

const styles = {
   container: {
      width: '100%', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
   },

   title: {
      color: '#FFF',
   },
   
   button: {
      width: '10%',
      height: '30px',
      background: '#e02041',
      border: '0',
      borderRadius: '8px',
      color: '#FFF',
      display: 'inline-block',
      fontSize: '14px',
      marginLeft: '10px',
      cursor: 'pointer',
   },
}

export default SignIn;