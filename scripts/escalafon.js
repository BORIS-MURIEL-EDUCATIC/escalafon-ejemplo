const formationTable = [
  {
    type: "Dirección de tesis de doctorado",
    title: "Espesor mínimo de muros estructurales de concreto reforzado",
    date: "2020 - 1",
    score: 3,
    state: "Aprobado"
  },
  {
    type: "Dirección de tesis de doctorado",
    title: "Estudio numérico y experimental sobre el comportamiento sísmico de muros delgados de edificios de concreto reforzado",
    date: "2020 - 2",
    score: 8,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajos de grado de maestría de investigación",
    title: "FLOOR RESPONSE SPECTRA FOR THE DESIGN OF LIGHT NONSTRUCTURAL SYSTEMS IN ACCELERATION-SENSITIVE BUILDINGS",
    date: "2011 - 2",
    score: 4,
    state: "Aprobado",
  },
  {
    type: "Dirección de trabajos de grado de maestría de investigación",
    title: "Información valorada en ejercicio marzo 2018",
    date: "2014 - 2",
    score: 4,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajos de grado de maestría de investigación",
    title: "Seismic analysis of reinforced concrete walls typical for Colombian construction",
    date: "2020 - 2",
    score: 4,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajos de grado de maestría de investigación",
    title: "Criterios de aceptación para la evaluación basada en desempeño de los edificios de muros delgados de concreto reforzado en Colombia",
    date: "2020 - 2",
    score: 4,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajos de grado de maestría de investigación",
    title: "CARACTERIZACIÓN DINÁMICA DE ESTRUCTURAS CARACTERIZACIÓN DINÁMICA DE ESTRUCTURAS ESTRUCTURAL DE BAJO COSTO",
    date: "2020 - 2",
    score: 0,
    state: "No aprobado"
  },
  {
    type: "Dirección de trabajo de grado de pregrado",
    title: "COMPORTAMIENTO DE UN ELEMENTO ESTRUCTURAL CONSTRUIDO EN MADERA LAMINADA REFORZADA CON FIBRA DE VIDRIO",
    date: "2018 - 2",
    score: 1,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajo de grado de pregrado",
    title: "EFECTO DE LOS MUROS NO ESTRUCTURALES EN LA RESPUESTA DINÁMICA DE UNA ESTRUCTURA APORTICADA:CASO DE ESTRUCTURA DE CONCRETO REFORZADO DISEÑADA ANTES DEL CÓDIGO DE DISEÑO DE 1984",
    date: "2018 - 2",
    score: 1,
    state: "Aprobado"
  },
  {
    type: "Dirección de trabajo de grado de pregrado",
    title: "Desempeño de fundaciones bajo carga axial constante y momento variable",
    date: "2012 - 2",
    score: 1,
    state: "Aprobado"
  }
];

const newKnowledgeTable = [
  {
    type: "Patente",
    title: "Conexión de estructuras prefabricadas",
    date: "2020 - 2",
    score: 4.875,
    state: "Aprobado"
  },
  {
    type: "Patente",
    title: "Conexión de elementos no estructurales prefabricados",
    date: "2020 - 2",
    score: 4.875,
    state: "Aprobado"
  },
  {
    type: "Patente",
    title: "Riostra de pandeo restringido con refuerzo y su método de fabricación",
    date: "2021 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Capítulo de libro de investigación",
    title: "Displacement Demands and Shear Key Forces in Pile-Supported Marginal Wharves with Strong Lateral-Torsional Coupling",
    date: "2013 - 1",
    score: 1.875,
    state: "Aprobado"
  },
  {
    type: "Capítulo de libro de investigación",
    title: "Seismic Performance of Pile-Supported Wharves",
    date: "2013 - 1",
    score: 1.875,
    state: "Aprobado"
  },
  {
    type: "Capítulo de libro de investigación",
    title: "Modelling Inelastic Response in Direct Displacement-Based Design",
    date: "2005",
    score: 1.875,
    state: "Aprobado"
  },
  {
    type: "Capítulo de libro de investigación",
    title: "A Damage Index for the Seismic Evaluation of Buckling-Restrained Braces",
    date: "2021 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Artículo en revista categoría Q1",
    title: "Seismic performance of precast concrete column-to-column lap-splice connections",
    date: "2018 - 2",
    score: 8,
    state: "Aprobado"
  },
  {
    type: "Artículo en revista categoría Q1",
    title: "Response of thin lightly-reinforced concrete walls under cyclic loading",
    date: "2018 - 2",
    score: 8,
    state: "Aprobado"
  },
  {
    type: "Artículo en revista categoría Q1",
    title: "Equivalent Viscous Damping Equations for Direct Displacement Based Design",
    date: "2005 - 1",
    score: 16,
    state: "Aprobado"
  }
];

