// LoginModal.tsx

import React, { useState } from 'react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleRegister: (email: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, handleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-opacity-70 bg-black z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal p-4 bg-white rounded-lg shadow-lg mx-auto mt-20 w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Login</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <RiCloseLine className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" onClick={() => handleRegister(email, password)} className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link href="/sign" passHref className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
