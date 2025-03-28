import { Helmet } from "react-helmet-async";
import { SEOProps } from "./constants/interface";

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default SEO;
