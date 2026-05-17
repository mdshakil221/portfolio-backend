import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from '../utils/axios';

const AdminLogin = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      login(res.data.token);
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="admin@portfolio.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;