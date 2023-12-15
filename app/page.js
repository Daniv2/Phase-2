"use client";

import React from 'react';
import Navbar from './components/navbar';
import Collaboration from './components/collaboration-body';
import Footer from './components/footer';
import Image from 'next/image';

const Banner = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'white', marginTop: '10rem',}}>
      <Image
        src="/resources/homee.jpg"
        alt="Collaborative workspace"
        className="mr-60 w-auto"
        width= {600} 
        height= {600}
      /> 
      
    </div>
  );
};

const PageStyle = {
  backgroundColor: 'white',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column', 
};

const ContentStyle = {
  flex: '1 0 auto',
}

const FooterStyle = {
  flexShrink: '0',
}

export default function App() {
  return (
    <div className="App" style={PageStyle}>
      <Navbar />
      <div style={ContentStyle}>
        <Banner />
        <Collaboration />
      </div>
      <Footer style={FooterStyle}/>
    </div>
  );
};

