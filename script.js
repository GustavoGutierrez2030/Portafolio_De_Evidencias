function enterPortfolio() {
  // Redirigir a la página del portafolio
  window.location.href = "menu.html";
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

function loadText(textito) {
  // Oculta todas las tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = "none";
  });

  // Muestra solo la tarjeta seleccionada
  const textFrame = document.getElementById(textito);
  if (textFrame) {
    textFrame.style.display = "block";
  } else {
    console.error(`No se encontró un elemento con el ID "${textito}"`);
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
  window.location.href = 'menu.html'; // Cambia 'index.html' por la ruta de tu página principal si es diferente
}

