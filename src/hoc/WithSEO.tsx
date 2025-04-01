import React from "react";
import SEO from "../SEO";
import { SEOProps } from "../shared-interfaces/src/index";

// Higher-Order Component to wrap a page with SEO metadata
const withSEO = <P extends object>(
  Component: React.ComponentType<P>,
  seoProps: SEOProps
) => {
  return (props: P) => (
    <>
      <SEO title={seoProps.title} description={seoProps.description} />
      <Component {...props} />
    </>
  );
};

export default withSEO;
