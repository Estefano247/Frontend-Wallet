import AppRoutes from '@/route/AppRoutes';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider >
      <AppRoutes />
    </UserProvider>
  );
}

export default App;