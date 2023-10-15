'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import LoginModal from './LoginModal'; // Import the component without curly braces
import { setUser } from '../store/slice/UserSlice';

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        dispatch(setUser(user)); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <LoginModal isOpen={false} handleLogin={handleLogin} />;
}
