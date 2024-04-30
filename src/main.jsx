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
import PrivateRoute from './Pages/PrivateRoute';
import UpdateCraft from './Pages/UpdateCraft';
import ErrorPage from './Pages/ErrorPage';
import Category from './Pages/Category';
import CategoryCraftDetails from './Pages/CategoryCraftDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://pictura-server.vercel.app/craft'),
      },
      {
        path: '/craft/:id',
        element: <PrivateRoute>
          <CraftDetails></CraftDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://pictura-server.vercel.app/craft/${params.id}`),
      },
      {
        path: 'category/:No',
        element:<Category></Category> ,
        loader: ({ params }) => fetch(`https://pictura-server.vercel.app/category/${params.No}`),
      },
      {
        path: 'categoryNo/:id',
        element:<CategoryCraftDetails></CategoryCraftDetails>,
        loader: ({ params }) => fetch(`https://pictura-server.vercel.app/categoryNo/${params.id}`),
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/allcraft',
        element: <AllCraft></AllCraft>,
        loader: () => fetch('https://pictura-server.vercel.app/craft'),
      },
      {
        path: '/mycraft',
        element: <PrivateRoute>
          <MyCraft></MyCraft>,
        </PrivateRoute>

      },
      {
        path: '/addcraft',
        element: <PrivateRoute>
          <AddCraft></AddCraft>
        </PrivateRoute>,
      },
      {
        path: '/updateCraft/:id',
        element: <UpdateCraft></UpdateCraft>,
        loader: ({params}) => fetch(`https://pictura-server.vercel.app/craft/${params.id}`),
      
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
