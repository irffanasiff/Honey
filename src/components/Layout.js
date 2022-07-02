import { Container } from '@chakra-ui/react';
import React from 'react';
import Featured from './Featured';
import Hero from './Hero';
import HeroPattern from './HeroPattern';
import Navbar from './Navbar';
import Borrow from './Borrow';
import Features from './Features';
import NFTdetails from './NFTdetails/Index';
import BGpattern from './BGpattern';

const Layout = () => {
  return (
    <Container maxW='full' p='0'>
      <Container
        position='fixed'
        border='2px solid red'
        bg='white'
        //position='absolute'
        maxW='100vw'
        overflow='hidden'
        flexDirection={'row'}
        p='0'
      >
        <BGpattern />
        <BGpattern />
      </Container>
      {/* <Container maxW='full' color='black' p='0'>
        <Container
          bg='white'
          position='absolute'
          maxW='100vw'
          overflow='hidden'
          p='0'
        >
          <HeroPattern />
        </Container>
        <Container
          position='absolute'
          maxW='full'
          p='0'
          display='flex'
          flexDirection={'column'}
          //gap='6rem'
        >
          <Navbar />
          <Hero />
          <Featured />
          <Borrow />
          <Features />
          <NFTdetails />
        </Container>
      </Container> */}
    </Container>
  );
};

export default Layout;
