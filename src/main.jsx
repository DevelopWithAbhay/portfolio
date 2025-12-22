import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Shopify from './pages/shopify.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Approach from './pages/Approach.jsx'
import Projects from './pages/Projects.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Shopify",
    element: <Shopify/>,
  },

  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact",
    element: <Approach/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
  {
    path: "/shopifywork",
    element: <shopifywork/>,
  },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
   
  </StrictMode>,
)
