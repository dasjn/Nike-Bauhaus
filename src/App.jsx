import React from "react";
import { useIsMobile } from "./IsMobileContext"; // Import the context hook
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import MobileRoot from "./routes/MobileRoot";
import ErrorPage from "./routes/ErrorPage";
import LandingPage from "./routes/LandingPage";
import MobileLandingPage from "./routes/MobileLandingPage";
import ShopPage from "./routes/ShopPage";
import MobileShopPage from "./routes/MobileShopPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const isMobile = useIsMobile();
  
  function createRouter() {
    return createBrowserRouter([
      {
        path: "/",
        element: isMobile ? <MobileRoot /> : <Root />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: isMobile ? <MobileLandingPage /> : <LandingPage />,
          },
          {
            path: "shop",
            element: isMobile ? <MobileShopPage /> : <ShopPage />,
          },
        ],
      },
    ]);
  }

  const router = createRouter(); // Call the createRouter function and store the result in router
  
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  )
  
}
