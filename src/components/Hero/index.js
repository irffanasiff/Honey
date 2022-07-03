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
      <Stack minH='75vh' direction={{ base: 'column', lg: 'row' }}>
        <Center
          flexDirection='column'
          alignItems={{ base: 'center', lg: 'start' }}
          textAlign={{ base: 'center', lg: 'start' }}
          mx='auto'
          maxW='3xl'
          gap={{ base: '2rem', sm: '0rem', lg: '2rem' }}
          border='2px solid red'
        >
          <VStack p={{ base: '3rem', md: '4rem 3rem' }}>
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
              py='1rem'
              fontSize={{ base: 'lg', md: 'xl' }}
              color='honey.darkGray'
              letterSpacing={'-0.08rem'}
              fontWeight='500'
            >
              Honey’s mission is to empower NFT users with simple financial
              tools.
            </Text>
          </VStack>
          <HStack
            border='2px solid red'
            backgroundColor='white'
            spacing={{ base: '1rem', md: '2rem' }}
          >
            <CustomButton dark={true}>EXPLORE APP</CustomButton>
            <CustomButton dark={false}>WATCH DEMO</CustomButton>
          </HStack>
        </Center>
        <Center border='2px solid red' w='full'>
          <Center
            w={{ base: '100vw', md: '40rem' }}
            h={{ base: '100vw', md: '40rem' }}
            position='relative'
          >
            <Image
              src='/HeroImg.gif'
              alt='nft'
              layout='fill'
              objectFit='contain'
            />
          </Center>
        </Center>
      </Stack>
    </Container>
  );
};

export default Hero;
