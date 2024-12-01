document.addEventListener('DOMContentLoaded', () => {
    const qrCodeContainer = document.getElementById('qr-code');
  
    const url = 'https://itsthecatdev.github.io/projects/tastschreibgenie';
    const qrCodeSize = 250; // Size in pixels
  
    // Use QRCode.js to generate the QR code
    new QRCode(qrCodeContainer, {
      text: url,
      width: qrCodeSize,
      height: qrCodeSize,
    });
  });
  