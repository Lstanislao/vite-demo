import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import AmqpPage from './pages/Amqp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import VPOSPage from './pages/vpos';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/amqp",
    element: <AmqpPage/>,
  },
   {
    path: "/vpos",
    element: <VPOSPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
