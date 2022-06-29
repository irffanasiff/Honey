import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import '@fontsource/red-hat-mono';

const fonts = {
  ...chakraTheme.fonts,
  body: 'Red Hat Mono',
  heading: 'Red Hat Mono',
};

const overrides = {
  ...chakraTheme,
  fonts,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
