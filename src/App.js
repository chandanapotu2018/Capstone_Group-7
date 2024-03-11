import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { ThemeProvider } from './components/ThemeProvider'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={() => setIsAuthenticated(false)} />

      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
      </Routes>

      <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
