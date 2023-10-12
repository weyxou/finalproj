import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store/slice/UserSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginModal from './LoginModal'; // Import the component without curly braces

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Dispatch the user information to Redux here
        // You may need to extract the user information from userCredential
        // and dispatch it using the setUser action from your UserSlice.
        const user = userCredential.user;
        dispatch(setUser(user)); // Assuming setUser is the correct action
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <LoginModal
   handleClick={handleLogin} />;
}
