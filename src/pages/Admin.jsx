import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from '../utils/axios';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const { token } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {token ? <AdminDashboard /> : <AdminLogin />}
    </div>
  );
};

export default Admin;