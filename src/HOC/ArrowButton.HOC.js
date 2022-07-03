import { Box, Center, Flex, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

export const ArrowButton = (props) => {
  const [hover, setHover] = useState(false);
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)');
  return (
    <Box
      backgroundColor={'black'}
      w='12rem'
      h='fit-content'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      transition='all 0.3s'
      display='flex'
      alignItems={'center'}
      justifyContent='space-evenly'
      gap='0.7rem'
      bg={'white'}
      p='0.6rem 1.4rem'
      color={'white'}
      fontSize={{ base: 'sm', md: 'md' }}
      background='black'
      rounded='0.2rem'
      fontWeight={'800'}
      fontFamily='Inter'
      boxShadow='inset 2px 2px 2px #E7B400'
    >
      {props.children}
      <Flex
        alignItems={'flex-end'}
        justifyContent='end'
        w='1.5rem'
        transform={'rotate(-45deg)'}
        transition='all 0.5s'
        overflow='hidden'
      >
        <Center
          gap='0.8rem'
          flexDirection='row'
          transition='all 0.5s'
          transform={hover && 'translateX(2rem)'}
        >
          <Center transition='all 0.5s' transform={!hover && 'scale(0.2)'}>
            <HiOutlineArrowRight size='20' />
          </Center>
          <Center transition='all 0.5s' transform={hover && 'scale(0.2)'}>
            <HiOutlineArrowRight size='20' />
          </Center>
        </Center>
      </Flex>{' '}
    </Box>
  );
};
