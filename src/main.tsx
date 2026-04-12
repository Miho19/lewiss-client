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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

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

async function enableMocking() {
  if (!import.meta.env.DEV) return;
  const { worker } = await import('./utility/msw/integration/Browser');
  return worker.start();
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion

enableMocking().then(() =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CustomerSelectedProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </CustomerSelectedProvider>
      </QueryClientProvider>
    </StrictMode>,
  ),
);
