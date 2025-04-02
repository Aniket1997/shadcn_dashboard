import React from "react";
import SEO from "../SEO";
import { SEOProps } from "../shared-interfaces/src/seo";

// Higher-Order Component to wrap a page with SEO metadata
const withSEO = <P extends { seoProps?: SEOProps }>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <>
      {props.seoProps && <SEO title={props.seoProps.title} description={props.seoProps.description} />}
      <Component {...props} />
    </>
  );
};

export default withSEO;
