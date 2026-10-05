export default {
  global: {
    Name: 'Diseño, desarrollo y pruebas de aplicaciones <em>web</em>',
    Description:
      'Este componente formativo aborda los pilares técnicos y conceptuales para desarrollar soluciones <em>web</em> modernas. Integra el ciclo de vida del <em>software</em>, metodologías de desarrollo, técnicas de prototipado, contenidos multimedia, maquetación y administración de datos. Además, comprende la formulación de planes de pruebas, criterios de aceptación (DoR / DoD) y protocolos de seguridad de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Pruebas de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de pruebas de <em>software</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de pruebas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plan de pruebas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Criterios de aceptación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Definition of Ready y Definition of Done',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prototipado de aplicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de prototipo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Sketch</em> y <em>mockups</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<em>Wireframe</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: '<em>Wireflow</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de ciclo de vida del <em>software</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metodologías de desarrollo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ejecución de la metodología',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Fases del desarrollo de <em>software</em>',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenido <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características y distribución del contenido <em>web</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Formatos y tipos de archivo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Imágenes, fotografías y vínculos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Diseño visual y factores del diseño visual',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Licencias para el uso y publicación de recursos',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo:
              'Configuración y administración de bases de datos de contenido <em>web</em>',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño y desarrollo <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Procedimientos y protocolos de diseño y desarrollo <em>web</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Técnicas de diseño y estructura visual',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Protocolos de seguridad de la información',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnicas de maquetación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Parámetros de visualización',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228126_CF09_CFA.pdf',
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
  glosario: [
    {
      termino: 'API (Application Programming Interface)',
      significado:
        'conjunto de reglas y mecanismos que permite la comunicación e intercambio de información entre diferentes aplicaciones, sistemas o componentes de <em>software.</em>',
    },
    {
      termino: '<em>Backlog</em>',
      significado:
        'lista organizada y priorizada de funcionalidades, requerimientos, mejoras o tareas pendientes asociadas con el desarrollo de un producto de <em>software.</em>',
    },
    {
      termino: 'Caso de prueba (<em>test case</em>)',
      significado:
        'conjunto de condiciones, datos de entrada, pasos de ejecución y resultados esperados definidos para verificar el comportamiento de una funcionalidad específica del <em>software.</em>',
    },
    {
      termino: 'Gherkin',
      significado:
        'lenguaje estructurado utilizado para describir escenarios de comportamiento mediante expresiones como <b>Dado, Cuando</b> y <b>Entonces</b>, facilitando la formulación de criterios de aceptación verificables.',
    },
    {
      termino: 'OWASP (Open Worldwide Application Security Project)',
      significado:
        'organización internacional sin fines de lucro orientada a mejorar la seguridad del <em>software</em> mediante proyectos, herramientas, metodologías y recursos abiertos relacionados con la seguridad de las aplicaciones.',
    },
    {
      termino: 'Pruebas unitarias (<em>unit testing</em>)',
      significado:
        'nivel de prueba en el que se verifican de manera aislada unidades o componentes individuales del <em>software</em>, como funciones, métodos o módulos.',
    },
    {
      termino: 'QA (Quality Assurance)',
      significado:
        'conjunto de actividades orientadas a asegurar la calidad del <em>software</em> mediante la prevención de defectos y la aplicación sistemática de procesos, estándares y prácticas de calidad.',
    },
    {
      termino: '<em>Scope creep</em>',
      significado:
        'incremento progresivo y no controlado del alcance inicialmente establecido para un proyecto o producto, debido a la incorporación de requisitos o funcionalidades adicionales.',
    },
    {
      termino: '<em>Staging</em>',
      significado:
        'entorno previo a producción utilizado para desplegar y validar una aplicación en condiciones similares a las del entorno real antes de su publicación definitiva.',
    },
    {
      termino: '<em>Tabnabbing</em>',
      significado:
        'técnica de ataque en la que una pestaña o página abierta puede ser utilizada para redirigir al usuario o modificar el contenido mostrado con fines maliciosos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agile Alliance. (2023). Agile Glossary: Definition of Done and Definition of Ready. Agile Alliance Resource Library.',
    },
    {
      referencia:
        'Creative Commons Organization. (2023). About CC Licenses: About the Licenses. Creative Commons Legal Code.',
    },
    {
      referencia:
        'International Software Testing Qualifications Board (ISTQB). (2023). Syllabus Probador Certificado Nivel Básico (CTFL) v4.0. ISTQB Official Documents.',
    },
    {
      referencia:
        'MDN Web Docs - Mozilla Developer Network. (2024). Aprender desarrollo web: Estructuración y diseño frontend. Mozilla Foundation.',
    },
    {
      referencia:
        'OWASP Foundation. (2021). OWASP Top 10:2021 - Los diez riesgos de seguridad de aplicaciones web más críticos. Open Web Application Security Projectu',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). Ingeniería del software: Un enfoque práctico (9.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Schwaber, K., & Sutherland, J. (2020). La Guía de Scrum: La Guía Definitiva de Scrum: Las Reglas del Juego. Scrum.org.',
    },
    {
      referencia:
        'World Wide Web Consortium (W3C). (2023). Web Content Accessibility Guidelines (WCAG) 2.1. W3C Recommendation.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Experto temático ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
