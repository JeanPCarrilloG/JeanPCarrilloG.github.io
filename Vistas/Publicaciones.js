function convertirPDF(idSeccionHtml) {

  // Llamar sección.
  var elementoHTML = document.getElementById(idSeccionHtml);

  // Generar PDF.
  html2pdf().from(elementoHTML).set({
    margin: 1,
    filename: 'PDF.pdf',
    jsPDF: {orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true}
  }).save();
}
