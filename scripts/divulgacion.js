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

function setOtherFieldsDiv(selectedFieldIds) {
  const allFieldIds = [
    "div-articulo",
    "div-asignado",
    "div-descripcionUrl",
    "div-descripcion",
    "div-tipo-libro",
    "div-publicado-eia",
    "div-entrega"
  ];

  allFieldIds.forEach(fieldId => $('#' + fieldId).hide());
  selectedFieldIds.forEach(fieldId => $('#' + fieldId).show());
}

function setValuesDiv(value) {
  const categoriaInfo = {
    "libro_texto": {
      description: "Son las publicaciones que demuestran, además de servir como guías, conceptualización teórica robusta, reflexiones en el campo de la ciencia tratada, metodologías y conclusiones. Incluye libros informativos que cuentan con soporte teórico verificable y sirven para difundir conocimiento técnico, científico académico, histórico o cultural.",
      fieldIds: ["div-articulo", "div-tipo-libro", "div-descripcionUrl", "div-publicado-eia"]
    },
    "capitulo_libro": {
      description: "Son los capítulos de autoría declarada dentro de un libro por parte del autor, que cumplen con las pautas de las publicaciones donde se suscriben con una conceptualización teórica robusta, reflexiones en el campo de la ciencia tratada, metodologías y conclusiones.",
      fieldIds: ["div-articulo", "div-tipo-libro", "div-descripcionUrl", "div-publicado-eia"]
    },
    "guia_clase": {
      description: "Es el material escrito que orienta y apoya el trabajo del estudiante en el aula, cuenta con actividades prácticas o de reflexión que facilitan el aprendizaje y debe cumplir con los aspectos básicos para ser una guía. Deben contar con el aval de Currículo para su publicación. Debe estar publicada bajo proceso formal con Fondo Editorial.",
      fieldIds: ["div-articulo", "div-descripcion", "div-publicado-eia"]
    },
    "manual_laboratorio": {
      description: "Es el material escrito que orienta y apoya el trabajo del estudiante para lograr el aprendizaje propuesto para una actividad de laboratorio o una actividad práctica en otros espacios y debe cubrir los aspectos básicos para ser un manual. Incluye manuales o tutoriales de un tema específico aplicable a cualquier asignatura. Para la actividad puede requerir el uso de recursos educativos como fichas, tarjetas, etc. cuyo uso debe estar definido en el manual. Deben contar con el aval de Currículo y si es del caso de la Jefatura de laboratorios. Debe estar publicada bajo proceso formal con Fondo Editorial.",
      fieldIds: ["div-articulo", "div-descripcion", "div-publicado-eia"]
    },
    "artefacto_laboratorio": {
      description: "Es el diseño y construcción de un nuevo equipo de laboratorio previamente aprobado por el jefe de laboratorios y el profesor de apoyo académico correspondiente, que demuestre un valor agregado al trabajo del laboratorio. Debe incluir el manual de operación del equipo y debe haber sido utilizado con éxito al menos un semestre.",
      fieldIds: ["div-descripcion"]
    },
    "aula_digital": {
      description: "Para un aula digital de asignatura que articule materiales, mínimo 50% de autoría propia, con actividades con las que se logre el objetivo de aprendizaje propuesto.",
      fieldIds: ["div-asignado", "div-descripcion"]
    },
    "ova": {
      description: "Por OVA publicado en un repositorio de la institucional.",
      fieldIds: ["div-descripcion"]
    },
    "articulo_no_indexadas": {
      description: "",
      fieldIds: ["div-articulo", "div-descripcionUrl"]
    },
    "ponencia_eventos": {
      description: "",
      fieldIds: ["div-articulo", "div-descripcionUrl"]
    },
    "working_papers": {
      description: "Documentos preliminares de carácter técnico o científico. Se elaboran para compartir ideas acerca de un tema o para recibir realimentación previa a una presentación formal con la comunidad científica o para publicar en una revista científica. Validado y publicado en repositorio institucional o en un sitio arbitrado que permita la realimentación que se busca. Incluye protocolos de laboratorio, modelos y metodologías en evaluación.",
      fieldIds: ["div-articulo", "div-descripcionUrl"]
    },
    "articulos_prensa": {
      description: "Se asigna el puntaje por cada 5 artículos o 200 minutos de programa de radio. Sólo columnas de opinión (para artículos). Incluye programas de radio o de televisión realizados por el profesor en un medio de comunicación de reconocida difusión. No considera entrevistas",
      fieldIds: ["div-articulo", "div-descripcionUrl"]
    }
  };

  if (categoriaInfo[value]) {
    hidecategoryInfo(categoriaInfo[value].description);
    setOtherFieldsDiv(categoriaInfo[value].fieldIds);
  }
}