function convertirPDF(idSeccionHtml) {
  const { jsPDF } = window.jspdf;

  document.getElementById("textosGraficoDesempleo").style.display = "block";
  document.getElementById("textosGrafico").style.display = "block";
  document.getElementById("textosGraficoHomicidios").style.display = "block";

  const nombreElemento = document.getElementById("nombreArchivo");
  let nombreArchivo = "Informe";

  if (nombreElemento) {
    nombreArchivo = nombreElemento.textContent.trim();
  }

  nombreArchivo = nombreArchivo.replace(/[^a-zA-Z0-9 _-]/g, "").replace(/\s+/g, "_");

  const elemento = document.getElementById(idSeccionHtml);

  const canvasElements = elemento.querySelectorAll('canvas');
  const canvasToImageMap = [];

  canvasElements.forEach(canvas => {
    const image = new Image();
    image.src = canvas.toDataURL("image/png");
    image.style.width = canvas.style.width;
    image.style.height = canvas.style.height;
    image.className = canvas.className;

    canvas.parentNode.insertBefore(image, canvas);
    canvas.style.display = 'none';

    canvasToImageMap.push({ canvas, image });
  });

  const clon = elemento.cloneNode(true);

  const contenedorSimulado = document.createElement('div');
  contenedorSimulado.style.width = '1200px';
  contenedorSimulado.style.position = 'fixed';
  contenedorSimulado.style.top = '0';
  contenedorSimulado.style.left = '0';
  contenedorSimulado.style.zIndex = '-9999';
  contenedorSimulado.style.opacity = '0';
  contenedorSimulado.style.pointerEvents = 'none';
  contenedorSimulado.appendChild(clon);
  document.body.appendChild(contenedorSimulado);

  html2canvas(clon, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    width: 1200,
    windowWidth: 1200
  }).then(function(canvas) {
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const pdfWidth = 612;
    
    const pdfImageWidth = pdfWidth * 0.9;
    const pdfImageHeight = (canvasHeight * pdfImageWidth) / canvasWidth;

    const offsetX = (pdfWidth - pdfImageWidth) / 2;
    const offsetY = 20;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [pdfWidth, pdfImageHeight + offsetY * 2],
      compress: true
    });

    pdf.addImage(imgData, 'JPEG', offsetX, offsetY, pdfImageWidth, pdfImageHeight);

    canvasToImageMap.forEach(({ canvas, image }) => {
      image.remove();
      canvas.style.display = '';
    });

    document.body.removeChild(contenedorSimulado);

    pdf.save(nombreArchivo + ".pdf");
  });
}
