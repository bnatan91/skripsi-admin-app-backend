import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MainContent from './MainContent';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <>
      <div className="w-full h-full bg flex flex-col font-sans bg-[#020617]">
        <Navbar />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
