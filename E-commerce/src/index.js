import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import AllProducts from './pages/AllProducts';
import ProtectedRoute from './pages/protectedRoute';
import Join from './pages/join';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
      {
        index:true,
        path:'/',
        element:<Home/>,
      },
      {
        path:'/products',
        element:<AllProducts/>
      },
      {
        path:'/products/new',
        element:<ProtectedRoute requireAdmin>
                  <NewProduct/>
                </ProtectedRoute>
      },
      {
        path:"/products/:id",
        element:<ProductDetail/>
      },
      {
        path:'/cart',
        element:<ProtectedRoute> 
          <MyCart/>
          </ProtectedRoute>
      },
      {
        path:'/join',
        element:<Join/>

      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
