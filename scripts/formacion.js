document.getElementById('formacion-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('formacionContent');
  
  if (contentContainer.innerHTML === '') {
    fetch('pages/formacion.html')
      .then(response => response.text())
      .then(data => {
        contentContainer.innerHTML = "";
        contentContainer.innerHTML = data;
        setupCategoriaFormacionChangeHandler();
      })
      .catch(error => console.error('Error cargando formacion.html:', error));
  }
});

function setupCategoriaFormacionChangeHandler() {
  const categoriaInfo = {
  };

  const defaultValue = $('#categoria-form').val();
  $('#descripcionCategoria').text(categoriaInfo[defaultValue]);

  $('#categoria-form').change(function () {
    const selectedValue = $(this).val();
    $('#descripcionCategoria').text(categoriaInfo[selectedValue]);

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