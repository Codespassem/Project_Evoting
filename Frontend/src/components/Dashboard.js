import React from 'react';
import { useAuth } from '../context/AuthContext'; // Use useAuth hook

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Dashboard - Protected Page</h2>
      <button onClick={logout} style={{ padding: 8, cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
