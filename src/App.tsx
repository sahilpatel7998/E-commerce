import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header';
import Footer from './layout/footer/footer';
import Home from './pages/home/Home';
import Electronics from './pages/Category/Electronics/Electronics';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Electronics/>
    </div>
  );
}

export default App;
