import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/forgotPassword';
import OTPIndex from './pages/auth/forgotPassword/OTPIndex';
import Newpassword from './pages/auth/forgotPassword/Newpassword';
import SuccessIndex from './pages/auth/forgotPassword/SuccessIndex';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />}>
          <Route path="otp" element={<OTPIndex />} />
          <Route path="new-password" element={<Newpassword />} />
          <Route path="success" element={<SuccessIndex />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;