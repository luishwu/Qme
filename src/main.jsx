import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Home from './pages/Home';
import MainLayout from './components/MainLayout/MainLayout';
import Navbar from "./components/Navbar/Navbar";
import Profile from './pages/Profile';
import Queue from './pages/Queue';
import React from 'react'
import ReactDOM from 'react-dom/client'

const AppLayout = () => (
  <>
    <MainLayout />
  </>
);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "queue",
        element: <Queue />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
