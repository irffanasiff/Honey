import { Container } from '@chakra-ui/react';
import React from 'react';
import Hero from './Hero';
import HeroPattern from './HeroPattern';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <Container maxW='full' bg='white' p='0'>
      <Container
        position='absolute'
        maxW='100vw'
        overflow='hidden'
        bg='transparent'
        p='0'
      >
        <HeroPattern />
      </Container>
      <Container position='absolute' bg='transparent' maxW='full' p='0'>
        <Navbar />
        <Hero />
      </Container>
    </Container>
  );
};

export default Layout;
