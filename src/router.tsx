import { createBrowserRouter, redirect } from 'react-router-dom';
import {
  Root,
  RootErrorBoundary,
  Dashboard,
  AuthLayout,
  AuthErrorBoundary,
  Login,
  Registration,
} from './pages';
import { getUser } from './mocks/my-handlers';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      console.log('root loader');
      const user = getUser();
      if (!user) {
        throw redirect('/login');
      }
      return user;
    },
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        loader: async () => {
          console.log('dashboard loader');
          return null;
        },
        element: <Dashboard />,
      },
      {
        path: 'tickets',
        loader: async () => {
          console.log('tickets loader');
          return null;
        },
        element: <div>Tickets</div>,
      },
      {
        path: 'propositions',
        loader: async () => {
          console.log('propositions loader');
          return null;
        },
        element: <div>Propositions</div>,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <AuthErrorBoundary />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
]);

export { router };
