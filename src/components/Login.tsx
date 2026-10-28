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
    
    const envUsername = import.meta.env.VITE_APP_USERNAME || '';
    const envPassword = import.meta.env.VITE_APP_PASSWORD || '';

    if (
      username.trim().toLowerCase() === envUsername.trim().toLowerCase() && 
      password.trim() === envPassword.trim()
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gradient-to-br dark:from-[#181a43] dark:via-[#111330] dark:to-[#0a0b1d] transition-colors duration-300">
      <div className="bg-white dark:bg-[#181a43]/40 dark:backdrop-blur-xl dark:border dark:border-[#78ba44]/30 p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-sm mb-6 transition-colors duration-300">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-900 dark:text-[#78ba44]">
          Nimmadhi Price Finder
        </h2>
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-lg mb-4 text-sm border dark:border-red-900/50">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1.5" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-sm appearance-none border dark:border-white/10 rounded-lg w-full py-2.5 px-3 text-base text-gray-900 dark:text-white dark:bg-[#111330] leading-tight focus:outline-none focus:ring-2 focus:ring-[#78ba44] focus:border-transparent transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm appearance-none border dark:border-white/10 rounded-lg w-full py-2.5 px-3 pr-10 text-base text-gray-900 dark:text-white dark:bg-[#111330] leading-tight focus:outline-none focus:ring-2 focus:ring-[#78ba44] focus:border-transparent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="bg-blue-600 hover:bg-blue-700 dark:bg-[#78ba44] dark:hover:bg-[#65a037] text-white font-bold py-2.5 px-4 rounded-lg focus:outline-none shadow-md w-full transition-all active:scale-[0.99]"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      
      <footer className="text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">
        Made with ❤️ by VYSH 👑
      </footer>
    </div>
  );
};

export default Login;
