export const useDownloadQr = () => {
  const doDownload = (url: string, fileName: string) => {
    const a = document.createElement("a");
    a.download = fileName;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadQRCode = ({ id, slug }: any) => {
    const svg = document.getElementById(id)?.querySelector<SVGElement>("svg");
    const svgData = new XMLSerializer().serializeToString(svg!);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    doDownload(url, `${slug}-qrcode.svg`);
  };
  return { downloadQRCode };
};
