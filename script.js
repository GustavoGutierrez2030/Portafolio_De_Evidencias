function enterPortfolio() {
  // Redirigir a la página del portafolio
  window.location.href = "portafolio.html";
}

function toggleTopics(topicId) {
  const topicList = document.getElementById(topicId);
  if (topicList) {
    topicList.classList.toggle('hidden');
  }
}

function loadPDF(pdfPath) {
  const pdfFrame = document.getElementById('pdf-frame');
  if (pdfFrame) {
    pdfFrame.src = `pdfs/${pdfPath}`;
  } else {
    console.error("El iframe no se encontró.");
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  sidebar.classList.toggle('hidden');
  mainContent.style.width = sidebar.classList.contains('hidden') ? '100%' : '80%';
}

function goBackToHome() {
  // Aquí puedes redirigir al usuario a la página principal (portada)
  window.location.href = 'index.html'; // Cambia 'index.html' por la ruta de tu página principal si es diferente
}

