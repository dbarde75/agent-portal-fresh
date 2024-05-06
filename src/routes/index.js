import { useRoutes } from 'react-router-dom';

// project-imports
// import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import Dashboard from 'menu-items/dashboard';
import MainLayout from 'layout/MainLayout';

// ==============================|| ROUTES RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
     {
      path: '/',
      // element: <CommonLayout layout="landing" />,
      element: (
        // <AuthGuard>
          <MainLayout />
        // </AuthGuard>
      ),
      children: [
        {
          path: '/',
          element: <Dashboard />
        }]
    },  
    // LoginRoutes,
    // ComponentsRoutes,
    MainRoutes
  ]);
}
