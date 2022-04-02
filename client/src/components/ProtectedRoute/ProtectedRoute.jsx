import { Outlet } from 'react-router-dom';
import Login from '../../pages/Login';

const ProtectedRoute = ({ children }) => {
  const isTokenValid = !!sessionStorage.token;
  if (!isTokenValid) {
    window.history.replaceState(null, '', '/login');
    return <Login />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
