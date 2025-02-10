import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Login from '../pages/auth/AuthDesign';
import Signup from '../pages/auth/AuthDesign';
import ForgotPassword from '../pages/auth/forgotPassword';
import OTPIndex from '../pages/auth/forgotPassword/OTPIndex';
import Newpassword from '../pages/auth/forgotPassword/Newpassword';
import SuccessIndex from '../pages/auth/forgotPassword/SuccessIndex';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../pages/LandingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          { path: '', element: <LandingPage /> },
          { path: 'about', element: <LandingPage />},
          // { path: 'coaching', element: <Coaching /> },
          // { path: 'voeding', element: <Voeding /> },
          // { path: 'beweging', element: <Beweging /> },
          // { path: 'shop', element: <Shop /> },
          // { path: 'hoe-begin-ik', element: <Hoe /> },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    children: [
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
        children: [
          {
            path: 'otp',
            element: <OTPIndex />,
          },
          {
            path: 'new-password',
            element: <Newpassword />,
          },
        ],
      },
      {
        path: 'success',
        element: <SuccessIndex />,
      }
    ],
  },
]); 