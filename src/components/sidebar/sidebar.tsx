import { VStack } from '@chakra-ui/react';

import { SidebarLogo } from './sidebar-logo';
import { SidebarItem } from './sidebar-item';

const menuItems = ['Dashboard', 'Tickets', 'Propositions'];

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
      {menuItems.map((item) => (
        <SidebarItem key={item}>{item}</SidebarItem>
      ))}
    </VStack>
  );
}

export { Sidebar };
