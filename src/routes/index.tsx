import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]); 