import { createBrowserRouter, redirect } from 'react-router-dom';
import { Root, RootErrorBoundary, Dashboard } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      console.log('root loader');
      throw redirect('/login');
      return null;
    },
    element: <Root />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        loader: async () => {
          console.log('dashboard loader');
          return null;
        },
      },
    ],
  },
  {
    path: 'login',
    element: <div>Login</div>,
  },
]);

export { router };
