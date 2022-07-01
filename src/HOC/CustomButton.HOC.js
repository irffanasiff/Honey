import { Box } from '@chakra-ui/react';
import React from 'react';

const CustomButton = ({ children, dark }) => {
  return (
    <Box bg='black' rounded='sm' border={'2px solid black  '}>
      <Box
        _hover={{
          transform: 'translate(-7px, -7px)',
        }}
        fontSize={{ base: 'sm', md: 'md' }}
        transition='all 0.2s'
        border={'2px solid #E7B400'}
        bg={dark ? '#E7B400' : 'white'}
        rounded='sm'
        color={dark ? 'white' : '#E7B400'}
        fontWeight='500'
        transform={{
          base: 'translate(-3px, -3px)',
          md: 'translate(-5px, -5px)',
        }}
        p={{ base: '0.8rem 1.4rem', md: '1rem 1.8rem' }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomButton;
