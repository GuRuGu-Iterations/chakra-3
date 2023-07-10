import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      main: '#23BF1F',
    },
  },
  components: {
    Box: {
      variants: {
        menuItem: {
          borderRadius: '0.5rem',
        },
      },
    },
  },
});

export { theme };
