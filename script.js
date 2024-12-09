function toggleTopics(topicId) {
  const topicList = document.getElementById(topicId);
  if (topicList) {
    topicList.classList.toggle("hidden");
  } else {
    console.error(`No se encontró el elemento con ID: ${topicId}`);
  }
}

function loadPDF(pdfPath) {
    const pdfFrame = document.getElementById('pdf-frame');
    if (pdfFrame) {
      pdfFrame.src = `/Portafolio_De_Evidencias/pdfs/${pdfPath}`;
    } else {
      console.error("El iframe no se encontró.");
    }
  }
  
