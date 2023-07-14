import { NavLink } from 'react-router-dom';
import { VStack, Link } from '@chakra-ui/react';

import { SidebarLogo } from './sidebar-logo';

function Sidebar() {
  return (
    <VStack
      align='start'
      spacing='1rem'
      width='200px'
      height='100vh'
      px='1rem'
      bg='gray.200'
    >
      <SidebarLogo />
      <Link as={NavLink} to='/' variant='navItem'>
        Dashboard
      </Link>
      <Link as={NavLink} to='/tickets' variant='navItem'>
        Tickets
      </Link>
      <Link as={NavLink} to='/propositions' variant='navItem'>
        Propositions
      </Link>
    </VStack>
  );
}

export { Sidebar };
