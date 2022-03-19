export const downloadBase64 = ({ base64, fileName }) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = base64;
  downloadLink.download = fileName;
  downloadLink.click();
};
