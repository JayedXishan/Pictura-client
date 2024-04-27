import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Parent from './Pages/Parent';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import Home from './Pages/Home';
import AllCraft from './Pages/AllCraft';
import AddCraft from './Pages/AddCraft';
import MyCraft from './Pages/MyCraft';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CraftDetails from './Pages/CraftDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/craft'),
      },
      {
        path:'/craft/:id',
        element:<CraftDetails></CraftDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`),
      },

      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/allcraft',
        element:<AllCraft></AllCraft>,
      },
      {
        path:'/mycraft',
        element:<MyCraft></MyCraft>,
      },
      {
        path:'/addcraft',
        element:<AddCraft></AddCraft>,
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
