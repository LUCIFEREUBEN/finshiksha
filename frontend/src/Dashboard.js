import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FinShiksha Dashboard</h1>
        <p>Welcome — this is a placeholder dashboard.</p>
        <p>
          <Link to="/login" className="App-link">Login</Link> ·{' '}
          <Link to="/signup" className="App-link">Signup</Link>
        </p>
      </header>
    </div>
  );
}
