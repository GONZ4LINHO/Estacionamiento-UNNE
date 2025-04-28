document.addEventListener('DOMContentLoaded', () => {
    const autosContainer = document.getElementById('autos');
    const motosContainer = document.getElementById('motos');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');
  
    let selectedSpot = null;
    let selectedType = null;
  
    function createSpot(id, type) {
      const spot = document.createElement('button');
      spot.className = 'spot';
      spot.textContent = id;
      spot.addEventListener('click', () => {
        selectedSpot = id;
        selectedType = type;
        modalTitle.textContent = `Reservar ${type} #${id}`;
        modalPrice.textContent = `Precio: $${type === 'Auto' ? 300 : 150}`;
        modal.classList.remove('hidden');
      });
      return spot;
    }
  
    for (let i = 1; i <= 30; i++) {
      autosContainer.appendChild(createSpot(i, 'Auto'));
    }
  
    for (let i = 1; i <= 50; i++) {
      motosContainer.appendChild(createSpot(i, 'Moto'));
    }
  
    confirmButton.addEventListener('click', () => {
      if (selectedSpot && selectedType) {
        alert(`Reserva confirmada: ${selectedType} #${selectedSpot}`);
        modal.classList.add('hidden');
      }
    });
  
    cancelButton.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  });
  