function enterPortfolio() {
    const coverPage = document.getElementById('cover-page');
    const mainContent = document.querySelector('.container');
  
    coverPage.style.display = 'none';
    mainContent.style.display = 'flex';
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
    mainContent.classList.toggle('full');
  }
  