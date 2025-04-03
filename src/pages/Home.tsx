import { useEffect } from "react";
import { HomeProps } from "@/shared-interfaces/interface/home";
import withSEO from "@/hoc/WithSEO";

const Home: React.FC<HomeProps> = ({ seoProps }) => {
  useEffect(() => {
    if (seoProps) {
      document.title = seoProps.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", seoProps.description ?? "");
    }
  }, [seoProps]);

  return <div>Home Page</div>;
};

// ✅ Assign wrapped component to a named variable before export
const EnhancedHome = withSEO(Home);
export default EnhancedHome;
