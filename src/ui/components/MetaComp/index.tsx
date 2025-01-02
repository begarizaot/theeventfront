import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface MetaProps {
  title: string;
  image: string;
  url: string;
}

export const MetaComp = ({ image, title, url }: MetaProps) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMetaTag = (property:any, content:any) => {
        let metaTag = document.querySelector(`meta[property='${property}']`);
        if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("property", property);
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute("content", content);
    };

    if (image) setMetaTag("og:image", image);
    if (url) setMetaTag("og:url", url);
    if (title) setMetaTag("og:title", title);
}, [title, image, url]);

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      {/* Open Graph Meta Tags */}
      <title>{title}</title>
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
