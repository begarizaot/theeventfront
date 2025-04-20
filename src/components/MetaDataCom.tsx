import { Helmet } from "react-helmet-async";
const { VITE_APITHEEVENT } = import.meta.env;

interface MetaDataProps {
  title: any;
  urlImage?: any;
  url?: string;
  keywords?: string;
  description?: string;
  site_name?: string;
}

export const MetaDataCom = ({
  urlImage,
  title,
  url = VITE_APITHEEVENT,
  description = "",
  keywords = "",
  site_name = VITE_APITHEEVENT,
}: MetaDataProps) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={urlImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={site_name} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
