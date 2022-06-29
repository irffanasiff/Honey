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
      <Stack minH='75vh' direction={{ base: 'column', md: 'row' }}>
        <Center
          flexDirection='column'
          alignItems={{ base: 'center', md: 'start' }}
          maxW='2xl'
          gap='2rem'
        >
          <VStack>
            <Heading
              fontFamily='Red Hat Mono'
              fontWeight={'900'}
              fontSize={{ base: '2xl', md: '6xl' }}
            >
              Making NFT Lending and Staking easy.
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color='#69697B'>
              Honey’s mission is to empower NFT users with simple financial
              tools.
            </Text>
          </VStack>
          <HStack spacing='2rem'>
            <CustomButton dark={true}>EXPLORE APP</CustomButton>
            <CustomButton dark={false}>WATCH DEMO</CustomButton>
          </HStack>
        </Center>
        <Center w='full'>
          <Center w='40rem' h='40rem' position='relative'>
            <Image
              src='/HeroImg.png'
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
