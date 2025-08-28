import TiktokPixel from "tiktok-pixel";

interface PixelEvent {
  contens: Array<{
    content_id: string | undefined; // ID of the product
    content_type?: string; // Either product or product_group
    content_name: string | undefined; // The name of the page or product
  }>;
  value?: number | undefined; // Value of the order or items sold
  currency?: string; // The 4217 currency code
}

export const onInitializePixel = async (pixelId: any) => {
  if (typeof window === "undefined") return;
  (window as any)?.ttq?.load(pixelId);
  await TiktokPixel.init(pixelId, {}, { debug: true });
};

const onResetData = (data: PixelEvent) => {
  let dataDefault: any = {
    contents: data?.contens.map((item) => ({
      content_id: item.content_id,
      content_type: item.content_type || "product",
      content_name: item.content_name,
    })),
    value: data?.value || 0,
    currency: data?.currency || "USD",
  };
  return dataDefault;
};

const onResetDataMeta = (data: any) => {
  let dataDefault: any = {
    contents: data?.contens.map((item: any) => ({
      id: item.content_id,
    })),
    content_type: "product",
    value: data?.value || 0,
    currency: data?.currency || "USD",
  };
  return dataDefault;
};

export const pixelViewContent = (data: PixelEvent) => {
  TiktokPixel.track("ViewContent", onResetData(data));
};

export const pixelViewContentMeta = (data: PixelEvent) => {
  window?.fbq?.("track", "ViewContent", onResetDataMeta(data));
};

export const pixelAddToCart = (data: PixelEvent) => {
  TiktokPixel.track("AddToCart", onResetData(data));
};

export const pixielAddToCartMeta = (data: PixelEvent) => {
  window?.fbq?.("track", "AddToCart", onResetDataMeta(data));
};

export const pixelInitiateCheckout = (data: PixelEvent) => {
  TiktokPixel.track("InitiateCheckout", onResetData(data));
};

export const pixelPurchase = (data: PixelEvent) => {
  TiktokPixel.track("Purchase", onResetData(data));
};

export const pixelPurchaseMeta = (data: PixelEvent) => {
  window?.fbq?.("track", "Purchase", onResetDataMeta(data));
};
