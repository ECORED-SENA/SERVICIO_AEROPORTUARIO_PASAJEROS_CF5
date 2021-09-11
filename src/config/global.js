export default {
  global: {
    componenteFormativo: 'Categorización y servicios en aeropuertos',
    descripcionCurso:
      'Los aeropuertos son parte importante en la economía de un país y es el primer lugar donde se desarrollan las actividades turísticas y de negocios. Son de gran impacto por el tipo de infraestructura que maneja, su avanzada tecnología, el efectivo manejo del equipaje, seguridad aeroportuaria, control del tráfico aéreo, manejo de los procedimientos en rampa.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Aeropuertos y clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación de aeropuertos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Operación aeroportuaria',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cargos y funciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos requeridos para la operación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Reglamento aeronáutico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Derechos y deberes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Procedimientos regulatorios',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Manuales de operación en rampa',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Manejo de mercancías peligrosas',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Transporte - Unidad Administrativa Especial de Aeronáutica Civil. (2019). Resolución No. 06352. Aerocivil. ',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/reglamentacion/RAC/Resoluci%C3%B3n%2006352%20-%2014%20Noviembre%202013.pdf',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Aeronáutica Civil. (2020). RAC 1. Aerocivil. ',
      link:
        'https://www.aerocivil.gov.co/normatividad/RAC/RAC%20%201%20-%20%20Definiciones.pdf',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Aeronáutica Civil. (s.f.) RAC 175. Transporte sin riesgos de mercancías peligrosas. Aerocivil. ',
      link:
        'https://www.aerocivil.gov.co/normatividad/VERSION%20DIC%2031%202016/RAC%20%20175%20-%20Transporte%20sin%20Riesgo%20de%20Mercancías%20Peligrosas%20por%20vía%20Aérea.pdf',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Aeronáutica Civil. (s.f.). Programa Estatal para la Gestión de Autoridad en Seguridad Operacional. Aerocivil. ',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/PublishingImages/PEGASO%20Rev.3%20-%20SSP%20Colombia.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Avería',
      significado: 'daño sufrido por el equipaje en el proceso de vuelo.',
    },
    {
      termino: 'Condiciones aeronavegables',
      significado:
        'condiciones que hacen que el vuelo sea seguro, es decir, que tenga, tripulación apta para operar el vuelo, la aeronave debe cumplir con todos los requisitos para volar, condiciones climáticas seguras a lo largo del plan de vuelo, etc.',
    },
    {
      termino: 'Counter',
      termHTML: '<em>Counter</em>',
      significado:
        'área en la que se lleva a cabo el proceso de registro o proceso de <em>Check in</em>, allí el agente de la aerolínea recibe el equipaje y verifica documentación.',
    },
    {
      termino: 'HUB de conexiones',
      significado:
        'centro de la operación aérea de determinada aerolínea, es llamado HUB por su significado en Inglés HUB: centro de actividades.',
    },
    {
      termino: 'Paramotores',
      significado:
        'aeronave conformada por un pequeño motor de hélice y un parapente. Es, básicamente, un parapente motorizado.',
    },
    {
      termino: 'Pasajero en condición jurídica',
      significado:
        'persona que viaja custodiada por órdenes de alguna entidad gubernamental, carcelaria o judicial de policía, se encuentra privado de la libertad sindicado de algún delito, sus custodios son ubicados en sillas alejadas de las puertas de acceso y de las salidas de emergencia de la aeronave y, por lo menos, uno de los funcionarios de custodia, debe estar sentado entre el pasajero custodiado y el pasillo.',
    },
    {
      termino: 'Planeadores',
      significado:
        'aeronave ligera, sin motor y con alas generalmente muy largas, que se eleva y planea aprovechando las corrientes de aire.',
    },
    {
      termino: 'Push Back',
      termHTML: '<em>Push Back</em>',
      significado:
        'procedimiento en el cual se remolca un avión desde la puerta de embarque hasta la calle de rodaje. Lo efectúa un vehículo, comúnmente nombrado tractor de remolque que se une al avión mediante una barra denominada <em>towbar</em>.',
    },
    {
      termino: 'Saqueo',
      significado:
        'apoderamiento de bienes que hacen parte de un equipaje sin consentimiento del dueño.',
    },
    {
      termino: 'Terminal de carga ',
      significado:
        'espacios exclusivos para el manejo, recepción, embarque y desembarque de mercancías, que cuentan con la infraestructura, equipamiento y logística para la operación funcional y segura acorde a las normativas vigentes.',
    },
  ],
  complementario: [
    {
      texto:
        'Unidad Administrativa Especial de Aeronáutica Civil. (2020). RAC 1. Aerocivil.',
      tipo: 'PDF',
      descarga: 'downloads/RAC  1 -  Definiciones.pdf',
    },
    {
      texto: 'Ávila. C. (2021). Clasificación mercancías peligrosas.',
      tipo: 'Excel',
      descarga: 'downloads/Mercancias peligrosas.xlsx',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Bogotá',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Bogotá',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
