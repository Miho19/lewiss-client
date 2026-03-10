import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ApplicationLayout from './layout/ApplicationLayout';

import './assets/styles/index.css';
import HomePage from './pages/home/HomePage';
import CustomerPage from './pages/customer/CustomerPage';
import WorksheetHomePage from './pages/worksheet/WorksheetHomePage';
import NewCustomerPage from './pages/customer/NewCustomerPage';
import CustomerSelectedProvider from './context/CustomerSelectedProvider';
import WorksheetPage from './pages/worksheet/WorksheetPage';
import EditCustomerPage from './pages/customer/EditCustomerPage';
import WorksheetAdditionalPage from './pages/worksheet/WorksheetAdditionalPage';

import WorksheetOptionPage from './pages/worksheet/WorksheetOptionPage';
import WorksheetProductPage from './pages/worksheet/WorksheetProductPage';

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
          { path: 'edit', element: <EditCustomerPage /> },
        ],
      },
      {
        path: '/worksheet',
        children: [
          { index: true, element: <WorksheetHomePage /> },
          { path: ':worksheetId', element: <WorksheetPage /> },
          { path: ':worksheetId/additional', element: <WorksheetAdditionalPage /> },
          { path: ':worksheetId/option', element: <WorksheetOptionPage /> },
          { path: ':worksheetId/product/:productId', element: <WorksheetProductPage /> },
        ],
      },
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
