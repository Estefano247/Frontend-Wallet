import { Navigate } from "react-router-dom";
import useUser from '@/hooks/useUser'; 

const AdminRoute = ({ children }) => {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />; 
  if (!user.admin) return <Navigate to="/index" replace />;

  return children;
};

export default AdminRoute;
