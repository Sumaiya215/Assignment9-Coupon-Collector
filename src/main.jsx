import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Brands from './components/Brands/Brands.jsx';
import MyProfile from './components/My Profile/MyProfile.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AboutUs from './components/About Us/AboutUs.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('./brands.json')
      },
      {
        path:'/brands',
        element:<Brands></Brands>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/myProfile',
        element:<MyProfile></MyProfile>
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>      
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
    </AuthProvider>
  </StrictMode>,
)
