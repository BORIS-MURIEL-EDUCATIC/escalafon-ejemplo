import { newKnowledgeObject } from '../utils/utils.js';

document.getElementById('nuevo-conocimiento-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('nuevoConocimientoContent');
  $('#current-page').text("Nuevo conocimiento");
  contentContainer.innerHTML = "";

  fetch('pages/nuevoConocimiento.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-nuevo').val();
      setValues(defaultValue);
      setupCategoriaChangeHandler();
    })
    .catch(error => console.error('Error cargando nuevoConocimiento.html:', error));
});

function setupCategoriaChangeHandler() {
  $('#categoria-nuevo').change(function () {
    const selectedValue = $(this).val();
    setValues(selectedValue);
  });
}

function setValues(value) {
  const categoriaInfo = newKnowledgeObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(newKnowledgeObject.allFieldIds, categoriaInfo[value].fieldIds);
  }
}