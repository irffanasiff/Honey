import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
//import Image from 'next/image';
import React from 'react';

const NFTcard = ({ reference, last, url, collection, id, value }) => {
  return (
    <Box ref={reference} bg='black' rounded={'md'} w='fit-content'>
      <VStack
        transform={{
          base: 'translate(-2px, -2px)',
          md: 'translate(-4px, -4px)',
        }}
        p={{
          base: '1rem 0.7rem',
          md: `${last ? '2rem 1rem' : '1.4rem 0.8rem'}`,
        }}
        w='fit-content'
        border='2px solid black'
        bg='white'
        gap={{ base: '0.6rem', md: `${last ? '1.4rem' : '0.7rem'}` }}
        rounded={'md'}
        color='#333333'
      >
        <Flex flexDirection='row' w='100%' justify='space-between'>
          <Heading fontSize={{ base: '16px', md: `${last ? '30px' : '24px'}` }}>
            {collection}
          </Heading>
          <Text
            fontWeight='400'
            color='honey.darkGray'
            fontSize={{ base: '12px', md: `${last ? '20px' : 'lg'}` }}
          >
            @{id}
          </Text>
        </Flex>
        <Center position='relative'>
          <Image
            src={url}
            alt={collection}
            w={{
              base: '9rem',
              sm: '40vw',
              md: `${last ? '19rem' : '13rem'}`,
              lg: `${last ? '21rem' : '15rem'}`,
            }}
            h={{
              base: '9rem',
              sm: '40vw',
              md: `${last ? '19rem' : '13rem'}`,
              lg: `${last ? '21rem' : '15rem'}`,
            }}
            objectFit='fill'
          />
        </Center>
        <VStack alignItems='start' w='full'>
          <Text
            fontWeight='600'
            fontSize={{ base: '12px', md: `${last ? '22px' : '16px'}` }}
            color='honey.darkGray'
          >
            Avg. Value
          </Text>
          <Heading
            fontSize={{ base: '16px', md: `${last ? '24px' : '20px'}` }}
            fontWeight={{ base: '400', md: `${last ? '500' : '400'}` }}
          >
            {value} Sol
          </Heading>
        </VStack>
      </VStack>
    </Box>
  );
};

export default NFTcard;
