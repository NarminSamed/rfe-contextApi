import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/Header";
import Home from "./pages/Home/index.tsx";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact/index.tsx";
import ProductDetail from "./pages/Product/ProductDetail.tsx";
import Error from "./pages/404/index.tsx";
import AdminHome from "./pages/AdminPages/Home/index.tsx";
import AdminHeader from "./components/AdminHeader/index.tsx";
import AdminProduct from "./pages/AdminPages/Products/index.tsx";
import AddCategory from "./pages/AdminPages/AddCategory/index.tsx";
import Login from "./pages/Login/index.tsx";
import PrivateRoute from "./components/PrivateRoutes/PrivateRoute.tsx";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AppHeader />
        <Outlet />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: (
          <>
            <Product />
            {/* <Outlet /> */}
          </>
        ),
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <>
        <AdminHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/products",
        element: <AdminProduct />,
      },
      {
        path: "/admin/add-category",
        element: <AddCategory />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;
