import './App.css';

import React from 'react'
import Top from './Comp/Top';
import Header from './Comp/Header';
import Navbar from './Comp/Navbar';
import Footer from './Comp/Footer';

export default function App() {
  return (
    <div>
      <Top/>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}
