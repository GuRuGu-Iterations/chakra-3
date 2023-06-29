import { VStack } from '@chakra-ui/react';
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
      <div>Dashboard</div>
      <div>Accounts</div>
      <div>Sales</div>
      <div>Expenses</div>
      <div>Reports</div>
    </VStack>
  );
}

export { Sidebar };
