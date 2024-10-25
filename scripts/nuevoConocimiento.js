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

function setOtherFields(selectedFieldIds) {
  const allFieldIds = [
    "div-radicado",
    "div-certificado",
    "div-articulo",
    "div-contratoPat",
    "div-contrato",
    "div-tipo-libro"
  ];

  allFieldIds.forEach(fieldId => $('#' + fieldId).hide());
  selectedFieldIds.forEach(fieldId => $('#' + fieldId).show());
}

function setValues(value) {
  const categoriaInfo = {
    "patente": {
      description: "Indicar la etapa del proceso en la que se encuentra (a partir de sometida a evaluación en oficina de patentes). Indicar también si el por vía tradicional o vía PCT.",
      fieldIds: ["div-radicado", "div-contratoPat"]
    },
    "libro_investigacion": {
      description: "Debe aportar certificado emitido por la editorial en el que indique que es un libro producto de investigación, que tuvo proceso de evaluación por pares técnicos y demás condiciones (ver comentario), o aportar documentación para que el Jefe del Fondo Editorial EIA realice la evaluación y emita certificado correspondiente. En la columna de descripción incluya citaciones que el producto haya tenido en artículos de revistas especializadas o en otros libros, así como título del proyecto de investigación que originó los resultados presentados en la publicación, las entidades participantes y financiadoras.",
      fieldIds: ["div-articulo", "div-tipo-libro"]
    },
    "capitulo_libro": {
      description: "",
      fieldIds: ["div-articulo", "div-tipo-libro"]
    },
    "articulo_q1": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"]
    },
    "modelo_utilidad": {
      description: "Indicar la etapa del proceso en la que se encuentra (a partir de sometida a evaluación en oficina de patentes).",
      fieldIds: ["div-radicado", "div-contratoPat"]
    },
    "articulo_q2": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"]
    },
    "certificado_variedades": {
      description: "",
      fieldIds: ["div-certificado", "div-contrato"]
    },
    "articulo_q3": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"]
    },
    "articulo_q4": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"]
    },
    "articulo_indexadas_inferiores": {
      description: "Si la revista no está en índices bibliográficos ISI o SCOPUS, consultar en Publindex https://bit.ly/2NnnSdr (por buscador si la revista es editada en Colombia o por homologación si es editada en otro país) si la revista estuvo indexada (nacional) u homologada (internacional) por ellos en el año de publicación de su artículo. Si está, ubica su producto en este subtipo.",
      fieldIds: ["div-articulo"]
    }
  };

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFieldsDiv(categoriaInfo[value].fieldIds);
  }
}