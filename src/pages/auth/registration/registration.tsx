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
  confirmPassword: string;
}

function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const watchPassword = watch('password');

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

      <FormControl isInvalid={!!errors.email}>
        <FormLabel>Confirm password</FormLabel>
        <Input
          type='password'
          {...register('confirmPassword', {
            required: 'Please enter your password',
            validate: (value) =>
              value === watchPassword || 'Passwords do not match',
          })}
        />
        {!errors.confirmPassword ? (
          <FormHelperText>Confirm your password.</FormHelperText>
        ) : (
          <FormErrorMessage>{errors.confirmPassword.message}</FormErrorMessage>
        )}
      </FormControl>

      <Button colorScheme='whiteAlpha' type='submit' marginBlockStart='1rem'>
        Register
      </Button>
    </form>
  );
}

export { Registration };
