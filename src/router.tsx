import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SEO from "./SEO";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <SEO title="Home | My App" description="Welcome to our homepage" />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <SEO title="Login | My App" description="Sign in to explore your account" />
        <Login />
      </>
    ),
  },
]);

export default router;
