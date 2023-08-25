import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Register from "../pages/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>some things is wrong</div>,
    children: [
      {
        path: "/",
        element: <Register />,
      },
    ],
  },
]);
