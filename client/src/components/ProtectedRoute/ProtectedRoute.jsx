import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isTokenValid = !!sessionStorage.token;

  if (!isTokenValid) {
    return <Navigate to="/login" />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
