import { redirect } from 'react-router-dom';

import { registerUser } from '../../../mocks/my-handlers';
import { IUser } from '../../../types';

const registrationLoader = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const newUser: IUser = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const user = await registerUser(newUser);

  if (user) {
    return redirect('/');
  }

  return 'success';
};

export { registrationLoader };
