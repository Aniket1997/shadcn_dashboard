import { useEffect } from "react";
import { LoginProps } from "@/shared-interfaces/interface/login";
import withSEO from "@/hoc/WithSEO";

const Login: React.FC<LoginProps> = ({ seoProps }) => {
  useEffect(() => {
    if (seoProps) {
      document.title = seoProps.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", seoProps.description ?? "");
    }
  }, [seoProps]);

  return <div>Login Page</div>;
};

// Wrap Login with withSEO before exporting
const EnhancedLogin = withSEO(Login);
export default EnhancedLogin;
