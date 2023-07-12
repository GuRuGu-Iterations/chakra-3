import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          {...register('email', { required: 'Email is required' })}
        />
        {!errors.email ? (
          <FormHelperText>Enter the email you registered with.</FormHelperText>
        ) : (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          {...register('password', { required: 'Please enter your password' })}
        />
        {!errors.password ? (
          <FormHelperText>Enter your password.</FormHelperText>
        ) : (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        )}
      </FormControl>

      <Button colorScheme='whiteAlpha' type='submit' marginBlockStart='1rem'>
        Log In
      </Button>
    </form>
  );
}

export { Login };
