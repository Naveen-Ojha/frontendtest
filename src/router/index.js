import React from 'react'
import { useRoutes } from "react-router-dom";
import HomePage from "../component/HomePage";
import Layout from "../layout/Layout";

export default function Index() {
    return useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [{ path: "", element: <HomePage /> }],
        },
      ]);
}
