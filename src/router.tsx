import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import withSEO from "./hoc/WithSEO";

const HomeWithSEO = withSEO(Home, {
  title: "Home | My App",
  description: "Welcome to our homepage",
});

const LoginWithSEO = withSEO(Login, {
  title: "Login | My App",
  description: "Sign in to explore your account",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWithSEO />,
  },
  {
    path: "/login",
    element: <LoginWithSEO />,
  },
]);

export default router;
