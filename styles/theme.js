import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import '@fontsource/red-hat-mono';
import '@fontsource/inter';

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
      1: '#E7B400',
    },
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
