import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ApplicationLayout from './layout/ApplicationLayout';

import './assets/styles/index.css';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import WorksheetPage from './pages/WorksheetPage';
import NewCustomerPage from './pages/NewCustomerPage';
import CustomerSelectedProvider from './context/CustomerSelectedProvider';

export const router = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <HomePage />,
      },
      {
        path: '/customer',
        children: [
          { index: true, element: <CustomerPage /> },
          { path: 'new', element: <NewCustomerPage /> },
        ],
      },
      { path: '/worksheet', element: <WorksheetPage /> },
    ],
  },
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomerSelectedProvider>
      <RouterProvider router={router} />
    </CustomerSelectedProvider>
  </StrictMode>,
);
