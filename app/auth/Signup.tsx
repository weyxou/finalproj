'use client'
import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { setUser } from '../store/slice/UserSlice';
import LoginModal from './LoginModal';

export default function Signup() {
  const router=useRouter()

  const dispatch = useDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <LoginModal isOpen={false} handleRegister={handleRegister}/>
  )
}
