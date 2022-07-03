import { Center, Container } from '@chakra-ui/react';
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
        opacity='0.03'
        position='fixed'
        bg='white'
        maxW='100vw'
        overflow='hidden'
        p='0'
      >
        <BGpattern />
        <BGpattern />
        <BGpattern />
      </Container>
      <Container maxW='full' color='black' p='0' bg='#fffffff7'>
        <Container
          border=''
          bg='white'
          position='absolute'
          maxW='100vw'
          h='110vh'
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
        >
          <Navbar />
          <Hero />
          <Featured />
          <Borrow />
          <Features />
          <NFTdetails />
        </Container>
      </Container>
    </Container>
  );
};

export default Layout;
