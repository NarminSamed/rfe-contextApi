import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact/index.tsx";
import ProductDetail from './pages/Product/ProductDetail.tsx'
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
    ],
  },
]);


function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
