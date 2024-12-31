const convertToPngAndUpload = async (imageFile: File) => {
  return new Promise<string>((resolve) => {
    const imageUrl = URL.createObjectURL(imageFile);
    const img = new Image();

    img.src = imageUrl;

    img.onload = async () => {
      // Crear un canvas para convertir la imagen a PNG
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        alert("Error al crear el canvas");
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Convertir la imagen a PNG
      const pngBlob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            alert("Error al convertir la imagen");
          }
        }, "image/png");
      });

      resolve(pngBlob as any);
    };
  });
};

export default convertToPngAndUpload;
