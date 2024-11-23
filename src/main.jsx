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
import PrivateRoute from './components/Routes/PrivateRoute.jsx';
import Coupon from './components/CouponPage/CouponPage.jsx';
import CouponPage from './components/CouponPage/CouponPage.jsx';
import UpdateProfile from './components/Update Profile/UpdateProfile.jsx';

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
        loader:() => fetch('./brands.json'),
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
        path:'/coupon/:_id',
        loader:async({params})=>{ 
          const res = await fetch('/brands.json')
          const data = await res.json()
          console.log(data,params._id);
          const singleData = data.find(p=> p._id == params._id)
          return singleData;
        },
        element:<PrivateRoute><CouponPage></CouponPage></PrivateRoute>
      },
      {
        path:'/myProfile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path:'/updateProfile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      // {
      //   path:'/aboutUs',
      //   element:<AboutUs></AboutUs>      
      // }
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
