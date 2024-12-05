export const cleanedBase64Data = (base64Data: any) => {
  return new Promise((resolve) => {
    const cleanedBase64Data = base64Data.replace(
      /^data:application\/pdf;base64,/,
      ""
    );

    const byteCharacters = atob(cleanedBase64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });
    resolve(blob);
  });
};
