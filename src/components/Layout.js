import { Container } from '@chakra-ui/react';
import React from 'react';
import Featured from './Featured';
import Hero from './Hero';
import HeroPattern from './HeroPattern';
import Navbar from './Navbar';
import Borrow from './Borrow';
import Features from './Features';

const Layout = (props) => {
  return (
    <Container maxW='full' backgroundColor='white' color='black' p='0'>
      <Container
        bg='white'
        position='absolute'
        maxW='100vw'
        overflow='hidden'
        p='0'
      >
        <HeroPattern />
      </Container>
      <Container position='absolute' maxW='full' p='0'>
        <Navbar />
        <Hero />
        {/* <Featured /> */}
        <Borrow />
        <Features />
      </Container>
    </Container>
  );
};

export default Layout;
