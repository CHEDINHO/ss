document.addEventListener("DOMContentLoaded", function() {
  const plusButtons = document.querySelectorAll('.fa-plus-circle');
  const minusButtons = document.querySelectorAll('.fa-minus-circle');
  const trashIcons = document.querySelectorAll('.fa-trash-alt');
  const hearts = document.querySelectorAll('.fa-heart');
  const quantities = document.querySelectorAll('.quantity');
  let totalPriceElement = document.querySelector('.total');
  
  function updateTotalPrice() {
    let totalPrice = 0;
    quantities.forEach((quantity, index) => {
      let unitPrice = parseFloat(quantity.parentElement.previousElementSibling.textContent.replace('$', ''));
      totalPrice += unitPrice * parseInt(quantity.textContent);
    });
    totalPriceElement.textContent = totalPrice.toFixed(2) + ' $';
  }

  plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      quantities[index].textContent = parseInt(quantities[index].textContent) + 1;
      updateTotalPrice();
    });
  });

  minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let currentQuantity = parseInt(quantities[index].textContent);
      if (currentQuantity > 0) {
        quantities[index].textContent = currentQuantity - 1;
        updateTotalPrice();
      }
    });
  });

  
  trashIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      icon.closest('.card-body').remove();
      updateTotalPrice();
    });

  });
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('text-red-500');
    });
  });
});





  