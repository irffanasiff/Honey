import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import CustomButton from '../../HOC/CustomButton.HOC';

const Hero = () => {
  return (
    <Container minH='80vh' maxW='8xl' p='0'>
      <Center
        border=''
        px={{ base: '1rem', md: '2rem' }}
        minH={{ base: '85vh', lg: '75vh' }}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={{ base: '2rem', md: '0rem' }}
      >
        <Center
          w={{ base: '100%', lg: '60%' }}
          border=''
          flexDirection='column'
          alignItems={{ base: 'center', lg: 'start' }}
          textAlign={{ base: 'center', lg: 'start' }}
          mx='auto'
          maxW='3xl'
          gap={{ base: '1rem', sm: '2rem', lg: '2rem' }}
        >
          <VStack
            pt={{ base: '2rem', md: '4rem', lg: '0rem' }}
            px={{ base: '', sm: '2rem', md: '0rem' }}
          >
            <Heading
              fontFamily='Red Hat Mono'
              fontWeight={{ base: '500' }}
              textAlign={{ base: 'center', lg: 'left' }}
              lineHeight={{ base: '101.8%', lg: '101.8%' }}
              fontSize={{ base: '4xl', md: '6xl' }}
            >
              Making NFT Lending and Staking easy.
            </Heading>
            <Text
              alignSelf={{ base: 'center', md: 'start' }}
              maxW='40rem'
              py='1rem'
              fontSize={{ base: 'lg', lg: 'xl' }}
              color='honey.darkGray'
              letterSpacing={'-0.08rem'}
              fontWeight='500'
            >
              Honey’s mission is to empower NFT users with simple financial
              tools.
            </Text>
          </VStack>
          <HStack
            backgroundColor='white'
            spacing={{ base: '1rem', md: '2rem' }}
          >
            <Box as='button'>
              <CustomButton dark={true}>EXPLORE APP</CustomButton>
            </Box>
            <Box as='button'>
              <CustomButton dark={false}>WATCH DEMO</CustomButton>
            </Box>
          </HStack>
        </Center>
        <Center w={{ base: '100%', lg: '40%' }}>
          <Center
            w={{ base: '90vw', md: '30rem', lg: '25vw' }}
            h={{ base: '40vh', md: '30rem', lg: '25vw' }}
            alignItems={{ base: 'center', md: 'start' }}
            maxW={{ base: '20rem', md: '36vw' }}
            maxH={{ base: '20rem', md: '36vw' }}
            justifyContent={{ base: 'center', md: 'start' }}
            position='relative'
          >
            <Image
              src='/HeroImg.gif'
              alt='hero nft'
              layout='fill'
              objectFit='cover'
            />
          </Center>
        </Center>
      </Center>
    </Container>
  );
};

export default Hero;
