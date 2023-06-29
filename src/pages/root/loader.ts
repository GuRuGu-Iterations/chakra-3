import { redirect } from 'react-router-dom';
import { getUser } from '../../features/auth';

async function loader() {
  const user = getUser();
  console.log(user);
  if (!user) {
    throw redirect('login');
  }

  return { user };
}

export { loader };
