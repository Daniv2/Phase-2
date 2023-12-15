"use client";
import React, { useState } from 'react';
import { Button, Input, Box, VStack } from '@chakra-ui/react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Tutor = () => {
  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = () => {
    console.log(`Searching for: ${searchText}`);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      bg={isDarkMode ? '#1a202c' : 'white'}
      color={isDarkMode ? 'white' : 'black'}
      minH="100vh"
      display="flex"
      flexDir="column"
      p={15}
    >
      <Navbar />

      <div className="header">
        <h1
          style={{
            color: isDarkMode ? '#90cdf4' : '#004080',
            fontWeight: 'bold',
            fontSize: '70px',
            textShadow: '2px 2px 10px rgba(173, 216, 230, 0.5)',
            fontFamily: 'Arial',
            margin: '20px 0',
            height: '550px',
            width: '400px',
            position: 'absolute',
            top: '50%',
            left: '52%',
            transform: 'translate(-50%, -50%)',
          }}
        >
        
        </h1>
      </div>

      <div className="button-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '550px' }}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            colorScheme="black"
            color="black"
            className="border border-teal-500 px-4 py-2 rounded-md hover:bg-teal-500 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"
            style={{
              borderRadius: '20px',
              background: isDarkMode ? '#2b6cb0' : '#2BCCBD',
              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
              width: '20%',
              marginBottom: '10%', 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '25px',
              textShadow: '2px 2px 10px rgba(173, 216, 230, 0.5)',
              fontFamily: 'Arial',
              flex: '0 27%',
              height: '80px',
              marginBottom: '2%',
              marginLeft: '40px',
              marginRight: '40px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={button.imgSrc} alt={button.label} width={55} height={40} style={{ marginRight: '10px' }} />
              <span style={{ fontFamily: 'MyCustomFont, Arial, sans-serif' }}>
                {button.label}
              </span>
            </div>
          </Button>
        ))}
      </div>

      <Button
  onClick={toggleDarkMode}
  colorScheme={isDarkMode ? 'gray' : 'teal'}
  position="fixed"
  top="20%"
  right="1rem"
  zIndex="999"
  borderRadius="50%"
  p="1rem"
  fontSize="2rem"
  _hover={{
    background: isDarkMode ? '#2d3748' : '#63b3ed', 
    color: 'white',
  }}
>
  {isDarkMode ? '🌞 ' : '🌙 '}
</Button>

      <Navbar />
      <Footer />
    </Box>
  );
};

const buttons = [
  { label: 'Aesthetic', imgSrc: '/resources/aes.jpg'},
  { label: 'Street Style', imgSrc: '/resources/street.jpg' },
  { label: 'Y2K Style', imgSrc: '/resources/y2k.jpg' },
  { label: 'Minimalist', imgSrc: '/resources/min.jpg' },
  { label: 'Cozy Outfit', imgSrc: '/resources/cozy.jpg' },
 
];

export default Tutor;
