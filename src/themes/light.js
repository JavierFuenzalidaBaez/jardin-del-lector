import { extendTheme, theme as base } from '@chakra-ui/react';

const light = extendTheme({
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  styles: {
    global: {
      'html, body': {
        m: 0,
        p: 0,
        h: '100vh',
        bg: 'bluishBlack.100',
        color: 'white',
      },
    },
  },
  colors: {
    bluishBlack: {
      50: '#3a3c78',
      100: '#1e1f3e',
      500: '#111122',
    },
  },
});

export default light;
