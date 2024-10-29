import { innovationObject } from '../utils/utils.js';

document.getElementById('innovacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('innovacionContent');
  $('#current-page').text("Innovación");
  contentContainer.innerHTML = "";

  fetch('pages/innovaccion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      setupCategoriaInnovacionChangeHandler();
    })
    .catch(error => console.error('Error cargando innovacion.html:', error));

});

function setupCategoriaInnovacionChangeHandler() {
  const categoriaInfo = innovationObject.categoriaInfo;

  const defaultValue = $('#categoria-inn').val();
  $('.descripcionCategoria').text(categoriaInfo[defaultValue]);

  // Handle changes to the dropdown
  $('#categoria-inn').on('change', function () {
    const selectedValue = $(this).val();
    $('.descripcionCategoria').text(categoriaInfo[selectedValue]);

    // Toggle fields based on selection
    if (selectedValue === "softwareFuncional") {
      $('#campoRegistro').show();
      $('#campoIdNorma').hide();
    } else if (selectedValue === "regulacionesNormas") {
      $('#campoIdNorma').show();
      $('#campoRegistro').hide();
    } else {
      $('#campoRegistro').hide();
      $('#campoIdNorma').hide();
    }
  });
}