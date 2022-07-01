import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <Container
      maxW='120rem'
      p={{ base: '2rem', md: '4rem' }}
      border='2px solid black'
      backgroundColor={'honey.yellow'}
    >
      <Container
        maxW='8xl'
        backgroundColor='white'
        p='2rem'
        rounded='sm'
        border='2px solid black'
      >
        <VStack>
          <Heading>NFT Liquidation Solution</Heading>
          <Flex>
            <VStack
              p='2rem'
              border='2px solid black'
              backgroundColor={'white'}
              rounded='sm'
            >
              <Center w='5rem' h='5rem' position='relative'>
                <Image
                  src='/images/key.png'
                  alt='key'
                  layout='fill'
                  objectFit='contain'
                />
              </Center>
              <Heading>Opportunity Cost</Heading>
              <Text></Text>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Container>
  );
};

export default Features;
