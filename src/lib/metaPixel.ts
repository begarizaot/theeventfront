// src/lib/metaPixel.ts
declare global {
  interface Window {
    fbq: any;
  }
}

export const initMetaPixel = (pixelId: string) => {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;
  /* @ts-ignore */
  !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode!.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
console.log(pixelId)
  window.fbq(
    "init",
    pixelId /*, { external_id: 'optional-advanced-matching' } */
  );
};

export const pageView = () => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
};

type TrackParams = Record<string, any>;
export const track = (event: string, params?: TrackParams) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params);
};

export const trackCustom = (event: string, params?: TrackParams) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", event, params);
};
