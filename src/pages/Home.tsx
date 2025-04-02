import { useEffect } from "react";
import { HomeProps } from "@/shared-interfaces/src/home";
import withSEO from "@/hoc/WithSEO";

const Home: React.FC<HomeProps> = ({ seoProps, pageProps }) => {
  useEffect(() => {
    if (seoProps) {
      document.title = seoProps.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", seoProps.description ?? '');
    }
  }, [seoProps]);

  return <div>Home Page</div>;
};

// Wrap Home with withSEO before exporting
export default withSEO(Home);
