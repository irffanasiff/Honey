import { Box } from '@chakra-ui/react';
import React from 'react';

const CustomButton = ({ children, dark }) => {
  return (
    <Box bg='black' rounded='sm'>
      <Box
        outline={!dark && '2px solid #E7B400'}
        bg={dark ? '#E7B400' : 'white'}
        rounded='sm'
              color={dark ? 'white' : '#E7B400'}
              fontWeight='600'
        transform={'translate(-4px, -4px)'}
        p='1rem 1.8rem'
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomButton;
