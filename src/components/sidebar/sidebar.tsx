import { NavLink, useLocation } from 'react-router-dom';
import { VStack, Link } from '@chakra-ui/react';

import { SidebarLogo } from './sidebar-logo';

function Sidebar() {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/';
  const isTickets = pathname === '/tickets';
  const isPropositions = pathname === '/propositions';

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
      <Link
        as={NavLink}
        to='/'
        variant='navItem'
        color={isDashboard ? 'blue.500' : 'inherit'}
      >
        Dashboard
      </Link>
      <Link
        as={NavLink}
        to='/tickets'
        variant='navItem'
        color={isTickets ? 'blue.500' : 'inherit'}
      >
        Tickets
      </Link>
      <Link
        as={NavLink}
        to='/propositions'
        variant='navItem'
        color={isPropositions ? 'blue.500' : 'inherit'}
      >
        Propositions
      </Link>
    </VStack>
  );
}

export { Sidebar };
