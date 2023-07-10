import { createBrowserRouter, redirect } from 'react-router-dom';
import {
  Root,
  RootErrorBoundary,
  Dashboard,
  LoginErrorBoundary,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      console.log('root loader');
      // throw redirect('/login');
      return null;
    },
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: async () => {
          console.log('dashboard loader');
          return null;
        },
      },
      {
        path: 'tickets',
        element: <div>Tickets</div>,
      },
      {
        path: 'propositions',
        element: <div>Propositions</div>,
      },
      {
        path: '*',
        element: <div>404</div>,
      },
    ],
  },
  {
    path: 'login',
    loader: async () => {
      throw redirect('/propositions');
    },
    errorElement: <LoginErrorBoundary />,
    element: <div>Login</div>,
  },
]);

export { router };
