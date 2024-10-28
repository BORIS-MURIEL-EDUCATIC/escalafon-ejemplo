document.getElementById('formacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('formacionContent');
  $('#current-page').text("Formación");
  contentContainer.innerHTML = "";
  fetch('pages/formacion.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      setupCategoriaFormacionChangeHandler();
    })
    .catch(error => console.error('Error cargando formacion.html:', error));

});

function setupCategoriaFormacionChangeHandler() {
  const categoriaInfo = {
    "administracion": "",
    "encargo_administrativo_empresarial": "",
    "direccion_tesis_doctorado": "",
    "direccion_trabajos_grado_maestria_investigacion": "",
    "direccion_trabajos_grado_maestria_profundizacion": "",
    "tutor_investigacion": "",
    "direccion_trabajo_grado_pregrado": "",
    "coordinacion_semilleros_investigacion": "",
    "credito_docencia_directa": "",
    "coordinacion_area_academica": "",
    "apoyo_academico_laboratorio": "",
    "liderazgo_grupo_investigacion": "",
    "estudios_doctorales": ""
  };

  const defaultValue = $('#categoria-form').val();
    
  if (typeof categoriaInfo[defaultValue] !== 'undefined') hidecategoryInfo(categoriaInfo[defaultValue]);

  $('#categoria-form').change(function () {
    const selectedValue = $(this).val();
    if (typeof categoriaInfo[selectedValue] !== 'undefined') hidecategoryInfo(categoriaInfo[selectedValue]);

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