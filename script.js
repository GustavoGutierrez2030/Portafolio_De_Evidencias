function enterPortfolio() {
    const coverPage = document.getElementById('cover-page');
    const mainContent = document.querySelector('.container');
  
    coverPage.style.display = 'none';
    mainContent.style.display = 'flex';
  
    // Mostrar el botón para sidebar
    const toggleSidebarButton = document.querySelector('.toggle-sidebar');
    toggleSidebarButton.classList.add('visible');
  }
  
  function toggleTopics(topicId) {
    const topicList = document.getElementById(topicId);
    if (topicList) {
      topicList.classList.toggle('hidden');
    }
  }
  
  function loadPDF(pdfPath) {
    const pdfFrame = document.getElementById('pdf-frame');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleSidebarButton = document.querySelector('.toggle-sidebar');
  
    if (pdfFrame) {
      pdfFrame.src = `pdfs/${pdfPath}`;
  
      // Maximizar PDF
      sidebar.classList.add('hidden');
      mainContent.classList.add('fullscreen');
  
      // Ocultar el botón de sidebar
      toggleSidebarButton.classList.remove('visible');
    } else {
      console.error("El iframe no se encontró.");
    }
  }
  
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
  
    sidebar.classList.toggle('hidden');
    mainContent.classList.toggle('fullscreen');
  }
  