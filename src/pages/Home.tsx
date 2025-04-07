import { HomeProps } from "@/shared-interfaces/interface/home";
import withSEO from "@/hoc/WithSEO";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/themeToggler/mode-toggle";

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <h1>Home Page</h1>
      <ModeToggle />
      <Button>Click me</Button>
    </>
  );
};

const EnhancedHome = withSEO(Home);
export default EnhancedHome;
