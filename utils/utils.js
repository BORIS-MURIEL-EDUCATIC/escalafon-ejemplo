export const formationObject = {
  categoriaInfo: {
    "administracion": {
      description: "Por semestre de tiempo completo y buena evaluación, o proporcional según dedicación. Se incluyen en este concepto los directores de programa y encargos administrativos temporales asignados por la IES. Incluye encargo de presentar un nuevo programa (se asigna al presentar el documento al MEN).",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Cargo",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el cargo",
        descripcion: "Ingrese la descripción"
      }
    },
    "encargo_administrativo_empresarial": {
      description: "Por semestre de tiempo completo y buena evaluación. Se consideran cargos directivos o de liderazgo en el sector empresarial (con personal a cargo).",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Cargo",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el cargo",
        descripcion: "Ingrese la descripción"
      }
    },
    "direccion_tesis_doctorado": {
      description: "Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa, institución, año de grado. Indicar si obtuvo reconocimiento"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "direccion_trabajos_grado_maestria_investigacion": {
      description: "Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa, institución, año de grado. Indicar si obtuvo reconocimiento"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "direccion_trabajos_grado_maestria_profundizacion": {
      description: "Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa, institución, año de grado. Indicar si obtuvo reconocimiento"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "direccion_trabajo_grado_pregrado": {
      description: "Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa, institución, año de grado. Indicar si obtuvo reconocimiento"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "tutor_investigacion": {
      description: "Se aplica por proyecto que tenga jóvenes investigadores, estudiantes de postgrado, profesores en entrenamiento o profesores auxiliares vinculados  a su cargo (Participación por al menos 6 meses y con dedicación mínima de medio tiempo)",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, incluyendo tutoriado, tiempo de participación bajo este rol. Identificación de entidades participantes en el proyecto si no es un proyecto con EIA"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada incluyendo tutoriado y entidades participantes"
      }
    },
    "coordinacion_semilleros_investigacion": {
      description: "Registrados en la dirección de I+D+i. Otorga puntos cada semestre que se desarrolle.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, incluyendo tutoriado, tiempo de participación bajo este rol. Identificación de entidades participantes en el proyecto si no es un proyecto con EIA"
      },
      placeholders: {
        titulo: "Ingrese el título del producto",
        descripcion: "Ingrese la descripción detallada incluyendo tutoriado y entidades participantes"
      }
    },
    "credito_docencia_directa": {
      description: "No se tienen en cuenta cursos de extensión",
      fieldIds: ["div-creditos", "div-grupos"],
      labels: {
        titulo: "Nombre del curso",
        descripcion: "Descripción, incluyendo institución si es externa, programa académico y si se dictó en un idioma diferente al español"
      },
      placeholders: {
        titulo: "Ingrese el nombre del curso",
        descripcion: "Ingrese la descripción detallada del curso"
      }
    },
    "coordinacion_area_academica": {
      description: "Por semestre y con buena evaluación",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Nombre del curso",
        descripcion: "Descripción, incluyendo institución si es externa, programa académico y si se dictó en un idioma diferente al español"
      },
      placeholders: {
        titulo: "Ingrese el nombre del curso",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "apoyo_academico_laboratorio": {
      description: "Por semestre con informe debidamente aprobado",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Nombre del curso",
        descripcion: "Descripción, incluyendo institución si es externa, programa académico y si se dictó en un idioma diferente al español"
      },
      placeholders: {
        titulo: "Ingrese el nombre del curso",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "direccion_grupo_investigacion": {
      description: "Por semestre con GrupLAC actualizadoPor semestre",
      fieldIds: [],
      labels: {
        titulo: "Nombre del grupo",
        descripcion: "Descripción, incluyendo institución si es externa y código Colciencias"
      },
      placeholders: {
        titulo: "Ingrese el nombre del grupo",
        descripcion: "Ingrese la descripción detallada"
      }
    },
    "estudios_doctorales": {
      description: "Registrar por semestre. Máximo por 4 años (8 semestres continuos). Se otorga una vez obtenido el título convalidado en Colombia.",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Programa",
        descripcion: "Descripción, incluyendo institución, semestre cursado"
      },
      placeholders: {
        titulo: "Ingrese el programa",
        descripcion: "Ingrese la descripción detallada incluyendo institución, semestre cursado"
      }
    }
  },
  allFieldIds: ["div-articulo", "div-creditos", "div-autores"]
};

export const newKnowledgeObject = {
  categoriaInfo: {
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
  },
  allFieldIds: ["div-radicado", "div-certificado", "div-articulo", "div-contratoPat", "div-contrato", "div-tipo-libro"]
}

export const innovationObject = {
  categoriaInfo: {
    "spinOff": "La existencia se verifica con certificado de Cámara de comercio, NIT o código de registro tributario de la empresa que surgió con base en una investigación y desarrollo tecnológico en la que una IES o empresa tuvo participación.",
    "productosEmpresariales": "Se debe aportar certificación de la empresa.",
    "asesoriasConsultorias": "Se debe indicar en descripción: Monto del proyecto ubicado en uno de los siguientes dos rangos: 1) hasta 500 smmlv, 2) más de 500 smmlv. Rol en el que participó el profesor que está reportando el producto (Investigador principal o director, coinvestigador).",
    "softwareFuncional": "Obtenidos en el marco de proyectos I+D+i formales, en semilleros de investigación o en actividades académicas formales con estudiantes. El software debe estar registrado en la Dirección Nacional de Derechos de Autor.",
    "prototipoIndustrial": "Obtenido en el marco de proyecto I+D+i formal, en Semillero de investigación o en actividad académica formal con estudiantes (p.e Proyecto de ingeniería). Indicar proyecto asociado, ubicación actual del prototipo y uso. Aportar fotos.",
    "regulacionesNormas": "Se requiere evidencia de la participación del profesor en la construcción del documento que es regulación, norma, reglamento o legislación (se puede verificar con certificado de la entidad que emite o en el mismo documento publicado en la información de autores)."
  }
}

export const divulgationObject = {
  categoriaInfo: {
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
  },
  allFieldIds: [
    "div-articulo",
    "div-asignado",
    "div-descripcionUrl",
    "div-descripcion",
    "div-tipo-libro",
    "div-publicado-eia",
    "div-entrega"]
}