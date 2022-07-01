import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import Image from 'next/image';

const Borrow = () => {
  const [widthLessThan1080] = useMediaQuery('(min-width: 1080px)');
  return (
    <Container maxW='120rem' p='1rem'>
      <VStack>
        <Heading
          textAlign='center'
          fontWeight='700'
          fontSize={{ base: '32px', md: '48px' }}
        >
          Borrow against your NFTs
        </Heading>
        <Text
          fontWeight='500'
          color='honey.darkGray'
          maxW='64rem'
          textAlign='center'
          p='1rem'
          fontSize={{ base: '16px', md: '20px' }}
        >
          Our protocol enables NFTs and metaverse assets to be used as
          collateral on loans. Honey allows users to participate in DeFi using
          their illiquid assets.
        </Text>
        <Center maxW='82rem'>
          <Box
            display='flex'
            flexDirection={widthLessThan1080 ? 'row' : 'column'}
            p='2rem'
            px={{ base: '2rem', md: `${widthLessThan1080 ? '2rem' : '5rem'}` }}
          >
            <Center flex='30 1 auto' w='auto' p='1.2rem' h='auto'>
              <Center w='100%' h='full' bg='honey.yellow' rounded='6px'>
                <Stack
                  overflow='hidden'
                  flexDirection={widthLessThan1080 ? 'column' : 'row-reverse'}
                  w='100%'
                  h='full'
                  rounded='6px'
                  transform={
                    widthLessThan1080
                      ? 'translate(-7px, -7px)'
                      : 'translate(7px, -7px)'
                  }
                  border='2px solid black'
                  p='2rem'
                  background='white'
                  alignItems='center'
                  justifyContent='space-around'
                  gap='2rem'
                  _before={{
                    content: "''",
                    width: '8rem',
                    height: '8rem',
                    backgroundColor: '#E7B400',
                    filter: 'blur(100px)',
                    position: 'absolute',
                    transform: 'translate(6rem, -2rem)',
                  }}
                >
                  <Center
                    w={{ base: '10rem', sm: '14rem', md: '20rem' }}
                    h={{ base: '10rem', sm: '14rem', md: '20rem' }}
                    position='relative'
                  >
                    <Image
                      src='/nftLoans.svg'
                      alt='nft Loans'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Center>
                  <VStack
                    alignSelf={widthLessThan1080 ? 'start' : 'end'}
                    alignItems={'start'}
                    textAlign='start'
                  >
                    <Heading
                      fontSize={{ base: '28px', md: '40px' }}
                      letterSpacing={'-1.63 px'}
                      fontWeight='700'
                    >
                      NFT Loans
                    </Heading>
                    <Text color='honey.darkGray' fontWeight='500'>
                      Easier than Ever
                    </Text>
                  </VStack>
                </Stack>
              </Center>
            </Center>
            <Wrap flex='70 1 auto' spacing='2.4rem' p='1rem'>
              <Center w='100%' bg='honey.yellow' rounded='6px'>
                <Stack
                  direction={{ base: 'row-reverse', md: 'row-reverse' }}
                  rounded='6px'
                  p='1rem'
                  transform='translate(-6px, -6px)'
                  border='2px solid black'
                  background='white'
                  alignItems={'end'}
                  gap='1rem'
                  w='full'
                  justify={'space-between'}
                  overflow='hidden'
                >
                  <Center
                    mx='auto'
                    w={{ base: '9rem', sm: '11rem', md: '15rem' }}
                    h={{ base: '9rem', sm: '11rem', md: '15rem' }}
                    position='relative'
                    _before={{
                      content: "''",
                      width: '7rem',
                      height: '7rem',
                      backgroundColor: '#E7B400',
                      filter: 'blur(50px)',
                      position: 'absolute',
                      transform: 'translate(1rem, 2rem)',
                    }}
                  >
                    <Image
                      src='/metaverse.svg'
                      alt='nft Loans'
                      layout='fill'
                      objectFit='contain'
                    />
                  </Center>
                  <VStack p='1rem' alignItems={'start'} textAlign='start'>
                    <Heading
                      fontSize={{ base: '28px', md: '40px' }}
                      px='1rem'
                      letterSpacing={'-1.63 px'}
                      fontWeight='700'
                    >
                      Metaverse <br />
                      Liquidity
                    </Heading>
                  </VStack>
                </Stack>
              </Center>
              <Flex
                flexDirection={{ base: 'column', sm: 'row' }}
                gap='2rem'
                w='100%'
                justifyContent={'space-between'}
              >
                <Center
                  maxW={widthLessThan1080 ? '23.5rem' : '26rem'}
                  w='100%'
                  bg='honey.yellow'
                  rounded='6px'
                >
                  <VStack
                    w='full'
                    h='100%'
                    flexDirection={'column-reverse'}
                    direction
                    alignItems='center'
                    justify='center'
                    rounded='6px'
                    transform='translate(-6px, -6px)'
                    border='2px solid black'
                    p='1rem'
                    background='white'
                    gap='2rem'
                  >
                    <Center w='13rem' h='7rem' position='relative'>
                      <Image
                        src='/nftPool.svg'
                        alt='nft Loans'
                        layout='fill'
                        objectFit='contain'
                      />
                    </Center>
                    <Heading
                      fontSize={{ base: '24px', md: '32px' }}
                      letterSpacing={'-1.02 px'}
                      fontWeight='700'
                    >
                      {' '}
                      NFT Pools
                    </Heading>
                  </VStack>
                </Center>
                <Center
                  maxW={widthLessThan1080 ? '23.5rem' : '29rem'}
                  w='100%'
                  bg='honey.yellow'
                  rounded='6px'
                >
                  <VStack
                    h='100%'
                    w='100%'
                    rounded='6px'
                    transform='translate(-6px, -6px)'
                    border='2px solid black'
                    p='1rem'
                    background='white'
                    alignItems={'center'}
                    textAlign='center'
                    justify='center'
                    gap='1rem'
                    _before={{
                      content: "''",
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: '#E7B400',
                      filter: 'blur(50px)',
                      position: 'absolute',
                      transform: 'translate(0rem, -2rem)',
                    }}
                  >
                    <VStack
                      fontSize={{ base: '24px', md: '32px' }}
                      letterSpacing={'-1.02 px'}
                      fontWeight='700'
                    >
                      <Heading color='honey.yellow'>$HONEY</Heading>
                      <Heading maxW='22rem'>Liquid Assets in DeFi</Heading>
                    </VStack>
                    <Text
                      color='honey.darkGray'
                      fontWeight='500'
                      fontSize={{ base: '10px', md: '14px' }}
                    >
                      HoneyDAO
                    </Text>
                  </VStack>
                </Center>
              </Flex>
            </Wrap>
          </Box>
        </Center>
      </VStack>
    </Container>
  );
};

export default Borrow;
