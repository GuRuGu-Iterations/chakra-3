import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useBeforeUnload, Form, useFetcher } from 'react-router-dom';

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
  const fetcher = useFetcher();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    fetcher.submit(formData, {
      action: '/register',
      method: 'POST',
    });
  };

  useBeforeUnload(() => {
    console.log('Running useBeforeUnload');
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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

      <FormControl isInvalid={!!errors.password}>
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

      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel>Confirm password</FormLabel>
        <Input
          type='password'
          {...register('confirmPassword', {
            required: 'Confirm your password',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match',
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
    </Form>
  );
}

export { Registration };
