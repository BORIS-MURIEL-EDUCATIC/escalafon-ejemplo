document.getElementById('escalafon-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('escalafonContent');
  
  $('#current-page').text("Escalafón");
  contentContainer.innerHTML = "";
  fetch('pages/escalafon.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
    })
    .catch(error => console.error('Error cargando escalafon.html:', error));
});
