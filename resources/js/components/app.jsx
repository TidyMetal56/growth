import '../bootstrap';
import ReactDOM  from 'react-dom/client';
import React from 'react';
import Home from './Home';
import { RouterProvider } from 'react-router-dom'
import router from './Router';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
