import { Outlet, NavLink } from 'react-router-dom';
import { Stack, Box, Heading, Text, HStack, Button } from '@chakra-ui/react';

function AuthLayout() {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      align='center'
      alignItems='center'
      justify='center'
      spacing='2rem'
      bgColor='bg.login'
      h='100vh'
      p='1rem'
      color='text.secondary'
    >
      <Box>
        <Heading
          as='h1'
          color='brand.main'
          size={['xl', '2xl', '4xl']}
          paddingBlockEnd={['0.5rem', '1rem', '2rem']}
        >
          Frogware
        </Heading>
        <Text noOfLines={2} fontSize='lg'>
          ICs for everyone. Unleash your inner engineer with our easy and
          affordable ICs.
        </Text>
      </Box>
      <Box w='100%' maxW='600px'>
        <HStack spacing='1rem' paddingBlockEnd={['1rem', '2rem', '3rem']}>
          <NavLink to='login'>
            <Button variant='primary'>Login</Button>
          </NavLink>
          <NavLink to='registration'>
            <Button variant='primary'>Register</Button>
          </NavLink>
        </HStack>
        <Outlet />
      </Box>
    </Stack>
  );
}

export { AuthLayout };
