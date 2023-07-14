import { IUser } from '../types';

const users: IUser[] = [
  {
    email: 'petro@mail.com',
    password: '123',
  },
];

const getUser = () => {
  const existingUser = localStorage.getItem('chakra-3-user');

  if (!existingUser) {
    return null;
  }

  return JSON.parse(existingUser);
};

const registerUser = (user: IUser) => {
  const existingUser = users.find((u) => u.email === user.email);

  if (existingUser) {
    return null;
  }

  users.push(user);
  localStorage.setItem('chakra-3-user', JSON.stringify(user));

  return user;
};

export { getUser, registerUser };
