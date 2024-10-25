document.getElementById('innovacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('innovacionContent');

  if (contentContainer.innerHTML === '') {
    fetch('pages/innovaccion.html')
      .then(response => response.text())
      .then(data => {
        contentContainer.innerHTML = "";
        contentContainer.innerHTML = data;
        setupCategoriaInnovacionChangeHandler();
      })
      .catch(error => console.error('Error cargando innovacion.html:', error));
  }
});

function setupCategoriaInnovacionChangeHandler() {
  const categoriaInfo = {
    "spinOff": "La existencia se verifica con certificado de Cámara de comercio, NIT o código de registro tributario de la empresa que surgió con base en una investigación y desarrollo tecnológico en la que una IES o empresa tuvo participación.",
    "productosEmpresariales": "Se debe aportar certificación de la empresa.",
    "asesoriasConsultorias": "Se debe indicar en descripción: Monto del proyecto ubicado en uno de los siguientes dos rangos: 1) hasta 500 smmlv, 2) más de 500 smmlv. Rol en el que participó el profesor que está reportando el producto (Investigador principal o director, coinvestigador).",
    "softwareFuncional": "Obtenidos en el marco de proyectos I+D+i formales, en semilleros de investigación o en actividades académicas formales con estudiantes. El software debe estar registrado en la Dirección Nacional de Derechos de Autor.",
    "prototipoIndustrial": "Obtenido en el marco de proyecto I+D+i formal, en Semillero de investigación o en actividad académica formal con estudiantes (p.e Proyecto de ingeniería). Indicar proyecto asociado, ubicación actual del prototipo y uso. Aportar fotos.",
    "regulacionesNormas": "Se requiere evidencia de la participación del profesor en la construcción del documento que es regulación, norma, reglamento o legislación (se puede verificar con certificado de la entidad que emite o en el mismo documento publicado en la información de autores)."
  };

  const defaultValue = $('#categoria-inn').val();
  $('#descripcionCategoria').text(categoriaInfo[defaultValue]);

  // Handle changes to the dropdown
  $('#categoria-inn').on('change', function () {
    const selectedValue = $(this).val();
    $('#descripcionCategoria').text(categoriaInfo[selectedValue]);

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