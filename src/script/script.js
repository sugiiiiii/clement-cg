function showPopup() {
    // Récupère la popup et l'arrière-plan
    var popup = document.querySelector('.fixed');
    var backdrop = document.querySelector('.bg-opacity-75');
  
    // Affiche la popup et l'arrière-plan
    popup.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    backdrop.classList.add('grid');
  }
  
  function hidePopup() {
    // Récupère la popup et l'arrière-plan
    var popup = document.querySelector('.fixed');
    var backdrop = document.querySelector('.bg-opacity-75');
  
    // Cache la popup et l'arrière-plan
    popup.classList.add('hidden');
    backdrop.classList.add('hidden');
  }