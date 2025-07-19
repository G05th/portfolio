// src/router/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import App from '../App'; // Assuming App.tsx is the main layout component

const router = createBrowserRouter([
  {
    path: '/portfolio/react/react-restaurant',
    element: <App />, // Use App as the layout wrapper
    children: [
      {
        index: true, // Default route for '/'
        element: <Home />,
      },
      {
        path: 'contato',
        element: <Contato />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;

