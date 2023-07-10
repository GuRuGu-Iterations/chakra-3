import { HStack, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../components';

function Root() {
  return (
    <HStack spacing='0'>
      <Sidebar />
      <Box as='main' w='100%' h='100vh' overflow='auto' p='3rem'>
        <Outlet />
      </Box>
    </HStack>
  );
}

export { Root };
