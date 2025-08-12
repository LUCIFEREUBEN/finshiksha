import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Login</h2>
      <p>This is a placeholder login page.</p>
      <p>Go to <Link to="/signup">Signup</Link> or <Link to="/">Dashboard</Link></p>
    </div>
  );
}
