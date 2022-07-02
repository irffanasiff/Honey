import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import Styles from '../styles/styles.css';

const fonts = {
  ...chakraTheme.fonts,
  body: 'Red Hat Mono',
  heading: 'Red Hat Mono',
};

const overrides = {
  ...chakraTheme,
  fonts,
  colors: {
    honey: {
      white: '#FFFFFF',
      lightGray: '#E5E5E5',
      darkGray: '#929799',
      black: '#111111',
      orange: '#E78B00',
      yellow: '#E7B400',
    },
  },
  styles: {
    global: {
      'html, body': {
        // fontFamily: 'sans',
        background: '#ffffff',
        color: '#111111',
      },
      // '*': {
      //   outline: '1px solid red'
      // }
    },
  },
};

const theme = extendTheme(overrides);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'light',
          useSystemColorMode: false,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
