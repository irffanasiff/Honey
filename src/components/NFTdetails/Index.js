import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useDimensions,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from './Carousel';
import NFTcard from './NFTcard';

const NFTdetails = () => {
  const elementRef = useRef();
  const boxDimensions = useDimensions(elementRef);
  const [dimensions, setdimensions] = useState(boxDimensions);
  const [widthLessThan1240] = useMediaQuery('(min-width: 1240px)');
  const [widthLessThan1100] = useMediaQuery('(min-width: 1100px)');

  useEffect(() => {
    setdimensions(boxDimensions);
  }, [boxDimensions]);

  return (
    <Container
      maxW='100vw'
      p='0'
      bg='white'
      pb={{ base: '10rem', sm: '20rem', md: '20rem' }}
    >
      <Container
        maxW='100vw'
        bg='black'
        h={{ base: 'auto', md: '30rem' }}
        pt='4rem'
        px='0'
      >
        <Container
          display='flex'
          alignItems='start'
          flexDirection='column'
          maxW='94rem'
          w='fit-content'
          p='0'
          pt={{ base: '3rem', md: '4rem' }}
        >
          <Box
            pb='3rem'
            justifyContent={
              widthLessThan1240 ? 'space-between' : 'space-around'
            }
            mx={!widthLessThan1240 && 'auto'}
            maxW='3xl'
            w='100%'
            color='white'
            display='flex'
            gap={{ base: '2rem', md: '' }}
            alignItems={{ base: 'center', md: 'start' }}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <VStack alignItems={{ base: 'center', md: 'start' }}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color='honey.darkGray'
                fontWeight='500'
              >
                TVL
              </Text>
              <Heading fontSize={{ base: '4xl', md: '5xl' }}>3M+</Heading>
            </VStack>
            <VStack alignItems={{ base: 'center', md: 'start' }}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color='honey.darkGray'
                fontWeight='500'
              >
                NFTs Deposited
              </Text>
              <Heading fontSize={{ base: '4xl', md: '5xl' }}>40K</Heading>
            </VStack>
            <VStack alignItems={{ base: 'center', md: 'start' }}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color='honey.darkGray'
                fontWeight='500'
              >
                Daily Transactions
              </Text>
              <Heading fontSize={{ base: '4xl', md: '5xl' }}>10.5k+</Heading>
            </VStack>
          </Box>
          <Flex
            display={{ base: 'none', md: 'hidden' }}
            alignItems={'end'}
            justifyContent='space-between'
            gap='1vw'
            maxW='100rem'
            h={dimensions && dimensions.borderBox.height}
            mx='auto'
          >
            <NFTcard
              reference={elementRef}
              last={false}
              url='https://arweave.net/9PVPYCV5cGReauH1oiUS3vaOt8tKaXEHiFGfo6jRIM0'
              collection='DegenApe'
              id='7915'
              value='168'
            />
            <NFTcard
              last={false}
              url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsdbdKwut4v9vdNsN7hUyqm6Iz8jveUO6xQ&usqp=CAU'
              collection='DeGods'
              id='super'
              value='1380'
            />
            <NFTcard
              last={false}
              url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYucSnFkOhl_-b2Sg9kqIrSFZujzCqmdwGIrdXHnWqfRAvnrpXRY2OOgDMtLSaOnq29U&usqp=CAU'
              collection='Phunk'
              id='ashm'
              value='1380'
            />
            {widthLessThan1100 && (
              <NFTcard
                last={widthLessThan1240 ? true : false}
                url='https://pbs.twimg.com/media/FI1uXXcUcAAcUi1.jpg'
                collection='Azuki'
                id='manchanda'
                value='10.03'
              />
            )}
          </Flex>
        </Container>
        <Flex display={{ base: 'flex', md: 'none' }} px='0' h='20rem'>
          <Carousel />
        </Flex>
      </Container>
    </Container>
  );
};

export default NFTdetails;
