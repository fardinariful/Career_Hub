import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Statstics from './Component/Statstics/Statstics.jsx'
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import Jobdetails from './Component/Jobdetails/Jobdetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statstics',
        element:<Statstics></Statstics>
      },
      {
        path:'/appliedjobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      },
      {
        path:'/jobdetails/:id',
        element:<Jobdetails></Jobdetails>,
        loader:()=>fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
