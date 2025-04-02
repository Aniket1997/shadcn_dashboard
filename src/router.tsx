import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home seoProps={{ title: "Home | Beyond the thinking", description: "Welcome to our homepage" }} />,
  },
  {
    path: "/login",
    element: <Login seoProps={{ title: "Login | Explore the Dashboard", description: "Sign in to explore your account" }} pageProps={{ /* other login page props */ }} />,
  },
]);

export default router;
