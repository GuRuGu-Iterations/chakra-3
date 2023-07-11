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

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      console.log('root loader');
      throw redirect('/auth');
      return null;
    },
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: 'dashboard',
        loader: async () => {
          console.log('dashboard loader');
          return null;
        },
        element: <Dashboard />,
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
    path: 'auth',
    loader: async () => {
      // throw redirect('/propositions');
      return 'success';
    },
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