const innovationTable = [
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Método constructivo de sistemas de muros de concreto reforzados con mallas de acero preensambladas.",
    date: "2018 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Dispositivo de sujeción para páneles no estructurales prefabricados para fosos de ascensores.",
    date: "2016 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Sistema de anclaje de escaleras prefabricadas.",
    date: "2016 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Sistema de construcción de columnas prefabricadas.",
    date: "2015 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Optimización de estructura paneles solares.",
    date: "2016 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Fibras sintéticas para túneles de descarga.",
    date: "2017 - 2",
    score: 5.4,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Sistema constructivo de muros cortaflujo.",
    date: "2018 - 2",
    score: 7.2,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Resistencia a fuerza lateral de un cajero electrónico.",
    date: "2015 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Redes de seguridad. Acompañamiento a pruebas de ensayo según normativa UNE-EN-1263-1.",
    date: "2015 - 2",
    score: 9,
    state: "Aprobado"
  },
  {
    type: "Consultorías científico-tecnológicas. Productos empresariales",
    title: "Vigas en cajón y prelosas prefabricadas para edificaciones.",
    date: "2014 - 2",
    score: 9,
    state: "Aprobado"
  }
];

const divulgationTable = [
  {
    type: "Libro de texto académico o de divulgación",
    title: "Desastres Naturales en los Andes: Terremoto en Chile, febrero 27 de 2010, Reflexiones al Contexto Colombiano",
    date: "2011 - 1",
    score: 20,
    state: "Aprobado"
  },
  {
    type: "Libro de texto académico o de divulgación",
    title: "Manual de construcción, evaluación y rehabilitación sismo resistente de viviendas de mampostería",
    date: "2002 - 2",
    score: 7.5,
    state: "Aprobado"
  },
  {
    type: "Capítulo de Texto Académico / Divulgación",
    title: "Practical Lessons from Nigel",
    date: "2017 - 1",
    score: 2.5,
    state: "Aprobado"
  },
  {
    type: "Capítulo de Texto Académico / Divulgación",
    title: "Niegel Priestley Symposium",
    date: "2008 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "Guias de resistencia de materiales: 1- Identificacion de esfuerzos",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "2- Propiedades mecánicas.",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "3- Torsion en tubos",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "4- Flexion en vigas",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "5- Esfuerzos principales",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  },
  {
    type: "Guía de clase de un curso de tres créditos",
    title: "Guias de diseño de concreto reforzado: 1- Diseño de mezclas",
    date: "2011 - 1",
    score: 0,
    state: "No Aprobado"
  }
];

document.getElementById('escalafon-tab').addEventListener('click', function () {
  const contentContainer = document.getElementById('escalafonContent');

  $('#current-page').text("Escalafón");
  contentContainer.innerHTML = "";
  fetch('pages/escalafon.html')
    .then(response => response.text())
    .then(data => {
      contentContainer.innerHTML = data;
      initTables();
    })
    .catch(error => console.error('Error cargando escalafon.html:', error));
});

function initTables() {
  const formTableBody = $('#form-table-body');
  formationTable.forEach(item => {
    const row = createTableRowString(item);
    formTableBody.append(row);
  });

  const knowTableBody = $('#know-table-body');
  newKnowledgeTable.forEach(item => {
    const row = createTableRowString(item);
    knowTableBody.append(row);
  });

  const innTableBody = $('#inn-table-body');
  innovationTable.forEach(item => {
    const row = createTableRowString(item);
    innTableBody.append(row);
  });

  const divTableBody = $('#div-table-body');
  divulgationTable.forEach(item => {
    const row = createTableRowString(item);
    divTableBody.append(row);
  });
}

function createTableRowString(tableItem) {
  return `
        <tr>
            <td>${tableItem.type}</td>
            <td>${tableItem.title}</td>
            <td>${tableItem.date}</td>
            <td>${tableItem.score}</td>
            <td>${tableItem.state}</td>
            <td>
                <div class="d-flex flex-row justify-content-around">
                    <i class="fas fa-search p-2 pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver detalle"></i>
                </div>
            </td>
        </tr>
    `;
}