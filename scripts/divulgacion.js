import { divulgationObject } from '../utils/utils.js';

document.getElementById('divulgacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('divulgacionContent');
  $('#current-page').text("Divulgación");
  contentContainer.innerHTML = "";

  fetch('pages/divulgacion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-divu').val();
      setValuesDiv(defaultValue);
      setupCategoriaDivulgacionChangeHandler();
    })
    .catch(error => console.error('Error cargando divulgacion.html:', error));
});

function setupCategoriaDivulgacionChangeHandler() {
  $('#categoria-divu').change(function () {
    const selectedValue = $(this).val();
    setValuesDiv(selectedValue);
  });

  $('#publicado-eia1').change(function () {
    const selectedValue = $(this).prop('checked');
    if (selectedValue) $('#div-entrega').show();
  });

  $('#publicado-eia2').change(function () {
    const selectedValue = $(this).prop('checked');
    if (selectedValue) $('#div-entrega').hide();
  });
}

function setValuesDiv(value) {
  const categoriaInfo = divulgationObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(divulgationObject.allFieldIds, categoriaInfo[value].fieldIds);
  }
}