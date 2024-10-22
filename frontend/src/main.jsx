import React from 'react';
import ReactDOM from 'react-dom/client';
 
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx'; // Importing the router you defined
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
 