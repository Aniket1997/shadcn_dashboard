import { LoginProps } from "@/shared-interfaces/interface/login";
import withSEO from "@/hoc/WithSEO";

const Login: React.FC<LoginProps> = () => {
  return <div>Login Page</div>;
};

// Wrap Login with withSEO before exporting
const EnhancedLogin = withSEO(Login);
export default EnhancedLogin;
