import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import Provider from '@/pages/Provider';
import Services from '@/pages/Services';
import Index from '@/pages/Index';
import ViewProfile from '@/pages/ViewProfile';
import Pay from '@/pages/Pay';
import Send from '@/pages/Send';

import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

export const routes = [
  {path: '/', element: <Home />,},
  {path: '/register', element: <RegisterPage />,},
  {path: '/login', element: <LoginPage />,},
  {
    path: '/dashboard',
    element: (
      <AdminRoute>
        <Dashboard/>
      </AdminRoute>
    ),
  },
  {
    path: '/dashboard/provider', 
    element: (
      <AdminRoute>
        <Provider />
      </AdminRoute>
    ),
  },
  {
    path: '/dashboard/services',
    element: (
      <AdminRoute>
        <Services />
      </AdminRoute>
    ),
  },
  {
    path: '/index',
    element: ( 
      <ProtectedRoute>
        <Index />
      </ProtectedRoute>
    ),
  },
  {
    path: 'index/viewProfile',
    element: (
      <ProtectedRoute>  
        <ViewProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/index/pay',
    element: ( 
      <ProtectedRoute>
        <Pay />
      </ProtectedRoute>
    ),
  },
  {
    path: '/index/send',
    element: ( 
      <ProtectedRoute>
        <Send />
      </ProtectedRoute>
    ),
  }
];