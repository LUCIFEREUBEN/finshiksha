// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header className="App-header" style={{ padding: 20 }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ margin: '8px 0' }}>FinShiksha</h1>
      <nav style={{ marginTop: 8 }}>
        <Link to="/" className="App-link" style={{ marginRight: 12 }}>Dashboard</Link>
        <Link to="/login" className="App-link" style={{ marginRight: 12 }}>Login</Link>
        <Link to="/signup" className="App-link">Signup</Link>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main style={{ padding: 24 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
