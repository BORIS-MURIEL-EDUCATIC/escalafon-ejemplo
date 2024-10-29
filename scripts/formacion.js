import { formationObject } from '../utils/utils.js';

document.getElementById('formacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('formacionContent');
  $('#current-page').text("Formación");
  contentContainer.innerHTML = "";
  fetch('pages/formacion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      const defaultValue = $('#categoria-form').val();
      setValuesForm(defaultValue);
      setupCategoriaFormacionChangeHandler();
    })
    .catch(error => console.error('Error cargando formacion.html:', error));

});

function setupCategoriaFormacionChangeHandler() {
  $('#categoria-form').change(function () {
    const selectedValue = $(this).val();
    setValuesForm(selectedValue);
  });
}

function setValuesForm(value) {
  const categoriaInfo = formationObject.categoriaInfo;

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFields(formationObject.allFieldIds, categoriaInfo[value].fieldIds);
    updateFormLabelsAndPlaceholders(categoriaInfo[value]);
  }
}

function updateFormLabelsAndPlaceholders(category) {
  $('#tituloLabel').text(category.labels.titulo);
  $('#tituloProducto').attr('placeholder', category.placeholders.titulo);

  $('#descripcionUrlLabel').text(category.labels.descripcion);
  $('#descripcionUrl').attr('placeholder', category.placeholders.descripcion);
}