import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  const [widthLessThan1240] = useMediaQuery('(min-width: 1240px)');

  return (
    <Container
      mt='2.5rem'
      maxW='120rem'
      p={{ base: '2rem', md: '5rem' }}
      border='2px solid black'
      backgroundColor={'honey.yellow'}
    >
      <Container maxW='110rem' w='fit-content' bg='black' p='0' rounded='md'>
        <Container
          maxW='110rem'
          backgroundColor='white'
          p={{ base: '5rem 2rem', md: '4rem' }}
          pb={{ base: '5rem', md: '6rem' }}
          rounded='md'
          border='2px solid black'
          transform={{
            base: 'translate(-5px, -5px)',
            md: 'translate(-7px, -7px)',
          }}
        >
          <VStack spacing={{ base: '4rem', md: '6rem' }}>
            <Heading
              textAlign='center'
              fontWeight='700'
              fontSize={{ base: '32px', md: '48px' }}
            >
              NFT Liquidation Solution
            </Heading>
            <Flex gap='2.5rem' direction={widthLessThan1240 ? 'row' : 'column'}>
              <Center bg='black' rounded='lg' maxW='28rem' maxH='19rem'>
                <VStack
                  maxW='27rem'
                  maxH='19rem'
                  w='100%'
                  h='100%'
                  p='2.3rem'
                  border='1px solid black'
                  backgroundColor={'white'}
                  rounded='lg'
                  textAlign='center'
                  alignItems={'center'}
                  justifyContent='space-between'
                  transform={{
                    base: 'translate(-4px, -4px)',
                    md: 'translate(-5px, -5px)',
                  }}
                  _hover={{
                    transform: 'translate(-8px, -8px)',
                  }}
                  transition='all 0.3s'
                  overflow='hidden'
                  _before={{
                    content: "''",
                    width: '3.7rem',
                    height: '3.7rem',
                    backgroundColor: '#E7B400',
                    filter: 'blur(50px)',
                    position: 'absolute',
                    transform: 'translate(-13rem,15rem)',
                  }}
                >
                  <Center w='5rem' h='5rem' position='relative'>
                    <Image
                      src='/images/key.png'
                      alt='key'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Center>
                  <Heading
                    fontWeight='700'
                    fontSize={{ base: '24px', md: '30px' }}
                  >
                    Opportunity Cost
                  </Heading>
                  <Text
                    maxW='24rem'
                    fontWeight='400'
                    color='honey.darkGray'
                    fontSize={{ base: '12px', md: '16px' }}
                  >
                    Invest in crypto anytime, anywhere with our safe, secure,
                    and easy to use online platform
                  </Text>
                </VStack>
              </Center>
              <Center bg='black' rounded='lg' maxW='28rem' maxH='19rem'>
                <VStack
                  maxW='27rem'
                  maxH='19rem'
                  h='100%'
                  w='100%'
                  p=' 2rem'
                  border='1px solid black'
                  backgroundColor={'white'}
                  rounded='lg'
                  textAlign='center'
                  alignItems={'center'}
                  justifyContent='space-between'
                  transform={{
                    base: 'translate(-4px, -4px)',
                    md: 'translate(-5px, -5px)',
                  }}
                  _hover={{
                    transform: 'translate(-8px, -8px)',
                  }}
                  transition='all 0.3s'
                  overflow='hidden'
                  _before={{
                    content: "''",
                    width: '3.7rem',
                    height: '3.7rem',
                    backgroundColor: '#E7B400',
                    filter: 'blur(50px)',
                    position: 'absolute',
                    transform: 'translate(-13rem,15rem)',
                  }}
                >
                  <Center w='5rem' h='5rem' position='relative'>
                    <Image
                      src='/images/link.png'
                      alt='key'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Center>
                  <Heading
                    fontWeight='700'
                    fontSize={{ base: '24px', md: '30px' }}
                  >
                    Non-fungibility
                  </Heading>
                  <Text
                    maxW='24rem'
                    fontWeight='400'
                    color='honey.darkGray'
                    fontSize={{ base: '12px', md: '16px' }}
                  >
                    We have thousands of ATMs located across the U.S. where you
                    can easily convert cash to crypto
                  </Text>
                </VStack>
              </Center>
              <Center bg='black' rounded='lg' h='fit-content'>
                <VStack
                  maxW='27rem'
                  maxH='19rem'
                  w='100%'
                  p='2.3rem'
                  border='1px solid black'
                  backgroundColor={'white'}
                  rounded='lg'
                  textAlign='center'
                  alignItems={'center'}
                  justifyContent='space-between'
                  transform={{
                    base: 'translate(-4px, -4px)',
                    md: 'translate(-5px, -5px)',
                  }}
                  _hover={{
                    transform: 'translate(-8px, -8px)',
                  }}
                  transition='all 0.3s'
                  overflow='hidden'
                  _before={{
                    content: "''",
                    width: '3.7rem',
                    height: '3.7rem',
                    backgroundColor: '#E7B400',
                    filter: 'blur(50px)',
                    position: 'absolute',
                    transform: 'translate(-13rem,15rem)',
                  }}
                >
                  <Center w='5rem' h='5rem' position='relative'>
                    <Image
                      src='/images/safe.png'
                      alt='key'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Center>
                  <Heading
                    fontWeight='700'
                    fontSize={{ base: '24px', md: '30px' }}
                  >
                    Unrealized Gains
                  </Heading>
                  <Text
                    maxW='24rem'
                    fontWeight='400'
                    color='honey.darkGray'
                    fontSize={{ base: '12px', md: '16px' }}
                  >
                    Store your growing investments in our non-custodial wallet
                    that gives you access to a full suite of DeFi services in
                    one place
                  </Text>
                </VStack>
              </Center>
            </Flex>
          </VStack>
        </Container>
      </Container>
      <Flex h='0' alignItems={'end'} justify='flex-end' w='full'>
        <Flex
          alignItems={'end'}
          justify='flex-end'
          position='absolute'
          px={{ base: '0rem', md: '0rem' }}
        >
          <Center
            overflow='visible'
            transform={{
              base: 'translate(2rem, 2rem)',
              lg: 'translate(1rem, 2rem)',
            }}
            //mx='auto'
            w={{ base: '9rem', sm: '10rem', md: '14rem' }}
            h={{ base: '8rem', sm: '8rem', md: '12rem' }}
            position='relative'
          >
            <Image
              src='/svg/HoneyCoin.svg'
              alt='nft Loans'
              layout='fill'
              objectFit='contain'
            />
          </Center>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Features;
