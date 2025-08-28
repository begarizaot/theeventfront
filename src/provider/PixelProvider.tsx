import { useEffect } from "react";
import { initMetaPixel, pageView } from "../lib/metaPixel";

export const PixelProvider = ({ pixelId, children }: any) => {
  useEffect(() => {
    initMetaPixel(pixelId);
    pageView();
  }, [pixelId]);
  return <>{children}</>;
};
