import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/nodejs-course/",
    element: <Layout />,
    children: [{ index: true, element: <App /> }],
  },
]);
