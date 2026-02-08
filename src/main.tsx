import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ApplicationLayout from './layout/ApplicationLayout';
import Home from './pages/Home';

import './assets/styles/index.css';

export const router = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
