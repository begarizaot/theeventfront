import { Helmet } from "react-helmet-async";

interface MetaProps {
  image?: string;
  title?: string;
  url?: string;
}

export const MetaComp = ({
  image = "",
  title = "The Event Jet",
  url = import.meta.env?.VITE_PUBLIC_URL,
}: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};
