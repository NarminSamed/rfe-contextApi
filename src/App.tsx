import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
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
        element: <Product />,
      },
      {
        path: "favorites",
        element: <Favorites />,
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
