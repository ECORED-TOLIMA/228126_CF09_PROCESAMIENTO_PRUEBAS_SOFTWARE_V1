<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Prototipado de aplicaciones

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.svg-podcast-console
          figure
            img(src='@/assets/curso/t2/img-01.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C01.color-primario1.p-4.mb-4
            p.mb-0(data-aos="fade-down") El prototipado de aplicaciones es una disciplina transversal en el diseño de experiencia de usuario (UX) e interfaz de usuario (UI). Consiste en la creación de representaciones visuales, estructurales e interactivas de una solución digital antes de iniciar la fase de codificación formal. Prototipar permite validar hipótesis de diseño, evaluar la usabilidad con usuarios reales, alinear las expectativas de los interesados (<em>stakeholders</em>) y mitigar los riesgos de reproceso en las etapas avanzadas del desarrollo. Este proceso avanza desde la definición inicial de la idea o requerimiento hasta la construcción de representaciones cada vez más detalladas e interactivas, como se muestra en el siguiente esquema:

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
                  | [ Idea / requerimiento ] ──► [ Sketch ] ──► [ <em>Wireframe</em> ] ──► [ <em>Mockup</em> ] ──► [ <em>Wireflow</em> / prototipo ]
      
      Separador

      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Concepto de prototipo

      p.mb-4 Un prototipo es un modelo preliminar o maqueta interactiva de un sistema informático que simula la apariencia, la arquitectura de información y la dinámica de navegación de la aplicación final.

      .row.justify-content-center.mb-4.recurso-prototipado
        .col-lg-8.col-12
          .recurso-prototipado__cajon
            figure.mb-3.recurso-prototipado__icono
              img(src='@/assets/curso/t2/img-03.svg', alt='')

            p.mb-0 El prototipado se fundamenta en tres principios principales: la iteratividad, que permite probar, ajustar y refinar la interfaz de manera ágil y económica antes de escribir código; la comunicación clara, al proporcionar un lenguaje común entre diseñadores, desarrolladores, analistas y clientes; y la validación temprana, que facilita la realización de pruebas de usabilidad para identificar oportunamente problemas de navegación o jerarquía visual.

        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          figure.mb-0.recurso-prototipado__img
            img(src='@/assets/curso/t2/img-02.png', alt='')        

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clasificación según el nivel de fidelidad
      
      p.mb-4 La fidelidad de un prototipo hace referencia al grado de precisión gráfica, funcional y de detalle que posee en comparación con el producto final. De acuerdo con este nivel de fidelidad, los prototipos pueden clasificarse en baja, media y alta fidelidad. La siguiente tabla compara sus principales características, herramientas, niveles de interactividad y momentos de uso:

      .row.BG01.justify-content-center.px-md-5.px-4(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Clasificación y características de los prototipos según su nivel de fidelidad
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Criterio
                  th(data-aos="fade-down")(style= "width: 25%") Baja fidelidad (<em>low-fidelity</em>)
                  th(data-aos="fade-down")(style= "width: 25%") Media fidelidad (<em>medium-fidelity</em>)
                  th(data-aos="fade-down")(style= "width: 25%") Alta fidelidad (<em>high-fidelity</em>)
              tbody
                tr
                  td(data-aos="fade-down") #[b Representación gráfica.]
                  td(data-aos="fade-down") Esquemática, monocromática o a mano alzada.
                  td(data-aos="fade-down") Estructurada, escala de grises, tipografías estándar.
                  td(data-aos="fade-down") Detallada, paleta de colores final, imágenes y tipografía real.
                tr
                  td(data-aos="fade-down") #[b Interactividad.]
                  td(data-aos="fade-down") Nula o simulación manual en papel.
                  td(data-aos="fade-down") Navegación básica entre pantallas mediante <em>clics</em>.
                  td(data-aos="fade-down") Animaciones, transiciones, microinteracciones y respuestas a eventos.
                tr
                  td(data-aos="fade-down") #[b Herramientas de creación.]
                  td(data-aos="fade-down") Papel, lápiz, tableros, <em>balsamiq</em>.
                  td(data-aos="fade-down") Figma, Sketch, Adobe XD, Axure RP.
                  td(data-aos="fade-down") Figma, ProtoPie, InVision, código frontend (HTML / CSS).
                tr
                  td(data-aos="fade-down") #[b Costo y tiempo.]
                  td(data-aos="fade-down") Ultrabajo y de ejecución inmediata.
                  td(data-aos="fade-down") Moderado, requiere estructuración de componentes.
                  td(data-aos="fade-down") Alto, requiere trabajo detallado de diseño UX / UI.
                tr
                  td(data-aos="fade-down") #[b Momento de uso.]
                  td(data-aos="fade-down") Fases iniciales de ideación y <em>brainstorming</em>.
                  td(data-aos="fade-down") Definición de arquitectura y flujos de pantalla.
                  td(data-aos="fade-down") Validación con clientes y entrega a desarrolladores (<em>handoff</em>).

      Separador

      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.2 <em>Sketch</em> y <em>mockups</em>

      p.mb-4 Dentro del flujo de trabajo de diseño UI, los <em>sketches</em> y los <em>mockups</em> se ubican en diferentes niveles de fidelidad visual y cumplen funciones complementarias en el proceso de diseño. A continuación, se explican las características y el propósito de cada uno dentro del desarrollo de una interfaz: 

      .row.justify-content-center
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--C01")
            .row(titulo="<em>Sketch</em> (boceto inicial)")
              .col-12.mb-0.mb-md-0
                p El <em>sketch</em> es una representación gráfica inicial y de baja fidelidad que permite explorar rápidamente ideas y alternativas de diseño. Puede realizarse a mano alzada con lápiz y papel o mediante herramientas digitales, y se utiliza principalmente para definir la organización general de la interfaz antes de incorporar detalles visuales.
                p Características principales:
                ul.lista-ul.mb-0
                  li.mb-0 
                    i.lista-ul__vineta
                    | Creación e iteración rápida.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Baja fidelidad visual.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Representación de la distribución de los componentes.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Facilidad para explorar diferentes ideas de diseño.

            .row(titulo="<em>Mockup</em> (maqueta de alta fidelidad)")
              .col-12.mb-0.mb-md-0
                p El <em>mockup</em> es una representación estática y de alta fidelidad que permite visualizar con mayor precisión la apariencia que tendrá la interfaz antes de su implementación. Incorpora los principales elementos gráficos y facilita la definición y validación de la propuesta visual del producto.
                p Características principales:
                ul.lista-ul.mb-0
                  li.mb-0 
                    i.lista-ul__vineta
                    | |Alta fidelidad visual.
                  li.mb-0 
                    i.lista-ul__vineta
                    | |Definición de colores y tipografías.
                  li.mb-0 
                    i.lista-ul__vineta
                    | |Incorporación de iconografía y recursos multimedia.
                  li.mb-0 
                    i.lista-ul__vineta
                    | |Representación detallada de los componentes UI.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t2/img-04.png', alt='')

      Separador

      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 <em>Wireframe</em>

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-start.justify-content-center.mb-3
            .col-lg-3.col-md-5.col-10.mb-4.mb-lg-0
              figure.mb-0
                img(src='@/assets/curso/t2/img-05.png', alt='').w-100.recurso-dor-dod__img

            .col-lg-9.col-md-7.col-12
              .recurso-dor-dod.mb-4
                .row.align-items-start.g-0
                  .col-auto
                    .recurso-dor-dod__icono
                      figure.mb-0
                        img(src='@/assets/curso/t2/img-06.svg', alt='').w-100
                  .col
                    .recurso-dor-dod__texto
                      p.mb-0
                        | Un <em>wireframe</em> (o esquema de página) es un plano o estructura de baja o media fidelidad que define la disposición espacial de los elementos en una pantalla, la jerarquía de la información y los puntos de interacción, sin incluir elementos estéticos como color o imágenes definitivas.
              .row
                .col-12
                  p.mb-0
                    | El siguiente ejemplo representa la estructura básica de un <em>wireframe</em> y muestra cómo pueden distribuirse los principales elementos de una interfaz antes de incorporar los detalles visuales definitivos:
      
      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.
                  +--------------------------+
                  | [LOGO]    [Inicio][Servicios][Contacto]|
                  +--------------------------+
                  |                   |
                  | [BANNER PRINCIPAL/TITULAR]          |
                  | Texto descriptivo breve...  |
                  | [BOTON CTA]             |
                  |                   |
                  +--------------------------+
                  |[Card 1]  |[Card 2]   |[Card 3]|
                  |(X)Imagen    |(X)Imagen   |(X)Imagen|
                  |Texto...  |Texto...   |Texto... |
                  +--------------------------+

      p.mb-4 El <em>wireframe</em> cumple diferentes propósitos durante la planificación y estructuración de una interfaz, ya que permite definir aspectos funcionales antes de incorporar los elementos visuales definitivos. Entre los principales se encuentran: 

      .row.mb-4.recurso-caracteristicas-cortas
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t2/img-07.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Centrarse en la usabilidad
                p.text-center.mb-0 Al omitir el color y los detalles gráficos, el equipo se concentra exclusivamente en la funcionalidad, la navegación y la claridad del contenido.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t2/img-08.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Definir la arquitectura de información
                p.text-center.mb-0 Establece qué elementos son prioritarios y cómo se agrupan en la pantalla.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t2/img-09.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Facilitar la maquetación
                p.text-center.mb-0 Sirve como mapa conceptual directo para que los desarrolladores <em>frontend</em> entiendan la estructura HTML necesaria.

      Separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 <em>Wireflow</em>

      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p Un <em>wireflow</em> es la combinación estructural de varios <em>wireframes</em> (o <em>mockups</em>) conectados mediante líneas que representan el flujo de interacción. Su objetivo es mapear visualmente el recorrido del usuario (<em>user journey</em>) a través de la aplicación ante diferentes acciones o eventos.
            p.mb-4 Para representar de manera clara la navegación y las posibles rutas de interacción, un <em>wireflow</em> integra diferentes elementos que permiten relacionar las pantallas con las acciones del usuario. Entre sus principales componentes se encuentran:
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Pantallas o nodos que son representaciones de interfaces mediante <em>wireframes</em> o <em>mockups</em>.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Conectores o flechas de flujo que indican la dirección del desplazamiento según la interacción del usuario.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Gatillos (<em>triggers</em>) que corresponden a botones, enlaces, gestos táctiles o formularios que desencadenan el cambio de estado o pantalla.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Condicionales de decisión que representan puntos del flujo donde el sistema evalúa una regla; por ejemplo: ¿Usuario autenticado? Sí / No.

        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t2/img-10.png', alt='')

      p.mb-4 A partir de los conceptos abordados, es posible establecer las principales diferencias entre los artefactos utilizados en el proceso de prototipado. La siguiente tabla compara cada uno según su nivel de fidelidad, grado de interactividad y propósito principal:

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5.
            span Matriz comparativa de los artefactos del proceso de prototipado
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Artefacto
                  th(data-aos="fade-down")(style= "width: 25%") Nivel de fidelidad
                  th(data-aos="fade-down")(style= "width: 25%") ¿Es dinámico / interactivo?
                  th(data-aos="fade-down")(style= "width: 25%") Propósito principal
              tbody
                tr
                  td(data-aos="fade-down") #[em #[b Sketch.]]
                  td(data-aos="fade-down") Baja.
                  td(data-aos="fade-down") No (estático).
                  td(data-aos="fade-down") Generar e iterar ideas de forma rápida a mano alzada.
                tr
                  td(data-aos="fade-down") #[em #[b Wireframe.]]
                  td(data-aos="fade-down") Baja / media.
                  td(data-aos="fade-down") No (estático).
                  td(data-aos="fade-down") Organizar la estructura, jerarquía y distribución del contenido.
                tr
                  td(data-aos="fade-down") #[em #[b Mockup.]]
                  td(data-aos="fade-down") Alta.
                  td(data-aos="fade-down") No (estático).
                  td(data-aos="fade-down") Definir el diseño visual, paleta de colores y componentes estéticos.
                tr
                  td(data-aos="fade-down") #[em #[b Wireflow.]]
                  td(data-aos="fade-down") Media / alta.
                  td(data-aos="fade-down") Sí (diagrama de flujo).
                  td(data-aos="fade-down") Mapear la navegación, rutas e interacciones del usuario entre pantallas.

      p.mb-4 Esta comparación permite analizar cómo los artefactos evolucionan desde representaciones iniciales de baja fidelidad hasta recursos con mayor nivel de detalle e interactividad. La siguiente figura representa gráficamente esta evolución dentro del proceso de prototipado:

      .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Evolución de los artefactos de diseño e interactividad en el proceso de prototipado
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/t2/figura-1-1.svg', alt='Figura 2 que representa el proceso evolutivo del prototipado de aplicaciones, iniciando con la fase de ideación en sketch, pasando por la organización estructural en wireframe, la definición estética en mockup y culminando con la diagramación de flujos de interacción en wireflow.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/t2/figura-1-2.svg', alt='Figura 2 que representa el proceso evolutivo del prototipado de aplicaciones, iniciando con la fase de ideación en sketch, pasando por la organización estructural en wireframe, la definición estética en mockup y culminando con la diagramación de flujos de interacción en wireflow.')

</template>

<script>
export default {
  name: 'Tema2',
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
