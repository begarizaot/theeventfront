import { Helmet } from "react-helmet-async";

interface MetaProps {
  title: string;
  image: string;
  url: string;
}

export const MetaTags = ({ image, title, url }: MetaProps) => {
  return (
    <Helmet>
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {/* Other meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
