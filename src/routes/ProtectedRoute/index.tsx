import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';

const ProtectedRoute = () => {
  const isAuthenticated  = true // Access user from context

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
