import { createBrowserRouter } from "react-router-dom";
import InsuranceType from "@/pages/InsuranceType";
import { enumPaths } from "@/routes/routesUrls";
import Register from "@/pages/Register";
import Layout from "@/layout/Layout";
import VehicleType from "@/pages/VehicleType";
import InsuranceCompany from "@/pages/InsuranceCompany";

export const routes = createBrowserRouter([
  {
    path: enumPaths.home,
    element: <Layout />,
    errorElement: <div>some things is wrong</div>,
    children: [
      {
        path: enumPaths.home,
        element: <Register />,
      },
      {
        path: enumPaths.selectInsuranceType,
        element: <InsuranceType />,
      },
      {
        path: enumPaths.selectVehicleType,
        element: <VehicleType />,
      },
      {
        path: enumPaths.selectInsuranceCompany,
        element: <InsuranceCompany />,
      },
    ],
  },
]);
