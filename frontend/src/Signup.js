import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Signup</h2>
      <p>This is a placeholder signup page.</p>
      <p>Go to <Link to="/login">Login</Link> or <Link to="/">Dashboard</Link></p>
    </div>
  );
}
