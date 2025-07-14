import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useExportPdf = () => {
  const handleDownloadPDF = async (byId: any, eventName: any) => {
    return new Promise(async (resolve, reject) => {
      const element = document.getElementById(byId);
      if (!element) return reject();

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

      // Paddings personalizados
      const paddingX = 20; // left/right
      const paddingY = 1; // top/bottom

      const usableWidth = pdfWidth - paddingX * 2;
      const usableHeight = pdfHeight - paddingY * 2;

      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };

      // Escalar imagen para que encaje en ancho disponible
      const scale = usableWidth / imgProps.width;
      const scaledHeight = imgProps.height * scale;

      let positionY = paddingY;
      let heightLeft = scaledHeight;

      const drawBackground = () => {
        pdf.setFillColor(18, 18, 18); // #121212
        pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
      };

      // Primera página
      drawBackground();
      pdf.addImage(
        imgData,
        "PNG",
        paddingX,
        positionY,
        usableWidth,
        scaledHeight
      );

      heightLeft -= usableHeight;

      // Páginas adicionales si es necesario
      while (heightLeft > 0) {
        positionY = paddingY + heightLeft - scaledHeight;
        pdf.addPage();
        drawBackground();
        pdf.addImage(
          imgData,
          "PNG",
          paddingX,
          positionY,
          usableWidth,
          scaledHeight
        );
        heightLeft -= usableHeight;
      }
      pdf.save(`${eventName || "event"}.pdf`);
      resolve(true);
    });
  };
  return { handleDownloadPDF };
};
