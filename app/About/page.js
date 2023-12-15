"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const mediaScrollerStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '21%',
  gap: '2rem',
  overflowX: 'auto',
  overscrollBehaviorInline: 'contain',
  padding: '0 var(--spacer) var(--spacer)',
};

const mediaScrollerItemStyle = {
  display: 'grid',
  gridTemplateRows: 'min-content',
  padding: '1.5rem',
  aspectRatio: '20/15',
  objectFit: 'cover',
};

const mediaScrollerItemImgStyle = {
  inlineSize: '70%',
  aspectRatio: '30/40',
  objectFit: 'cover',
};

const FirstHalfStyle = {
  width: '100%', 
  height: '450px', 
  overflow: 'hidden', 
  backgroundColor: '#99C2CF', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
};

const SecondHalfStyle = {
  marginTop: '1rem', 
  color: '#4D4D4D', 
  fontSize: '23px', 
  fontFamily: 'Anonymous Pro', 
  lineHeight: '3', 
  textAlign: 'center'
};

export default function About() {
  return (
    <div className="About" style={{ backgroundColor: 'white', minHeight: '100%' }}>
      <br /><br /><br /><br /><br />
      <Navbar />
      <div style={FirstHalfStyle}>        
        <div style={{ color: '#4D4D4D', fontSize: '30px', fontFamily: 'Anonymous Pro', lineHeight: '1.6', textAlign: 'center' }}>
          <strong>About Us</strong><br/>
          Welcome to StreetTrend Central! We are your go-to destination for a seamless and engaging shopping experience, offering a diverse range of trendy clothing items.

Our Mission,
at StreetTrend Central, we've set out to address the challenge of providing users with a seamless and engaging platform for discovering, exploring, and purchasing trendy clothing items. Our mission is to cater to the diverse fashion preferences of our users and create an immersive shopping experience that goes beyond the ordinary.
        </div>
      </div>
      <div style={SecondHalfStyle}>
        <div style={{ color: '#4D4D4D', fontSize: '15px', fontFamily: 'Anonymous Pro',}}>
        <strong>Our Team</strong><br/><br/>
          <div style={mediaScrollerStyle} className="media-scroller">
            <div style={mediaScrollerItemStyle} className="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="" alt="Danny" />
              <p>Danilo Vinas</p>
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="" alt="David" />
              <p>David Aturdido</p>
            </div>
            <div style={mediaScrollerItemStyle}class="media-scroller-item">
              <img style={mediaScrollerItemImgStyle} src="" alt="Allen" />
              <p>Allen Rei Delos Trinos</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
