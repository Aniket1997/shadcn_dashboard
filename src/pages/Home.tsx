import { useEffect } from "react";
import { HomeProps } from "@/shared-interfaces/interface/home";
import withSEO from "@/hoc/WithSEO";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themeToggler/mode-toggle";

const Home: React.FC<HomeProps> = ({ seoProps }) => {
  useEffect(() => {
    if (seoProps) {
      document.title = seoProps.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", seoProps.description ?? "");
    }
  }, [seoProps]);

  return (
    <>
      <h1>Home Page</h1>
      <ModeToggle/>
      <Button>Click me</Button>
    </>
  );
};

// ✅ Assign wrapped component to a named variable before export
const EnhancedHome = withSEO(Home);
export default EnhancedHome;
