import Home from '@/pages/Home';
import Dashboard from '@/pages/Dashboard';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import Provider from '@/pages/Provider';
import Services from '@/pages/Services';

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Inicio'
  },
  {
    path: '/register',
    element: <RegisterPage />,
    name: 'Registro'
  },
  {
    path: '/login',
    element: <LoginPage />,
    name: 'Login'
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    name: 'Panel de Administración'
  },
  {
    path: '/dashboard/provider',
    element: <Provider />,
    name: 'Proveedores'
  },
  {
    path: '/dashboard/services',
    element: <Services />,
    name: 'Servicios'
  }
];