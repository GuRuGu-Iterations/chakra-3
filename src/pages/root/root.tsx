import { HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../../components';

function Root() {
  return (
    <HStack spacing='2rem'>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </HStack>
  );
}

export { Root };
