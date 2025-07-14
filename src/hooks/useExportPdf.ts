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
    
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
    
      const paddingX = 20; // izquierda/derecha
      const paddingY = 1; // arriba/abajo
    
      const usableWidth = pdfWidth - paddingX * 2;
      const usableHeight = pdfHeight - paddingY * 2;
    
      const imgProps = {
        width: canvas.width,
        height: canvas.height,
      };
    
      const scale = usableWidth / imgProps.width;
      const scaledHeight = imgProps.height * scale;
    
      let positionY = paddingY;
      let heightLeft = scaledHeight;
    
      const drawBackground = () => {
        pdf.setFillColor(18, 18, 18);
        pdf.rect(0, 0, pdfWidth, pdfHeight, "F");
      };
    
      drawBackground();
      pdf.addImage(imgData, "PNG", paddingX, positionY, usableWidth, scaledHeight);
      heightLeft -= usableHeight;
    
      while (heightLeft > 0) {
        positionY = paddingY + heightLeft - scaledHeight;
        pdf.addPage();
        drawBackground();
        pdf.addImage(imgData, "PNG", paddingX, positionY, usableWidth, scaledHeight);
        heightLeft -= usableHeight;
      }
    
      // ✅ FORZAR DESCARGA COMPATIBLE CON MÓVIL
      const blob = pdf.output("blob");
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${eventName || "event"}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      resolve(true);
    });
  };
  return { handleDownloadPDF };
};
