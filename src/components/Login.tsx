import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    const envUsername = import.meta.env.VITE_APP_USERNAME;
    const envPassword = import.meta.env.VITE_APP_PASSWORD;

    if (username === envUsername && password === envPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gradient-to-br dark:from-[#181a43] dark:via-[#111330] dark:to-[#0a0b1d] transition-colors duration-300">
      <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/30 p-8 rounded shadow-xl w-96 mb-8 transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-[#78ba44]">Nimmadhi Price Finder</h2>
        {error && <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-2 rounded mb-4 text-sm border dark:border-red-900/50">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border dark:border-white/10 rounded w-full py-2 px-3 text-gray-700 dark:text-white dark:bg-[#111330] leading-tight focus:outline-none focus:ring-2 focus:ring-[#78ba44] focus:border-transparent transition-colors"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative mb-3">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border dark:border-white/10 rounded w-full py-2 px-3 pr-10 text-gray-700 dark:text-white dark:bg-[#111330] leading-tight focus:outline-none focus:ring-2 focus:ring-[#78ba44] focus:border-transparent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-[#78ba44] dark:hover:bg-[#65a037] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      
      <footer className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium">
        Made with ❤️ by VYSH 👑
      </footer>
    </div>
  );
};

export default Login;
