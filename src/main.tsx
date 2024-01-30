import { StrictMode as ReactStrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/index.scss";

import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Home from "@/pages/Home.tsx";
import Layout from "@/layout/Layout.tsx";
import About from "@/pages/About.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Layout>
          <ScrollRestoration />
        </Layout>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: "/",
  },
);

createRoot(document.querySelector("#root")!).render(
  <ReactStrictMode>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
      fallbackElement={<div>Loading...</div>}
    />
  </ReactStrictMode>,
);
