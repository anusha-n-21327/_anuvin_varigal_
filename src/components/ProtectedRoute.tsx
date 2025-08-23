import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { showError } from '@/utils/toast';
import { useEffect } from 'react';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      showError("Please sign in to view the poems.");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;