import '../bootstrap';
import ReactDOM  from 'react-dom/client';
import React from 'react';
import Home from '../Layout/Home';
import { RouterProvider } from 'react-router-dom'
import router from '../Layout/Router';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
