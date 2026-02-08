import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ApplicationLayout from './layout/ApplicationLayout';

import './assets/styles/index.css';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import WorksheetPage from './pages/WorksheetPage';

export const router = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/customer',
        element: <CustomerPage />,
      },
      { path: '/worksheet', element: <WorksheetPage /> },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
