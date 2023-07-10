import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

interface IProps {
  children: string;
}

function SidebarItem({ children }: IProps) {
  return (
    <Box
      as={NavLink}
      to={children.toLowerCase()}
      w='100%'
      py='.2rem'
      borderRadius='.3rem'
      bg='white'
    >
      {children}
    </Box>
  );
}

export { SidebarItem };
