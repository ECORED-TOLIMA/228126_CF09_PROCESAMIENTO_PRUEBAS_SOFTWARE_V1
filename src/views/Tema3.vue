<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Desarrollo de <em>software</em>

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")(style="")
        .bloque-texto-g__img.img-bg-02
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> es una disciplina de la ingeniería que combina principios teóricos, metodologías de trabajo, herramientas tecnológicas y modelos de gestión para diseñar, codificar, probar, desplegar y mantener soluciones informáticas. La correcta selección del ciclo de vida y la metodología de desarrollo determina la eficiencia operativa del equipo, la calidad del producto entregado y la capacidad del proyecto para adaptarse a las dinámicas cambiantes del negocio.

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Concepto de ciclo de vida del <em>software</em>

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-start.justify-content-center.mb-3
            .col-lg-9.col-md-7.col-12
              .row
                .col-12
                  p.mb-4
                    | El ciclo de vida del desarrollo de <em>software</em> (SDLC) es la estructura que organiza las fases, actividades y entregables necesarios para llevar un producto de <em>software</em> desde su concepción inicial hasta su retiro. Este ciclo proporciona un marco para planificar y controlar el desarrollo, facilitando la coordinación de las actividades y la toma de decisiones durante las distintas etapas del proyecto.

              .recurso-dor-dod2.mb-4
                .row.align-items-start.g-0
                  .col-auto
                    .recurso-dor-dod__icono
                      figure.mb-0
                        img(src='@/assets/curso/t3/img-03.svg', alt='').w-100
                  .col
                    .recurso-dor-dod__texto
                      p.mb-0
                        | Entre sus principales objetivos se encuentran estandarizar los procesos, proporcionando un marco de trabajo común para el equipo; garantizar la calidad, mediante actividades de verificación e inspección durante el desarrollo; y gestionar los riesgos y costos, considerando la asignación de recursos, tiempos y costos operativos en cada etapa.
              
            .col-lg-3.col-md-5.col-10.mb-4.mb-lg-0
              figure.mb-0
                img(src='@/assets/curso/t3/img-02.svg', alt='').w-100.recurso-dor-dod__img

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clasificación de los modelos de ciclo de vida

      p.mb-4 Los modelos de ciclo de vida pueden organizarse de acuerdo con la forma en que estructuran el desarrollo y responden a los cambios en los requisitos. De manera general, se distinguen los siguientes enfoques: 

      .row.BG01.justify-content-center.px-md-5.px-4(data-aos="fade-left")
        .col.col-lg-10.col-12
          .tarjeta--container.row
            .col-lg.tarjeta.color-secundario.rosa.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t3/img-04.svg', alt='')          
              h3.text-center Modelos predictivos (tradicionales o secuenciales)
              p.mb-0.parrafo Se basan en una planificación inicial detallada y en una definición anticipada de los requisitos, con una secuencia de desarrollo previamente establecida. Entre sus ejemplos se encuentran el modelo en cascada (<em>waterfall</em>) y el modelo en V.

            .col-lg.tarjeta.color-acento-botones.azul.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t3/img-05.svg', alt='')          
              h3.text-center Modelos adaptativos (iterativos e incrementales)
              p.mb-0.parrafo Organizan el desarrollo mediante ciclos sucesivos que permiten construir y entregar progresivamente el producto, incorporar retroalimentación y responder a cambios durante el proyecto. En este enfoque pueden emplearse marcos y métodos como Scrum, Kanban y Extreme Programming (XP).

      Separador

      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.2 Metodologías de desarrollo

      p.mb-4 Las metodologías de desarrollo representan la puesta en práctica de los modelos de ciclo de vida. Definen los roles, artefactos, actividades y reglas de interacción que orientan la organización del trabajo y permiten coordinar las diferentes etapas del desarrollo de <em>software</em>. Según la forma en que se planifica, ejecuta y adapta el trabajo, pueden emplearse diferentes enfoques. A continuación, se presentan la metodología en cascada y los marcos ágiles:

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 A. Metodología en cascada (<em>waterfall</em>)

      .row.justify-content-center
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p La metodología en cascada sigue un enfoque secuencial en el que el desarrollo avanza mediante fases previamente definidas, como análisis de requisitos, diseño, implementación, pruebas, despliegue y mantenimiento. En su formulación tradicional, cada fase se desarrolla después de completar la anterior, lo que facilita la planificación y el seguimiento del proyecto.
            .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Este enfoque se caracteriza por una planificación detallada, una documentación amplia y una definición anticipada de los requisitos, tiempos y costos. Estas características favorecen el control del proyecto cuando los requisitos son estables; sin embargo, su estructura ofrece menor flexibilidad ante cambios y puede generar reprocesos cuando se identifican nuevas necesidades o problemas en etapas avanzadas.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t3/img-06.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 B. Marcos ágiles (<em>agile frameworks</em>)
      
      p Los enfoques ágiles promueven el desarrollo iterativo e incremental, la colaboración continua y la capacidad de adaptación frente a cambios en los requisitos. El trabajo se organiza de manera que sea posible obtener retroalimentación frecuente y realizar ajustes durante el desarrollo, en lugar de concentrar la validación y la entrega únicamente al final del proyecto.
      p.mb-4 Dentro del enfoque ágil existen diferentes marcos y métodos para organizar y gestionar el trabajo. Entre los más utilizados se encuentran:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-pruebas-funcionales
            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t3/img-07.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Scrum
                p.mb-0 Es un marco ágil que organiza el trabajo mediante ciclos de duración definida denominados <em>sprints</em>. Establece responsabilidades, eventos y artefactos que permiten planificar el trabajo, desarrollar incrementos del producto, revisar los resultados obtenidos e incorporar ajustes de manera periódica. De esta forma, favorece la inspección, la adaptación y la entrega progresiva de valor.

            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t3/img-08.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Kanban
                p.mb-0 Es un método de gestión visual orientado a optimizar el flujo de trabajo. Permite visualizar las actividades y su estado, controlar la cantidad de trabajo en proceso (Work in Progress – WIP) e identificar posibles cuellos de botella. A diferencia del trabajo organizado en iteraciones fijas, Kanban favorece un flujo continuo, en el que las tareas avanzan conforme existe capacidad disponible.

      p.mb-4 Las diferencias entre los enfoques tradicionales y ágiles pueden analizarse en aspectos como la gestión de los requisitos, las entregas de <em>software</em>, la respuesta al cambio, la medición del progreso y la participación del cliente. La siguiente tabla compara estos elementos:

      .row.justify-content-center(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 6.
            span Matriz comparativa entre la metodología tradicional y el marco ágil
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Criterio de comparación
                  th(data-aos="fade-down")(style= "width: 25%") Metodología en cascada (<em>waterfall</em>)
                  th(data-aos="fade-down")(style= "width: 25%") Marco ágil (Scrum)
              tbody
                tr
                  td(data-aos="fade-down") #[b Gestión de requisitos.]
                  td(data-aos="fade-down") Definidos y detallados al inicio del proyecto, con cambios gestionados formalmente.
                  td(data-aos="fade-down") Dinámicos, evolucionan mediante el <em>product backlog</em>.
                tr
                  td(data-aos="fade-down") #[b Entregas de #[em software]].
                  td(data-aos="fade-down") La entrega del producto completo se realiza generalmente al finalizar el proyecto.
                  td(data-aos="fade-down") Entregas incrementales al finalizar cada <em>sprint</em>.
                tr
                  td(data-aos="fade-down") #[b Respuesta al cambio.]
                  td(data-aos="fade-down") Los cambios requieren evaluación y gestión formal debido a la planificación secuencial.
                  td(data-aos="fade-down") Flexible, permite incorporar cambios para aportar mayor valor.
                tr
                  td(data-aos="fade-down") #[b Medición del progreso.]
                  td(data-aos="fade-down") Basada en el cumplimiento de hitos y documentos de la fase.
                  td(data-aos="fade-down") Basada en el avance hacia los objetivos y en incrementos utilizables del producto.
                tr
                  td(data-aos="fade-down") #[b articipación del cliente.]
                  td(data-aos="fade-down") Alta al inicio (requisitos) y al final (pruebas).
                  td(data-aos="fade-down") Continua y constante a lo largo de cada iteración.

      Separador

      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.3 Ejecución de la metodología

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-start.justify-content-center.mb-3
            .col-lg-3.col-md-5.col-10.mb-4.mb-lg-0
              figure.mb-0
                img(src='@/assets/curso/t3/img-09.svg', alt='').w-100.recurso-dor-dod__img

            .col-lg-9.col-md-7.col-12
              .row
                .col-12
                  p.mb-4
                    | La ejecución metodológica requiere la adopción de herramientas, artefactos y mecanismos de gestión visual que permitan organizar y coordinar el trabajo cotidiano del equipo. En los enfoques ágiles, estos elementos facilitan la priorización de las necesidades, la planificación de las actividades y el seguimiento del avance durante el desarrollo.

              .recurso-dor-dod
                .row.align-items-start.g-0
                  .col-auto
                    .recurso-dor-dod__icono
                      figure.mb-0
                        img(src='@/assets/curso/t3/img-10.svg', alt='').w-100
                  .col
                    .recurso-dor-dod__texto
                      p.mb-0
                        | Entre los principales artefactos utilizados se encuentra el <em>product backlog</em>, que reúne y prioriza las características, historias de usuario, correcciones y demás necesidades relacionadas con el producto. Su contenido puede evolucionar a medida que cambian las prioridades y se obtiene nueva información sobre el producto.

      .row.justify-content-center
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p A partir del <em>product backlog</em> se organiza el <em>sprint backlog</em>, que contiene el trabajo seleccionado para desarrollar durante un <em>sprint</em>. Este artefacto permite hacer visible la planificación del equipo y orientar las actividades necesarias para alcanzar el objetivo establecido para la iteración.
            .cajon.cajon.C01.color-primario1.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Como resultado del trabajo realizado se obtiene el incremento, entendido como el conjunto integrado de elementos completados que cumplen con los criterios de calidad establecidos en la Definition of Done (DoD). De esta manera, los artefactos permiten conectar la planificación del producto con la ejecución y los resultados obtenidos durante el desarrollo.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t3/img-11.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Gestión visual del flujo de trabajo

      p Además de los artefactos de planificación y seguimiento, los equipos pueden utilizar tableros visuales para representar el estado de las actividades y facilitar el control del flujo de trabajo. Estos tableros, físicos o implementados mediante herramientas como Jira o Azure DevOps, organizan las tareas en columnas que reflejan las diferentes etapas por las que avanzan durante su ejecución.
      p.mb-4 El siguiente ejemplo representa, mediante una estructura de código, un tablero básico de seguimiento en el que las tareas se distribuyen según su estado:

      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.recurso-terminal-sdlc__code--centrado.
                +---------------------------------------------------------------+
                | POR HACER (To Do) | EN PROCESO (WIP) | EN PRUEBAS (QA) | HECHO (Done) |
                +---------------------------------------------------------------+
                | [ Tarea A ]       | [ Tarea B ]      | [ Tarea C ]     | [ Tarea D ]  |
                | [ Tarea E ]       |                  |                 |              |
                +---------------------------------------------------------------+

      Separador

      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.4 Fases del desarrollo de <em>software</em>

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.svg-podcast-console
          figure
            img(src='@/assets/curso/t3/img-12.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C01.color-primario1.p-5
            p.mb-0(data-aos="fade-down") El desarrollo de <em>software</em> comprende un conjunto de fases que permiten transformar una necesidad o problema en una solución tecnológica funcional, validada y mantenible. Estas fases abarcan desde la identificación y análisis de los requisitos hasta la puesta en producción y evolución del sistema. Su organización y ejecución pueden variar según la metodología adoptada: en enfoques secuenciales suelen desarrollarse de manera progresiva, mientras que en enfoques iterativos o ágiles pueden repetirse y articularse a lo largo de diferentes ciclos de desarrollo.

      p.mb-4 A continuación, se explican las principales fases que intervienen en este proceso:

      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-10
          LineaTiempoD.color-acento-botones.especial
            .row(numero="A" titulo="Análisis de requisitos y factibilidad")
              .col-12.mb-4.mb-md-0
                p.mb-0 En esta fase se identifican y analizan las necesidades del negocio y de los usuarios mediante técnicas como entrevistas, talleres y levantamiento de información. También se estudia la viabilidad técnica, operativa, legal y financiera del proyecto con el propósito de determinar si la solución puede desarrollarse bajo las condiciones establecidas. Como parte de este proceso, los requisitos pueden documentarse formalmente mediante una Especificación de Requisitos de <em>Software</em> (SRS).
            .row(numero="B" titulo="Diseño de arquitectura y sistema")
              .col-12.mb-4.mb-md-0
                p.mb-0 Esta fase establece cómo estará estructurada la solución antes de su implementación. Comprende la definición de la arquitectura de <em>software</em>, que puede adoptar enfoques monolíticos, de microservicios u orientados a eventos, así como el diseño de los modelos de datos, diagramas de clases y contratos de API. También contempla el diseño de interfaces y prototipos, mediante recursos como <em>wireframes</em> y <em>mockups</em>, para representar anticipadamente la estructura y apariencia de la solución.
            .row(numero="C" titulo="Codificación e implementación")
              .col-12.mb-4.mb-md-0
                p.mb-0 Durante esta fase, el diseño se transforma en código fuente mediante lenguajes, tecnologías y estándares definidos para el proyecto. Los desarrolladores pueden aplicar patrones de diseño, como MVC, Repository o Factory, para favorecer la organización y mantenibilidad del código. Asimismo, se utilizan sistemas de control de versiones como Git y estrategias de ramificación como GitFlow o Trunk-Based Development para gestionar los cambios y facilitar el trabajo colaborativo.
            .row(numero="D" titulo="Pruebas y aseguramiento de la calidad")
              .col-12.mb-4.mb-md-0
                p.mb-0 Esta fase busca verificar y validar que el <em>software</em> cumpla los requisitos establecidos y presente un comportamiento adecuado. Para ello, se realizan diferentes tipos de pruebas, como unitarias, de integración, funcionales, de rendimiento y de seguridad. Los defectos identificados se registran, corrigen y vuelven a evaluar con el propósito de comprobar su resolución y reducir el riesgo de fallos antes de la liberación del producto.
            .row(numero="E" titulo="Despliegue y puesta en producción")
              .col-12.mb-4.mb-md-0
                p.mb-0 Una vez que el producto alcanza las condiciones establecidas para su liberación, se prepara y despliega en la infraestructura correspondiente, que puede estar alojada en servidores propios o en plataformas de nube como AWS, Azure o GCP. Este proceso puede apoyarse en mecanismos de integración y despliegue continuos (CI / CD) y herramientas como Jenkins, GitHub Actions o GitLab CI, que permiten automatizar diferentes actividades de construcción, prueba y despliegue.
            .row(numero="F" titulo="Mantenimiento y evolución")
              .col-12.mb-4.mb-md-0
                p.mb-0 Después de la puesta en producción, el <em>software</em> continúa siendo supervisado y actualizado para conservar su funcionamiento y responder a nuevas necesidades. El mantenimiento correctivo atiende fallos o incidentes detectados durante la operación; el mantenimiento evolutivo incorpora nuevas funcionalidades o mejoras de acuerdo con las necesidades del producto o del negocio; y el mantenimiento adaptativo realiza modificaciones para conservar la compatibilidad frente a cambios en sistemas operativos, plataformas, dependencias o tecnologías del entorno.

      .row.justify-content-center.mt-4
        .col-lg-10
          .row.align-items-center
            .col-lg-12
              .cajon.C01.color-primario.p-4
                p.mb-0 Aunque las fases se presentan de manera secuencial para facilitar su comprensión, su ejecución depende de la metodología adoptada. En los enfoques tradicionales suelen desarrollarse de forma progresiva, mientras que en los enfoques iterativos y ágiles pueden repetirse y articularse a lo largo de diferentes ciclos de desarrollo.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
