import React from 'react';
import HomePage from './pages/home/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './pages/cart/Cart';
const App = () => {
  return (
  <div className='container'>
  <Router>
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
  </Router>
</div>
)
}

export default App;
