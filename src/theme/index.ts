import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      main: '#23BF1F',
    },
    text: {
      main: '#eee',
      secondary: '#b8b8b8',
    },
    bg: {
      login: '#2f0730',
    },
  },
  components: {
    Link: {
      variants: {
        navItem: {
          borderRadius: '0.3rem',
          w: '100%',
          py: '.2rem',
          bg: 'white',
          _hover: {
            textDecoration: 'none',
            bg: 'gray.100',
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          size: 'lg',
          height: '50px',
          borderRadius: '10px',
          fontSize: 'lg',
          fontWeight: 'bold',
          paddingInline: '1rem',
          paddingBlock: '0.5rem',
          ring: 2,
          ringColor: 'brand.main',
          color: 'text.main',
          _focus: { ring: 2 },
          _hover: { bgColor: 'brand.main' },
        },
      },
    },
  },
});

export { theme };
