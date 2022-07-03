import {
  Box,
  Center,
  Container,
  Flex,
  Collapse,
  Text,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { Cross as Hamburger } from 'hamburger-react';
import { ArrowButton } from '../../HOC/ArrowButton.HOC';
import Logo from '../assets/Logo';

//import CustomButton from '../../HOC/Button';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container maxW='full' p='0' bg={'#FFFFFF60'}>
      <Flex
        maxW='100rem'
        mx='auto'
        justifyContent='space-between'
        p={{ base: '1rem 0.8rem', sm: '2.8rem 1.4rem' }}
      >
        <Logo />
        <Center
          display={{ base: 'none', lg: 'flex' }}
          flexDirection='row'
          fontSize='20px'
          minH='100%'
          maxW='32rem'
          w='full'
          justifyContent={'space-around'}
        >
          <Box as='button'>
            <Text
              fontWeight='500'
              // _hover={{
              //   textDecorationLine: 'underline',
              //   textDecorationStyle: `wavy`,
              //   textDecorationColor: `#E7B400`,
              // }}
            >
              Governance
            </Text>
          </Box>
          <Box as='button'>
            <Text fontWeight='500'>Developer</Text>
          </Box>
          <Box as='button'>
            <Text fontWeight='500'>Blogs</Text>
          </Box>
        </Center>

        <Button display={{ base: 'none', lg: 'flex' }} variant={'unstyled'}>
          {/* <CustomButton>Sponser Me</CustomButton> */}
          <ArrowButton>GO TO APP</ArrowButton>
        </Button>
        <Center display={{ base: 'flex', lg: 'none' }}>
          <Hamburger toggled={isOpen} toggle={onToggle} />
        </Center>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Center
          display={{ base: 'flex', lg: 'none' }}
          flexDirection='column'
          fontSize='2xl'
          p='2rem'
          gap='1.4rem'
          fontWeight='500'
        >
          <Text>Governance</Text>
          <Text>Developer</Text>
          <Text>Blogs</Text>
        </Center>
      </Collapse>
    </Container>
  );
};

export default Navbar;
