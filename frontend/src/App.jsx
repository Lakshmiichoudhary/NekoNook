import Auth from "./Components/Auth/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Components/Browse/Browse";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Questions from "./pages/Questions";
import Sale from "./pages/Sale";
import AdminDashboard from "./Admin/AdminDashboard";
import NewDrop from "./pages/NewDrop";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import NewestProducts from "./Admin/NewestProducts";
import LimitedOffer from "./Admin/LimitedOffer";
import AddBestSeller from "./Admin/AddBestSeller";
import Products from "./Admin/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./Components/layout.tsx/MainLayout";
import ProtectedRoute from "./Components/Auth/ProtectedRoute"; // IMPORT THE GUARD WRAPPER

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/login",
      element: <Auth />,
    },

    // Main Customer Layout Setup
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Browse />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "FAQ's",
          element: <Questions />,
        },
        {
          path: "sale",
          element: <Sale />,
        },
        {
          path: "sale/ProductDetail/:id",
          element: <ProductDetail />,
        },
        {
          path: "newDrop",
          element: <NewDrop />,
        },
        {
          path: "newDrop/ProductDetail/:id",
          element: <ProductDetail />,
        },
        
        // PROTECTED CUSTOMER ROUTES (Must be logged in)
        {
          element: <ProtectedRoute />, 
          children: [
            {
              path: "wishlist",
              element: <WishList />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ],
    },

    // PROTECTED ADMIN ROUTE LAYOUT (Must be logged in AND have an admin role)
    {
      element: <ProtectedRoute allowedRoles={["admin"]} />,
      children: [
        {
          path: "Admin-Dashboard",
          element: <AdminDashboard />,
          children: [
            {
              index: true,
              element: <AddBestSeller />,
            },
            {
              path: "newest",
              element: <NewestProducts />,
            },
            {
              path: "offer",
              element: <LimitedOffer />,
            },
            {
              path: "product",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;