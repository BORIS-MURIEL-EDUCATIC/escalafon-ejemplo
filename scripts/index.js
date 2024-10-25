document.getElementById('identificacion-tab').addEventListener('click', function () {
  $('#current-page').text("Identificación");
});

document.getElementById('laboral-tab').addEventListener('click', function () {
  $('#current-page').text("Laboral");
});

document.getElementById('complementaria-tab').addEventListener('click', function () {
  $('#current-page').text("Complementaria");
});

document.getElementById('idiomas-tab').addEventListener('click', function () {
  $('#current-page').text("Idiomas");
});

function hidecategoryInfo(categoryInfo) {
  $('.descripcionCategoria').text(categoryInfo);
  if (categoryInfo == '') {
    $('.categoriaInfo').hide();
  } else {
    $('.categoriaInfo').show();
  }
}