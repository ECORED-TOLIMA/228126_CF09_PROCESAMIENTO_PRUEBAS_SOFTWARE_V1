<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Pruebas de <em>software</em>

      .row.justify-content-center
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p El aseguramiento de la calidad (Quality Assurance – QA) y el control de calidad (Quality Control – QC) constituyen pilares fundamentales e insustituibles en la ingeniería de <em>software</em> moderna. En las metodologías de desarrollo contemporáneas, las pruebas de <em>software</em> han dejado de concebirse como una fase tardía, aislada o un simple trámite administrativo previo al despliegue. Por el contrario, se ejecutan como un proceso continuo, sistemático y transversal que acompaña al <em>software</em> durante todo su ciclo de vida (<em>Software</em> Development Life Cycle – SDLC).
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") El objetivo primordial de las pruebas no es únicamente "encontrar errores", sino validar la correcta implementación de las reglas de negocio, prevenir fallos catastróficos en producción, reducir los costos de mantenimiento a largo plazo y garantizar que el producto entregado sea robusto, accesible, seguro y altamente escalable.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t1/img-01.svg', alt='')

      Separador 

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Concepto de pruebas de <em><em>software</em></em>

      p.mb-4 Las pruebas de <em>software</em> se definen formalmente como un conjunto de procesos, técnicas y actividades dinámicas y estáticas orientadas a evaluar la calidad de un artefacto de <em>software</em>. Esto implica la evaluación sistemática del comportamiento del sistema respecto a los requisitos funcionales y no funcionales especificados, mediante dos procesos fundamentales: 

      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .tarjeta--container.row
            .col-lg.tarjeta.color-secundario.rosa.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t1/img-02.svg', alt='')          
              h3.text-center Verificación
              p.mb-0.parrafo Proceso estático y dinámico que responde a la pregunta ¿Se está construyendo el producto correctamente? Se enfoca en comprobar que el <em>software</em> cumple con las especificaciones técnicas, arquitectónicas y de diseño fijadas en las fases previas.

            .col-lg.tarjeta.color-acento-botones.azul.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t1/img-03.svg', alt='')          
              h3.text-center Validación
              p.mb-0.parrafo Proceso dinámico que responde a la pregunta ¿Se está construyendo el producto correcto? Se enfoca en confirmar que la aplicación satisface las necesidades reales, las expectativas y los flujos de trabajo del usuario final en un entorno operativo real.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 La economía del error y el concepto de <em>shift-left testing</em>
      
      p.mb-4 Uno de los fundamentos económicos más importantes en la ingeniería de <em>software</em> es la curva del costo de corrección de defectos (propuesta originalmente por Barry Boehm). Corregir un fallo en la fase de producción puede ser hasta 100 veces más costoso que detectarlo y solucionarlo durante la fase de análisis o diseño. El siguiente ejemplo representa de forma esquemática cómo aumenta el costo de corrección a medida que el desarrollo avanza hacia etapas posteriores del ciclo de vida del <em>software</em>:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.
                Costo de corrección
                  ^
                High |
                    |
                    |
                    |                [Producción] $$$$$
                    |             [Pruebas / QA] $$$
                    |          [Código] $$
                Low |        [Análisis / Diseño] $
                  +------------------------------------>
                                Fase del SDLC

      p.mb-4 Bajo este principio surge el enfoque #[em shift-left testing] (desplazar las pruebas a la izquierda), el cual promueve la ejecución de actividades de aseguramiento de calidad desde la concepción misma del requerimiento. Probar tempranamente previene la propagación de ambigüedades y errores arquitectónicos hacia las fases de codificación y despliegue.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clasificación de anomalías en el <em>software</em>

      p.mb-4 Para mantener una comunicación técnica rigurosa dentro del equipo multidisciplinario, es indispensable diferenciar tres conceptos clave:

      .row.BG01.justify-content-center.px-md-5.px-4(data-aos="fade-left")
        .col-lg-10(data-aos="fade-right")
          ImagenInfografica.color-acento-botones.desktop
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1/figura-1-1.svg', alt='')
            .tarjeta.tarjeta--blanca.p-3(x="22%" y="28%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Equivocación humana o del equipo técnico (analista, arquitecto, desarrollador) cometida durante la interpretación de un requerimiento, la lógica de un algoritmo o la escritura del código fuente.
            .tarjeta.tarjeta--blanca.p-3(x="50%" y="28%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Imperfección, desviación o falla lógica presente de forma física en el código fuente, interfaz, base de datos o documentación, originada como consecuencia directa de un error humano.
            .tarjeta.tarjeta--blanca.p-3(x="78%" y="28%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Manifestación anómala o interrupción del servicio que experimenta el usuario o el sistema en tiempo de ejecución cuando el hilo de ejecución tropieza con un defecto o el sistema en tiempo de ejecución cuando el hilo de ejecución tropieza con un defecto.
          figure.movil
            img(src='@/assets/curso/t1/figura-1-2.svg', alt='')

      Separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Tipos de pruebas

      p.mb-4 La taxonomía de las pruebas de <em>software</em> es vasta y se estructura mediante diferentes criterios de clasificación: por su nivel de abstracción en el código, por el grado de acceso a la arquitectura interna, por su ejecutor y por la naturaleza del objetivo verificado.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clasificación por nivel de ejecución

      p.mb-4 Esta clasificación organiza las pruebas según el nivel del sistema en el que se aplican, desde la evaluación aislada de unidades de código hasta la validación integral de la solución. De acuerdo con este criterio, se distinguen los siguientes niveles de prueba: 

      TabsC.color-acento-botones.mb-4
        .py-3.py-md-4(titulo="Pruebas unitarias")
          .row.justify-content-center.p-4
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t1/img-05.svg', alt='')
            .col-md-7
              p #[b Propósito:] validar el correcto funcionamiento de la unidad lógica de código más pequeña de forma totalmente aislada (métodos, funciones, componentes de interfaz).
              p #[b Características:] son escritas y ejecutadas por los desarrolladores mediante marcos de trabajo automáticos (Jest, JUnit, PyTest, NUnit). Deben ser altamente deterministas, independientes y de ejecución ultrarápida (milisegundos).
              p.mb-0 #[b Uso de dobles de prueba:] para aislar la unidad de dependencias externas (bases de datos, APIs de terceros, red), se utilizan técnicas como <em>mocks, stubs, spies</em> o <em>fakes</em>.

        .py-3.py-md-4(titulo="Pruebas de Integración")
          .row.justify-content-center.p-4
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t1/img-04.svg', alt='')
            .col-md-7
              p #[b Propósito:] verificar las interfaces de comunicación, la transferencia de estructuras de datos y el comportamiento conjunto entre dos o más módulos o servicios previamente probados.
              p.mb-0 #[b Tipos comunes:] integración de componentes, integración de componentes con bases de datos e integración de servicios externos (APIs REST, microservicios, colas de mensajes).
              
        .py-3.py-md-4(titulo="Pruebas de sistema")
          .row.justify-content-center.p-4
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t1/img-06.svg', alt='')
            .col-md-7
              p #[b Propósito:] evaluar el comportamiento global e integral de la aplicación completa dentro de un entorno de pruebas (<em>staging</em> o <em>QA</em>) lo más similar posible al entorno real de producción.
              p.mb-0 #[b Enfoque:] valida flujos de trabajo completos de extremo a extremo (End-to-End – E2E), verificando tanto las reglas de negocio como la estabilidad de la infraestructura subyacente.

        .py-3.py-md-4(titulo="Pruebas de aceptación del usuario")
          .row.justify-content-center.p-4
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t1/img-07.svg', alt='')
            .col-md-7
              p #[b Propósito:] confirmar si el sistema está listo para su entrega comercial o despliegue en producción.
              p.mb-0 #[b Modalidades:] incluyen pruebas alfa, realizadas en un entorno controlado, y pruebas beta, aplicadas a usuarios finales externos en su entorno operativo.

      p.mb-4 Para complementar esta clasificación, las pruebas también pueden diferenciarse según el grado de conocimiento y acceso al código fuente. La siguiente tabla presenta las principales características de las pruebas de caja negra, caja blanca y caja gris:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Clasificación según el grado de acceso al código (técnicas de caja)
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Criterio de comparación
                  th(data-aos="fade-down")(style= "width: 25%") Pruebas de caja negra (<em>black-box</em>)
                  th(data-aos="fade-down")(style= "width: 25%") Pruebas de caja blanca (<em>white-box</em>)
                  th(data-aos="fade-down")(style= "width: 25%") Pruebas de caja gris (<em>grey-box</em>)
              tbody
                tr
                  td(data-aos="fade-down") Conocimiento del código.
                  td(data-aos="fade-down") Nulo. Se enfoca exclusivamente en la entrada y la salida (<em>inputs / outputs</em>).
                  td(data-aos="fade-down") Total. Requiere acceso pleno al código fuente, estructura y arquitectura.
                  td(data-aos="fade-down") Parcial. Conocimiento de modelos de datos, APIs o diagramas de arquitectura.
                tr
                  td(data-aos="fade-down") Técnicas aplicadas.
                  td(data-aos="fade-down") <em>Partitioning</em> (clases de equivalencia), valores límite, tablas de decisión.
                  td(data-aos="fade-down") Cobertura de sentencias, cobertura de ramas (<em>branch coverage</em>), cobertura de rutas.
                  td(data-aos="fade-down") Pruebas de integración de APIs, verificación de esquema de BD, <em>log analysis</em>.
                tr
                  td(data-aos="fade-down") Ejecutor principal.
                  td(data-aos="fade-down") Analistas QA, <em>testers</em> funcionales, usuarios finales.
                  td(data-aos="fade-down") Desarrolladores de <em>software</em>, arquitectos de código, ingenieros en automatización.
                  td(data-aos="fade-down") Ingenieros de automatización de pruebas, QA <em>tech leads</em>.
                tr
                  td(data-aos="fade-down") Nivel de aplicación habitual.
                  td(data-aos="fade-down") Pruebas de sistema, UAT, pruebas de usabilidad.
                  td(data-aos="fade-down") Pruebas unitarias, pruebas de integración de bajo nivel.
                  td(data-aos="fade-down") Pruebas de integración de servicios, pruebas de seguridad en APIs.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clasificación según el objetivo (funcionales vs. no funcionales)
      
      p.mb-4 Esta clasificación distingue las pruebas según el aspecto del sistema que se busca evaluar su comportamiento funcional o sus atributos de calidad. A partir de este criterio, las pruebas se organizan en funcionales y no funcionales, cada una con propósitos y técnicas específicas:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .titulo-recurso-pruebas.mb-3
            span A. Pruebas funcionales

          p.mb-4 Evalúan “qué hace” el sistema. Comprueban la lógica de negocio, manipulación de datos, autenticación, autorización y cálculos. Entre las principales pruebas funcionales se encuentran las siguientes:

          .recurso-pruebas-funcionales
            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t1/img-08.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Pruebas de regresión
                p.mb-0 Reejecución sistemática de <em>suites</em> de prueba previas para verificar que las modificaciones recientes en el código, correcciones de <em>bugs</em> o refactorizaciones no hayan roto funcionalidades existentes.

            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t1/img-09.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Pruebas de humo
                p.mb-0 Pruebas superficiales de respuesta rápida dirigidas a las funcionalidades más críticas para comprobar si la versión cargada es lo suficientemente estable como para iniciar un ciclo formal de pruebas.

            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t1/img-10.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Pruebas de sanidad
                p.mb-0 Verificación focalizada en funcionalidades específicas tras un cambio menor para confirmar que el componente funciona correctamente.

      .row.justify-content-center.franja-pruebas-no-funcionales
        .col-lg-10.col-12
          .titulo-recurso-pruebas.mb-3
            span B. Pruebas no funcionales

          p.mb-3 Evalúan "cómo lo hace" el sistema. Miden los atributos de calidad, rendimiento, resistencia, accesibilidad y seguridad. Dentro de esta categoría se encuentran las siguientes pruebas:

          .recurso-pruebas-no-funcionales
            ul.recurso-pruebas-no-funcionales__lista
              li
                i.fas.fa-file-code
                .recurso-pruebas-no-funcionales__texto
                  p.mb-0
                    b Pruebas de carga.
                  p.mb-0 Someten al sistema a la demanda operativa esperada en producción (p. ej., 1000 usuarios concurrentes) para medir tiempos de respuesta y uso de CPU / memoria.

              li
                i.fas.fa-file-code
                .recurso-pruebas-no-funcionales__texto
                  p.mb-0
                    b Pruebas de estrés.
                  p.mb-0 Someten al sistema a cargas extremas que sobrepasan la capacidad máxima planificada (p. ej., 50 000 usuarios) para identificar su punto de ruptura (<em>breaking point</em>) y verificar si logra una recuperación limpia (<em>graceful degradation</em>).

              li
                i.fas.fa-file-code
                .recurso-pruebas-no-funcionales__texto
                  p.mb-0
                    b Pruebas de volumen.
                  p.mb-0 Evalúan el comportamiento de la aplicación cuando es sometida a un crecimiento masivo de datos en la base de datos.

              li
                i.fas.fa-file-code
                .recurso-pruebas-no-funcionales__texto
                  p.mb-0
                    b Pruebas de seguridad.
                  p.mb-0 Identificación y explotación simulada de vulnerabilidades de <em>software</em> (OWASP Top 10) para proteger la confidencialidad, integridad y disponibilidad del sistema.

              li
                i.fas.fa-file-code
                .recurso-pruebas-no-funcionales__texto
                  p.mb-0
                    b Pruebas de usabilidad y accesibilidad.
                  p.mb-0 Validan la curva de aprendizaje, la facilidad de uso y la conformidad con pautas universales de accesibilidad (<em>WCAG 2.1 AA</em>) para usuarios con capacidades diversas.

      Separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Plan de pruebas

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p El plan de pruebas (<em>test plan</em>) es el artefacto formal y estratégico que define los objetivos, el alcance, los recursos, las herramientas, los entornos, el cronograma y la gestión de riesgos asociados con el proceso de aseguramiento de calidad. Es un documento dinámico regido por estándares internacionales como ISO/IEC/IEEE 29119-3.
            .cajon.cajon.C01.color-primario1.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Un plan de pruebas profesional integra diferentes componentes que permiten delimitar el proceso, establecer las condiciones para su ejecución y determinar los recursos y entregables necesarios. Entre sus principales componentes estructurales se encuentran los siguientes: 
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t1/img-12.svg', alt='')

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-10
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Identificador del documento y control de cambios")
              .col-12.mb-4.mb-md-0
                p.mb-0 Permite mantener la trazabilidad de las versiones del plan de pruebas mediante el registro de modificaciones, fechas, autores, responsables y aprobadores. Este componente facilita el seguimiento de la evolución del documento y permite identificar qué cambios se realizaron, quién los efectuó y cuál es la versión vigente durante el proceso de pruebas.
            .row(numero="2" titulo="Introducción y alcance (<em>scope</em>)")
              .col-12.mb-4.mb-md-0
                p.mb-0 Delimita qué elementos serán objeto de prueba y cuáles quedan excluidos. El alcance (<em>in-scope</em>) comprende los módulos, navegadores, dispositivos, sistemas operativos y funcionalidades que serán probados. Por su parte, los elementos fuera del alcance (<em>out-of-scope</em>) corresponden a componentes, integraciones de terceros o plataformas que se excluyen explícitamente del proceso para evitar desviaciones.
            .row(numero="3" titulo="Estrategia y niveles de prueba")
              .col-12.mb-4.mb-md-0
                p.mb-0 Describe el enfoque metodológico, los niveles de prueba, las herramientas que se utilizarán —como Postman, Selenium, JMeter, Cypress o Appium— y el nivel de automatización proyectado para orientar la ejecución del proceso.
            .row(numero="4" titulo="Criterios de entrada, suspensión y salida")
              .col-12.mb-4.mb-md-0
                p.mb-0 Establecen las condiciones que regulan el inicio, la posible interrupción y la finalización de las pruebas. Los criterios de entrada (<em>entry criteria</em>) determinan los requisitos previos para comenzar; los criterios de suspensión (<em>suspension criteria</em>) establecen las circunstancias que obligan a detener temporalmente el proceso; y los criterios de salida (<em>exit criteria</em>) especifican las metas que deben alcanzarse para dar por concluida la fase de pruebas.
            .row(numero="5" titulo="Entornos y datos de prueba")
              .col-12.mb-4.mb-md-0
                p.mb-0 Comprenden la especificación del <em>hardware</em>, la topología de red, los certificados SSL, las versiones del motor de base de datos y las estrategias para enmascarar o generar datos sintéticos, considerando las regulaciones aplicables de protección de datos personales.
            .row(numero="6" titulo="Entregables de pruebas")
              .col-12.mb-4.mb-md-0
                p.mb-0 Incluyen los documentos y reportes generados durante el proceso, como casos de prueba, reportes de ejecución, matrices de trazabilidad de requisitos y reportes de defectos gestionados mediante herramientas como Jira o Azure DevOps.

      p.mb-4 La planificación también debe considerar los riesgos que pueden afectar la ejecución de las pruebas y las acciones previstas para responder ante ellos. La siguiente tabla ejemplifica la relación entre el riesgo identificado, su impacto, su probabilidad y el correspondiente plan de mitigación o contingencia:

      .row.justify-content-center(data-aos="flip-up")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span Matriz de gestión de riesgos y contingencias
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Riesgo identificado
                  th(data-aos="fade-down")(style= "width: 25%") Impacto
                  th(data-aos="fade-down")(style= "width: 25%") Probabilidad
                  th(data-aos="fade-down")(style= "width: 25%") Plan de mitigación / contingencia
              tbody
                tr
                  td(data-aos="fade-down") Retraso en la entrega del entorno de pruebas.
                  td(data-aos="fade-down") Alto.
                  td(data-aos="fade-down") Media.
                  td(data-aos="fade-down") Utilizar contenedores <em>docker</em> estandarizados para desplegar entornos locales en máquinas de desarrollo.
                tr
                  td(data-aos="fade-down") Inestabilidad en la API de pagos del proveedor.
                  td(data-aos="fade-down") Crítico.
                  td(data-aos="fade-down") Alta.
                  td(data-aos="fade-down") Implementar un servidor <em>mock</em> de pruebas que simule las respuestas de la pasarela de pagos.
                tr
                  td(data-aos="fade-down") Rotación o falta de personal capacitado en automatización.
                  td(data-aos="fade-down") Medio.
                  td(data-aos="fade-down") Media.
                  td(data-aos="fade-down") Diseñar <em>scripts</em> de automatización modulares bajo patrones de diseño como Page Object Model (POM) para facilitar su mantenimiento.

      Separador

      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Criterios de aceptación

      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p Los criterios de aceptación son el conjunto formal, explícito y detallado de condiciones, límites y reglas de negocio que una historia de usuario o requerimiento debe satisfacer plenamente para que el <em>product owner</em> o cliente la apruebe y la acepte como entregada.
            p Su importancia operativa tiene en cuenta lo siguiente:
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 #[b Eliminan la ambigüedad:] transforman intenciones generales del usuario en especificaciones técnicas verificables.

                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 #[b Definen los límites del alcance:] previenen el crecimiento descontrolado del alcance (<em>scope creep</em>).

                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 #[b Guían el diseño de pruebas:] sirven como la fuente de entrada primaria a partir de la cual el analista QA redacta los casos de prueba.

        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t1/img-13.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Redacción basada en BDD (Behavior-Driven Development)
      
      p.mb-4 El enfoque BDD promueve el uso de un lenguaje omnipresente y comprensible tanto para perfiles técnicos como de negocio, utilizando la sintaxis formal #[b Gherkin]: 

      .row.justify-content-center.mb-0.tarjetas-given-when(data-aos="flip-down")
        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t1/img-14.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t1/img-14-hover.svg", alt="")
            h5.text-center Dado que (#[em given])
            p.mb-0 Establece el estado inicial del sistema, el contexto o las precondiciones necesarias.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t1/img-15.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t1/img-15-hover.svg", alt="")
            h5.text-center Cuando (#[em when])
            p.mb-0 Especifica la acción principal, el evento o el gatillo ejecutado por el usuario o un proceso automático.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t1/img-16.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t1/img-16-hover.svg", alt="")
            h5.text-center Entonces (#[em then])
            p.mb-0 Detalla el resultado esperado, la reacción del sistema o las poscondiciones observables.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t1/img-17.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t1/img-17-hover.svg", alt="")
            h5.text-center Y / pero (#[em and / but])
            p.mb-0 Conectores lógicos para extender precondiciones, acciones o verificaciones adicionales.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Ejemplo práctico de historia de usuario y criterios de aceptación

      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p.mb-4 El siguiente ejemplo muestra cómo una necesidad expresada mediante una historia de usuario puede transformarse en criterios de aceptación verificables. Primero se plantea el requerimiento desde la perspectiva del usuario y, posteriormente, se estructura mediante la sintaxis Gherkin, definiendo escenarios que permiten comprobar el comportamiento esperado del sistema:
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p(data-aos="fade-down") #[b Historia de usuario]
              p.mb-0 #[b Como] cliente registrado en la tienda virtual.
              p.mb-0 #[b Quiero] aplicar un código de descuento promocional en la pantalla de pago.
              p.mb-0 #[b Para] obtener un beneficio económico en el total de mi compra.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t1/img-18.png', alt='')

      p.mb-4 A partir de esta historia de usuario, los criterios de aceptación se codifican mediante escenarios en Gherkin, utilizando las expresiones #[b Dado que, Cuando] y #[b Entonces] para representar las precondiciones, acciones y resultados esperados de la siguiente manera:

      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code
                pre.recurso-terminal-sdlc__code
                  | Escenario 1: Aplicación exitosa de código de descuento válido
                  br
                  |   Dado que el usuario tiene un carrito con productos por un total de $100.000 COP
                  br
                  |   Y el usuario se encuentra en la pantalla de verificación de pago
                  br
                  |   Cuando ingresa el código promocional "
                  span.terminal-verde VERANO2026
                  | " en el campo de texto
                  br
                  |   Y presiona el botón "
                  span.terminal-verde Aplicar Código
                  | "
                  br
                  |   Entonces el sistema debe validar el código contra la base de datos
                  br
                  |   Y aplicar un descuento del 10 % ($10.000 COP) sobre el total de la compra
                  br
                  |   Y actualizar el monto final a pagar a $90.000 COP en menos de 2 segundos.
                  br
                  br
                  | Escenario 2: Intento de aplicación de código promocional vencido
                  br
                  |   Dado que el usuario se encuentra en la pantalla de verificación de pago
                  br
                  |   Cuando ingresa el código promocional "
                  span.terminal-verde NAVIDAD2025
                  | "
                  br
                  |   Y presiona el botón "
                  span.terminal-verde Aplicar Código
                  | "
                  br
                  |   Entonces el sistema no debe aplicar ningún descuento al total acumulado
                  br
                  |   Y debe desplegar un mensaje de advertencia visible en color rojo: "
                  span.terminal-verde El código promocional ingresado ha expirado
                  | ".

      Separador

      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 <em>Definition of Ready y Definition of Done</em>

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-start.justify-content-center.mb-3
            .col-lg-3.col-md-5.col-10.mb-4.mb-lg-0
              figure.mb-0
                img(src='@/assets/curso/t1/img-19.png', alt='').w-100.recurso-dor-dod__img

            .col-lg-9.col-md-7.col-12
              .recurso-dor-dod.mb-4
                .row.align-items-start.g-0
                  .col-auto
                    .recurso-dor-dod__icono
                      figure.mb-0
                        img(src='@/assets/curso/t1/img-20.svg', alt='').w-100
                  .col
                    .recurso-dor-dod__texto
                      p.mb-0
                        | En el marco de las metodologías ágiles como Scrum y Kanban, el DoR (Definition of Ready) y el DoD (Definition of Done) funcionan como acuerdos de calidad contractuales dentro del equipo. Funcionan como compuertas de inspección (<em>quality gates</em>) que regulan la entrada y salida de las historias de usuario a lo largo de las iteraciones (<em>sprints</em>).
              .row
                .col-12
                  p.mb-0
                    | El siguiente esquema representa el flujo de una historia de usuario y permite identificar los momentos en los que se aplican el DoR y el DoD, desde su incorporación al <em>backlog</em> hasta la obtención de un incremento desplegable:
      
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code
                pre.recurso-terminal-sdlc__code
                  | [ Historias en <em>backlog</em> ] ──► [ DoR ] ──► [ Desarrollo / <em>sprint</em> ] ──► [ DoD ] ──► [ Incremento desplegable ]

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Definition of Ready (DoR) – definición de listo

      p Es la lista de comprobación que evalúa si una historia de usuario está adecuadamente madura, especificada y refinada antes de ser aceptada dentro del compromiso de desarrollo de un <em>Sprint</em>. Su objetivo es evitar que los desarrolladores comiencen a codificar sobre requerimientos incompletos o ambiguos.
      p.mb-4 Una historia cumple el DoR si satisface el estándar INVEST, acrónimo que reúne seis características fundamentales: 

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10(data-aos="fade-right")
          ImagenInfografica.color-acento-botones.desktop
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1/img-21-v1.svg', alt='')
            .tarjeta.tarjeta--blanca.p-3(x="15.5%" y="59%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Se puede desarrollar e implementar sin bloqueos o dependencias directas con otras historias paralelas.
            .tarjeta.tarjeta--blanca.p-3(x="29.5%" y="31%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Los detalles son discutidos y acordados colaborativamente entre el <em>product owner</em> y el equipo.
            .tarjeta.tarjeta--blanca.p-3(x="41%" y="59%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Aporta un valor claro y medible al usuario o al negocio.
            .tarjeta.tarjeta--blanca.p-3(x="55.8%" y="31%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 El equipo comprende el alcance técnico para poder otorgarle un tamaño (puntos de historia u horas).
            .tarjeta.tarjeta--blanca.p-3(x="67%" y="59%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Tiene el tamaño óptimo para ser completada holgadamente dentro del marco del sprint.
            .tarjeta.tarjeta--blanca.p-3(x="80.5%" y="31%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Posee criterios de aceptación claros que permiten construir pruebas para verificarla.
          figure.movil
            img(src='@/assets/curso/t1/img-21-v2.svg', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Definition of Done (DoD) – definición de hecho
      
      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-stretch.justify-content-center.g-3.recurso-dod-comparacion
            .col-lg-9.col-12
              .recurso-dod-comparacion__texto
                p.mb-0 Es la lista compartida de criterios técnicos, operacionales y de calidad que debe cumplir obligatoriamente todo elemento del <em>backlog</em> antes de darlo por terminado. Garantiza que el producto resultante sea un incremento funcional de <em>software</em> de alta calidad, con la deuda técnica controlada y potencialmente desplegable a producción. A partir de estas características, es posible diferenciar el DoR y el DoD según su momento de aplicación, objetivo, responsables, consecuencias de incumplimiento y criterios de verificación. La siguiente tabla presenta esta comparación:

            .col-lg-3.col-md-6.col-10
              .recurso-dod-comparacion__imagen
                figure.mb-0
                  img(src='@/assets/curso/t1/img-23.svg', alt='')

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Cuadro comparativo integral entre DoR y DoD
          .tabla-a.color-acento-contenido.tabla-metodologias.tabla-dor-dod
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 33%") Dimensión
                  th(data-aos="fade-down")(style= "width: 33%") Definition of Ready (DoR)
                  th(data-aos="fade-down")(style= "width: 33%") Definition of Done (DoD)
              tbody
                tr
                  td(data-aos="fade-down") #[b Punto de aplicación.]
                  td(data-aos="fade-down") Fase de entrada: antes de planificar e iniciar la iteración (<em>sprint planning</em>).
                  td(data-aos="fade-down") Fase de salida: al finalizar el ciclo de desarrollo y pruebas de la tarea.
                tr
                  td(data-aos="fade-down") #[b Objetivo central.]
                  td(data-aos="fade-down") Garantizar la claridad, viabilidad y comprensión del requerimiento.
                  td(data-aos="fade-down") Garantizar la excelencia técnica, la calidad y la ausencia de deuda técnica.
                tr
                  td(data-aos="fade-down") #[b Liderazgo principal.]
                  td(data-aos="fade-down") <em>Product owner</em>, analistas de negocio y arquitecto.
                  td(data-aos="fade-down") Equipo de desarrolladores, ingenieros QA y DevOps.
                tr
                  td(data-aos="fade-down") #[b Consecuencia de incumplir.]
                  td(data-aos="fade-down") La historia #[b no] ingresa al sprint; se devuelve a refinamiento.
                  td(data-aos="fade-down") La historia #[b no] se da por terminada ni suma a la velocidad del <em>sprint</em>.
                tr
                  td(data-aos="fade-down") #[b Lista de chequeo típica.]
                  td(data-aos="fade-down") 
                    ul.tabla-dor-dod__checklist
                      li
                        i.fas.fa-file-code
                        span Historia redactada bajo el formato estándar.
                      li
                        i.fas.fa-file-code
                        span Criterios de aceptación (Gherkin) aprobados por QA.
                      li
                        i.fas.fa-file-code
                        span Mapeo de UX / UI disponible (<em>wireframes / mockups</em>).
                      li
                        i.fas.fa-file-code
                        span Tarea estimada por el equipo técnico.
                      li
                        i.fas.fa-file-code
                        span Dependencias técnicas resueltas.
                  td(data-aos="fade-down") 
                    ul.tabla-dor-dod__checklist
                      li
                        i.fas.fa-file-code
                        span Código fuente completamente escrito y refactorizado.
                      li
                        i.fas.fa-file-code
                        span Análisis estático de código sin alertas críticas (SonarQube).
                      li
                        i.fas.fa-file-code
                        span Pruebas unitarias ejecutadas con cobertura mínima del 80 %.
                      li
                        i.fas.fa-file-code
                        span Pruebas de integración y regresión aprobadas.
                      li
                        i.fas.fa-file-code
                        span Revisión de código (<em>code review</em>) aprobada por 2 pares.
                      li
                        i.fas.fa-file-code
                        span Documentación técnica y de usuario actualizada.
                      li
                        i.fas.fa-file-code
                        span Despliegue exitoso en el entorno de pruebas (<em>staging</em>).
      
      p.mb-4 Además de los criterios que orientan la preparación y finalización de las historias de usuario, la estrategia de calidad también requiere organizar las pruebas según su nivel de alcance. La siguiente figura representa esta distribución mediante la pirámide de automatización de pruebas:

      .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Pirámide de automatización de pruebas e interacción de capas de prueba
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/t1/figura-1-1v.svg', alt='Figura 1 que presenta la pirámide de automatización de pruebas de <em>software</em>, estructurada en tres niveles principales: la base representa las pruebas unitarias, caracterizadas por su alta velocidad, bajo costo y ejecución frecuente; el nivel intermedio contiene las pruebas de integración y API; y la cúspide ilustra las pruebas de interfaz de usuario y aceptación, orientadas a la validación de flujos completos.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/t1/figura-1-2v.svg', alt='Figura 1 que presenta la pirámide de automatización de pruebas de <em>software</em>, estructurada en tres niveles principales: la base representa las pruebas unitarias, caracterizadas por su alta velocidad, bajo costo y ejecución frecuente; el nivel intermedio contiene las pruebas de integración y API; y la cúspide ilustra las pruebas de interfaz de usuario y aceptación, orientadas a la validación de flujos completos.')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
