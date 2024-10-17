import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import View from './routes/view';
import Edit from './routes/edit';
import ErrorPage from './error-page';
import {rootLoader, createContactAction} from './routes/root'
import {userLoader} from './routes/view'
import {saveContactAction} from './routes/edit'

const root = ReactDOM.createRoot(
  document.getElementById('root')
); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    action: createContactAction,
    loader: rootLoader,
    children: [
      {
        path: 'user/:userId',
        element: <View />,
        loader: userLoader
      },
      {
        path: '/user/:userId/edit',
        element: <Edit />,
        loader: userLoader,
        action: saveContactAction
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);