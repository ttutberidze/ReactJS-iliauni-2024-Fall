import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import View from './routes/view';
import Edit from './routes/edit';
import ErrorPage from './error-page';

const root = ReactDOM.createRoot(
  document.getElementById('root')
); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/user/:userId',
        element: <View />,
      },
      {
        path: '/user/:userId/edit',
        element: <Edit />,
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);