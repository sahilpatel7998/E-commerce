import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/header';
import Footer from './layout/footer/footer';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
