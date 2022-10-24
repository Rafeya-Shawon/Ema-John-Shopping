import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import { productsAndCart } from './Loaders/productsAndCart';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: productsAndCart,
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          loader: productsAndCart,
          element:<Orders></Orders>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/about',
          element:<About></About>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
