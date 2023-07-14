interface IUser {
  id: number;
  email: string;
  password: string;
}

const users: IUser[] = [
  {
    id: 1,
    email: 'petro@mail.com',
    password: '123',
  },
];

const getUser = () => {
  const existingUser = localStorage.getItem('my-fake-user');

  if (existingUser) {
    return JSON.parse(existingUser);
  }

  return null;
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
