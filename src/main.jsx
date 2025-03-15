import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';



import {
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/navbar/Login.jsx';
import Logout from './components/navbar/Logout.jsx';
import WelcomePage from './components/navbar/WelcomePage.jsx';
import ForgotPassword from './components/navbar/ForgotPassword.jsx';
import Home from './Home/Home.jsx';
import CartPage from './components/navbar/CartPage.jsx';
import Reviews from './components/navbar/Reviews.jsx';
import Faq from './components/navbar/Faq.jsx';
import Services from './components/navbar/Services.jsx';
import AboutUs from './About/AboutUs.jsx';
import ContactUs from './Contact/ContactUs.jsx';
import Blog from './components/navbar/Blog.jsx';
import SingleBlog from './components/navbar/SingleBlog.jsx';
import Loader from './components/navbar/Loader.jsx';
import Profile from './components/navbar/Profile.jsx';
import Welcome2 from './components/navbar/Welcome2.jsx';
import Welcome3 from './components/navbar/Welcome3.jsx';
import SingleShop from './components/navbar/SingleShop.jsx';
import Shop from './components/navbar/Shop.jsx';
import SignUp from './components/navbar/SignUp.jsx';




const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/singleshop",
        element: <SingleShop />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/cartpage",
        element: <CartPage />
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/singleblog",
        element: <SingleBlog />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/profile",
        element: <Profile />
      }

    ],
  },


  {
    path: "/welcomepage",
    element: <WelcomePage />
  },
  {
    path: "/welcome2",
    element: <Welcome2 />
  },
  {
    path: "/welcome3",
    element: <Welcome3 />
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/loader",
    element: <Loader />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);