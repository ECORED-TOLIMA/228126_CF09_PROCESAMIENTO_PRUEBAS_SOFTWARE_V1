<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Contenido <em>web</em>

      .row.justify-content-center
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.svg-podcast-console
          figure
            img(src='@/assets/curso/t4/img-01.svg', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C01.color-primario.p-4
            p.mb-0(data-aos="fade-down") El contenido <em>web</em> abarca todos los artefactos de información, medios interactivos y estructuras de datos que se transmiten a través de los protocolos HTTP y HTTPS para ser procesados e interpretados por navegadores <em>web</em> o aplicaciones cliente. En el contexto de la ingeniería de <em>software</em> y el diseño de experiencias digitales, la gestión del contenido <em>web</em> no se limita a la simple redacción de textos o inserción de imágenes; requiere una estrategia integral de estructuración semántica, optimización de recursos, licenciamiento legal y administración eficiente mediante bases de datos relacionales y no relacionales.

      Separador

      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 Características y distribución del contenido <em>web</em>
      
      p El contenido <em>web</em> moderno debe diseñarse considerando principios de adaptabilidad, accesibilidad, indexabilidad y velocidad de carga. La forma en que se distribuye la información condiciona directamente la usabilidad del sitio y su posicionamiento en motores de búsqueda (Search Engine Optimization – SEO). Estos principios se concretan en características que orientan la estructuración, presentación e interacción del contenido dentro de una página o aplicación <em>web</em>.
      p.mb-4 Entre las principales características que favorecen una organización adecuada del contenido se encuentran las siguientes:
      
      .row.justify-content-center.mb-4
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Estructuración semántica. Uso de etiquetas HTML5 
                      | (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;) 
                      | que otorgan significado contextual al contenido, facilitando su lectura por parte de tecnologías de asistencia (lectores de pantalla) y <em>crawlers</em> de búsqueda.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Escaneabilidad. Organización del texto mediante jerarquías claras de encabezados 
                      | (&lt;h1&gt; a &lt;h6&gt;),
                      | párrafos breves, listas con viñetas y resaltados en negrita para permitir la lectura rápida.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Hipertextualidad e interactividad. Capacidad de interconectar nodos de información mediante enlaces y permitir la participación activa del usuario mediante formularios y componentes reactivos.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Adaptabilidad. Disposición fluida del contenido que se ajusta automáticamente a diferentes tamaños de pantalla (móviles, tabletas, monitores 4K) mediante Media Queries CSS y diagramación flexible.

        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t4/img-02.png', alt='')

      p.mb-4 Además de su organización y presentación, el contenido debe distribuirse eficientemente desde la infraestructura que lo aloja hasta el navegador del usuario. El siguiente esquema representa de manera simplificada este proceso mediante el uso de una red de distribución de contenido (Content Delivery Networks – CDN):

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.recurso-terminal-sdlc__code--centrado.
                [ Servidor origen ] ──► [ Red de distribución de contenido (CDN) ] ──► [ Navegador usuario ]
                ├── <em>Caching</em> en Edge Servers
                └── Reducción de latencia global

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Arquitectura de distribución de contenido

      p.mb-4 Para garantizar tiempos de respuesta óptimos a nivel global, la distribución de archivos estáticos (imágenes, hojas de estilo CSS, scripts JS, videos) se apoya en redes de distribución de contenido (CDN). Una CDN replica los recursos en una red geográfica de servidores en el borde (Edge Servers), entregando el contenido desde el nodo más cercano al usuario final.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")(style="")
        .bloque-texto-g__img.img-bg-03
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") En este modelo, el servidor de origen conserva los recursos principales, mientras que los nodos distribuidos pueden almacenar copias temporales mediante mecanismos de caché. Cuando un usuario solicita un recurso disponible en un nodo cercano, este puede entregarse directamente desde dicho nodo, reduciendo la necesidad de realizar nuevas solicitudes al servidor de origen. Este funcionamiento contribuye a disminuir la latencia, reducir la carga sobre la infraestructura principal y mejorar la velocidad de entrega del contenido.

      Separador

      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.2 Formatos y tipos de archivo

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p La selección de los formatos de archivo adecuados impacta directamente en el rendimiento de red, el ancho de banda consumido y la fidelidad visual de la aplicación. Cada tipo de recurso <em>web</em> requiere un formato acorde con su función, ya sea para estructurar contenido, definir estilos, incorporar interactividad, representar elementos gráficos o facilitar el intercambio de datos.
            .cajon.cajon.C01.color-primario1.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") La elección adecuada permite equilibrar compatibilidad, calidad y eficiencia, considerando las características del recurso y el contexto en el que será utilizado. La siguiente tabla presenta los principales formatos empleados en contenido <em>web</em>, sus características y algunos de sus casos de uso recomendados:
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t4/img-04.png', alt='')

      .row.BG01.justify-content-center.px-md-5.px-4(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 7.
            span Clasificación de formatos de archivo estándar para contenido <em>web</em>
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Categoría
                  th(data-aos="fade-down")(style= "width: 25%") Formato / extensión
                  th(data-aos="fade-down")(style= "width: 25%") Características principales
                  th(data-aos="fade-down")(style= "width: 25%") Caso de Uso recomendado
              tbody
                tr
                  td(data-aos="fade-down") #[b Texto / estructura.]
                  td(data-aos="fade-down") .html / .htm
                  td(data-aos="fade-down") Lenguaje de marcado de hipertexto estandarizado.
                  td(data-aos="fade-down") Estructura base de páginas <em>web</em>.
                tr
                  td(data-aos="fade-down") #[b Estilos.]
                  td(data-aos="fade-down") .css
                  td(data-aos="fade-down") Hojas de estilo en cascada para la capa visual.
                  td(data-aos="fade-down") Diagramación, diseño y animación.
                tr
                  td(data-aos="fade-down") #[b Lógica del lado del cliente (#[em frontend]).]
                  td(data-aos="fade-down") .js / .mjs
                  td(data-aos="fade-down") Lenguaje de programación interpretado en cliente.
                  td(data-aos="fade-down") Interactividad y dinamismo UI.
                tr
                  td(data-aos="fade-down") #[b Imagen vectorial.]
                  td(data-aos="fade-down") .svg
                  td(data-aos="fade-down") Gráficos basados en XML, escalables sin pérdida.
                  td(data-aos="fade-down") Logotipos, íconos, diagramas e ilustraciones.
                tr
                  td(data-aos="fade-down") #[b Imagen ráster.]
                  td(data-aos="fade-down") .<em>web</em>p / .avif
                  td(data-aos="fade-down") Formatos modernos de alta compresión con o sin pérdida.
                  td(data-aos="fade-down") Fotografías, <em>banners</em> e imágenes complejas.
                tr
                  td(data-aos="fade-down") #[b Imagen en formato tradicional.]
                  td(data-aos="fade-down") .jpg / .png / .gif
                  td(data-aos="fade-down") Formatos tradicionales ampliamente compatibles.
                  td(data-aos="fade-down") Compatibilidad con navegadores antiguos.
                tr
                  td(data-aos="fade-down") #[b Tipografía #[em web].]
                  td(data-aos="fade-down") .woff2 / .woff
                  td(data-aos="fade-down") Formato comprimido optimizado para la <em>web</em>.
                  td(data-aos="fade-down") Fuentes tipográficas personalizadas.
                tr
                  td(data-aos="fade-down") #[b Datos / intercambio.]
                  td(data-aos="fade-down") .json / .xml
                  td(data-aos="fade-down") Formatos livianos para estructuración e intercambio de datos.
                  td(data-aos="fade-down") Consumo de APIs REST y bases de datos NoSQL.

      Separador

      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Imágenes, fotografías y vínculos

      p Las imágenes, fotografías y vínculos son recursos fundamentales en la construcción de contenido <em>web</em>, ya que complementan la información, facilitan la navegación y contribuyen a la experiencia del usuario. Su incorporación requiere considerar aspectos técnicos que permitan optimizar la carga de los recursos visuales y establecer conexiones adecuadas entre diferentes contenidos y páginas.
      p.mb-4 En el caso de las imágenes y fotografías, es necesario equilibrar la calidad visual y el rendimiento, evitando que archivos de gran tamaño incrementen innecesariamente los tiempos de carga. Para ello, pueden aplicarse diferentes técnicas de optimización:

      .row.mb-4.recurso-caracteristicas-cortas
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t4/img-05.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Compresión adaptativa
                p.text-center.mb-0 Uso de algoritmos de compresión para reducir el peso en kilobytes de los archivos ráster sin comprometer apreciablemente la calidad visual.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t4/img-06.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Carga diferida (#[b #[em lazy loading]])
                p.text-center.mb-0 Uso del atributo #[b loading="lazy"] en etiquetas &lt;img&gt; para postergar la descarga de imágenes que se encuentran fuera de la ventana gráfica inicial (<em>viewport</em>) hasta que el usuario se desplaza hacia ellas.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/t4/img-07.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Imágenes responsivas
                p.text-center.mb-0 Implementación de la etiqueta &lt;picture&gt;o el atributo <em>srcset</em> para servir versiones comprimidas y dimensionadas según la resolución del dispositivo del usuario.

      p.mb-4 Estas técnicas pueden combinarse dentro de la estructura HTML para seleccionar diferentes versiones de una imagen según las características de visualización y diferir su carga cuando no se encuentra inicialmente visible. El siguiente ejemplo muestra el uso de &lt;picture&gt; para definir recursos según el tamaño de pantalla y de loading="lazy" para aplicar carga diferida a la imagen:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.codigo-html-responsive
                span.codigo-html-responsive__comentario &lt;!-- Ejemplo de imagen responsiva con fallbacks --&gt;
                br
                span.codigo-html-responsive__tag &lt;picture&gt;
                br
                |   
                span.codigo-html-responsive__tag &lt;source 
                span.codigo-html-responsive__atributo srcset=
                span.codigo-html-responsive__valor "foto-desktop.<em>web</em>p"
                span.codigo-html-responsive__atributo  media=
                span.codigo-html-responsive__valor "(min-width: 1024px)"
                span.codigo-html-responsive__atributo  type=
                span.codigo-html-responsive__valor "image/<em>web</em>p"
                span.codigo-html-responsive__tag &gt;
                br
                |   
                span.codigo-html-responsive__tag &lt;source 
                span.codigo-html-responsive__atributo srcset=
                span.codigo-html-responsive__valor "foto-mobile.<em>web</em>p"
                span.codigo-html-responsive__atributo  media=
                span.codigo-html-responsive__valor "(max-width: 767px)"
                span.codigo-html-responsive__atributo  type=
                span.codigo-html-responsive__valor "image/<em>web</em>p"
                span.codigo-html-responsive__tag &gt;
                br
                |   
                span.codigo-html-responsive__tag &lt;img 
                span.codigo-html-responsive__atributo src=
                span.codigo-html-responsive__valor "foto-default.jpg"
                span.codigo-html-responsive__atributo  alt=
                span.codigo-html-responsive__valor "Descripción accesible de la imagen"
                span.codigo-html-responsive__atributo  loading=
                span.codigo-html-responsive__valor "lazy"
                span.codigo-html-responsive__tag &gt;
                br
                span.codigo-html-responsive__tag &lt;/picture&gt;

      p.mb-4 Además de optimizar los recursos visuales, la organización del contenido <em>web</em> requiere establecer vínculos que permitan al usuario desplazarse entre páginas, recursos o secciones específicas. Según su destino y función dentro de la navegación, los enlaces pueden clasificarse de la siguiente manera:

      .row.justify-content-center
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Enlaces internos
                      | Conectan recursos dentro del mismo dominio, fortaleciendo la estructura de navegación y la transferencia de autoridad SEO.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Enlaces externos
                      | Redirigen a dominios de terceros. Deben incluir atributos de seguridad como rel="noopener noreferrer" al utilizar target="_blank" para prevenir ataques de secuestro de pestaña (tabnabbing).
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                    | Hipertextualidad e interactividad. Capacidad de interconectar nodos de información mediante enlaces y permitir la participación activa del usuario mediante formularios y componentes reactivos.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 Adaptabilidad. Disposición fluida del contenido que se ajusta automáticamente a diferentes tamaños de pantalla (móviles, tabletas, monitores 4K) mediante Media Queries CSS y diagramación flexible.

        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t4/img-08.svg', alt='')

      Separador

      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.4 Diseño visual y factores del diseño visual

      p El diseño visual es el lenguaje gráfico mediante el cual se organizan y presentan los elementos de una interfaz para comunicar la identidad de marca, establecer la jerarquía de la información y orientar los puntos de interacción. Su aplicación busca que los componentes visuales mantengan coherencia, legibilidad y organización, de manera que el usuario pueda reconocer con facilidad la importancia y función de cada elemento.
      p.mb-4 Para lograrlo, el diseño visual considera diferentes factores relacionados con el uso del color, la tipografía, el contraste y la distribución espacial de los elementos. Entre los principales se encuentran los siguientes:

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 A. Teoría del color y paleta cromática

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p.mb-4 El uso planificado del color permite establecer jerarquías, diferenciar elementos y mantener coherencia en la interfaz. Una distribución de referencia puede organizarse de la siguiente manera:
            .cajon.cajon.C05.px-4.py-3.mb-4
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Color dominante (60 %): define el fondo y las áreas neutras de la aplicación.
                li.mb-0 
                  i.lista-ul__vineta
                  | Color secundario (30 %): utilizado en tarjetas, bloques de información y barras laterales.
                li.mb-0 
                  i.lista-ul__vineta
                  | Color de acento (10 %): utilizado para destacar elementos de llamada a la acción (Call to Action – CTA), como botones de compra o confirmación.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t4/img-09.png', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 B. Jerarquía tipográfica

      .row.justify-content-center.mb-4.recurso-prototipado
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          figure.mb-0.recurso-prototipado__img
            img(src='@/assets/curso/t4/img-10.png', alt='')
            
        .col-lg-8.col-12
          .recurso-prototipado__cajon
            figure.mb-3.recurso-prototipado__icono
              img(src='@/assets/curso/t4/img-11.svg', alt='')

            p.mb-0 Establece diferencias claras de tamaño, peso (<em>font-weight</em>) y contraste entre títulos (h1), subtítulos (h2, h3) y cuerpo de texto para guiar la lectura y facilitar la identificación de los diferentes niveles de información. Una jerarquía bien definida permite distinguir contenidos principales y secundarios, favorece la lectura secuencial y mantiene la consistencia visual entre las diferentes secciones de la interfaz.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 C. Contraste y accesibilidad (WCAG)

      p.mb-4 Considera relaciones de contraste entre el texto y el fondo que favorezcan la legibilidad y permitan que la información pueda ser percibida por usuarios con diferentes capacidades visuales. Como referencia, se establecen relaciones mínimas de 4.5:1 para texto normal y 3:1 para texto grande, de acuerdo con los criterios de accesibilidad aplicables. El contraste también permite diferenciar componentes de la interfaz y facilitar la identificación visual de información relevante, evitando combinaciones de colores que dificulten su percepción o comprensión.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 D. Espaciado y alineación (<em>grid system</em>)
      
      .row.justify-content-center
        .col-lg-12.col-12
          .row.align-items-stretch.justify-content-center.g-3.recurso-dod-comparacion
            .col-lg-9.col-12
              .recurso-dod-comparacion__texto
                p.mb-0 El uso de retículas y módulos de espaciado permite organizar los componentes de manera consistente y mantener relaciones visuales uniformes entre márgenes, rellenos (<em>padding</em>) y alineaciones. Una distribución adecuada de los espacios facilita la separación y agrupación visual de los contenidos, evita la saturación de la interfaz y contribuye a establecer un orden claro entre sus elementos. Asimismo, favorece la adaptación de la composición a diferentes tamaños de pantalla, manteniendo la coherencia del diseño.

            .col-lg-3.col-md-6.col-10
              .recurso-dod-comparacion__imagen
                figure.mb-0
                  img(src='@/assets/curso/t4/img-12.svg', alt='')

      Separador

      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.5 Licencias para el uso y publicación de recursos

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.svg-podcast-console
          figure
            img(src='@/assets/curso/t4/img-13.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C06.color-primario1.p-4.mb-4
            p.mb-0(data-aos="fade-down") El uso y publicación de recursos digitales, como imágenes, código, fuentes tipográficas, audios e ilustraciones, está sujeto a condiciones de propiedad intelectual y a diferentes tipos de licencias. Estas determinan las posibilidades de usar, copiar, modificar, distribuir o incorporar un recurso dentro de una aplicación <em>web</em>, así como las obligaciones que debe cumplir quien lo utiliza.
          p Por esta razón, antes de integrar recursos creados por terceros es necesario identificar la licencia aplicable y verificar sus condiciones de uso, especialmente en aspectos relacionados con la atribución, la modificación, la redistribución y el uso comercial. La siguiente tabla presenta algunas de las licencias utilizadas en recursos digitales y de código, junto con sus principales permisos, restricciones y ejemplos de aplicación:

      .row.justify-content-center(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 8.
            span Matriz de licencias estándar para recursos digitales en la <em>web</em>
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Tipo de licencia
                  th(data-aos="fade-down")(style= "width: 25%") Permisos principales
                  th(data-aos="fade-down")(style= "width: 25%") Restricciones / obligaciones
                  th(data-aos="fade-down")(style= "width: 25%") Ejemplo de uso
              tbody
                tr
                  td(data-aos="fade-down") #[b CC0.]
                  td(data-aos="fade-down") Copiar, modificar, distribuir y usar comercialmente sin costo.
                  td(data-aos="fade-down") Ninguna: se renuncia explícitamente a los derechos de autor.
                  td(data-aos="fade-down") Recursos publicados expresamente bajo CC0.
                tr
                  td(data-aos="fade-down") #[b Creative Commons (CC BY).]
                  td(data-aos="fade-down") Uso libre para fines comerciales y no comerciales.
                  td(data-aos="fade-down") Requisito de Atribución: se debe citar obligatoriamente al autor original.
                  td(data-aos="fade-down") Fotografías, ilustraciones y otros recursos publicados bajo CC BY.
                tr
                  td(data-aos="fade-down") #[b CC BY-NC.]
                  td(data-aos="fade-down") Uso libre para modificaciones y distribución.
                  td(data-aos="fade-down") No Comercial: prohibido su uso en productos que generen ingresos.
                  td(data-aos="fade-down") Recursos educativos o de investigación publicados bajo esta licencia.
                tr
                  td(data-aos="fade-down") #[b CC BY-SA.]
                  td(data-aos="fade-down") Uso y modificación libres.
                  td(data-aos="fade-down") Compartir Igual: las obras derivadas deben publicarse bajo la misma licencia.
                  td(data-aos="fade-down") Contenidos y recursos abiertos publicados bajo CC BY-SA (Wikipedia).
                tr
                  td(data-aos="fade-down") #[b Licencia MIT (código).]
                  td(data-aos="fade-down") Uso, copia, modificación, fusión y venta del código.
                  td(data-aos="fade-down") Incluir: aviso de <em>copyright</em> y la exención de responsabilidad original.
                  td(data-aos="fade-down") Librerías y proyectos de código abierto distribuidos bajo licencia MIT (React).
                tr
                  td(data-aos="fade-down") #[b Licencia GNU GPL v3.]
                  td(data-aos="fade-down") Uso y modificación libre del código fuente.
                  td(data-aos="fade-down") Copyleft: si se distribuye una versión derivada, debe mantenerse la licencia GPL v3 y facilitarse el código fuente correspondiente.
                  td(data-aos="fade-down") <em>Software</em> y proyectos distribuidos bajo GNU GPL v3 (WordPress).

      Separador

      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.6 Configuración y administración de bases de datos de contenido <em>web</em>

      p El contenido <em>web</em> dinámico requiere mecanismos que permitan almacenar, consultar, actualizar y recuperar información de manera eficiente. Para ello, las aplicaciones pueden utilizar motores de bases de datos relacionales o no relacionales, cuya selección depende de aspectos como la estructura de los datos, los requerimientos de consistencia y las necesidades de la aplicación.
      p.mb-4 En una arquitectura <em>web</em>, la base de datos se integra generalmente con los servicios del <em>backend</em>, encargados de procesar las solicitudes y gestionar el acceso a la información. El siguiente esquema representa de manera simplificada esta interacción entre el cliente, el servicio <em>backend</em> y la base de datos:

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
                  | [ Cliente / <em>web</em> ] ◄── HTTP / JSON ──► [ Servicio <em>backend</em> / ORM ] ◄── SQL / NoSQL ──► [ Base de datos ]

      p.mb-4 Para gestionar el contenido almacenado, pueden emplearse diferentes tipos de bases de datos y herramientas de acceso a la información, de acuerdo con las características y necesidades de cada aplicación:

      TabsC.color-acento-botones.mb-4
        .py-3.py-md-4(titulo="Bases de datos relacionales (SQL)")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t4/img-14.png', alt='')
            .col-md-7
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Motores comunes: PostgreSQL, MySQL y MariaDB. 
                li.mb-0 
                  i.lista-ul__vineta
                  | Estructura: esquemas organizados en tablas, filas y columnas relacionadas mediante claves primarias (PK) y foráneas (FK). 
                li.mb-0 
                  i.lista-ul__vineta
                  | Caso de uso: sistemas que requieren alta consistencia transaccional y cumplimiento de propiedades ACID, como plataformas de comercio electrónico o aplicaciones financieras. 

        .py-3.py-md-4(titulo="Bases de datos no relacionales (NoSQL)")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t4/img-15.png', alt='')
            .col-md-7
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Motores comunes: MongoDB, CouchDB y Firebase Firestore. 
                li.mb-0 
                  i.lista-ul__vineta
                  | Estructura: modelos flexibles que pueden organizar la información mediante documentos, pares clave-valor u otras estructuras, según el tipo de base de datos utilizado. 
                  i.lista-ul__vineta
                  | Caso de uso: gestores de contenido (CMS), <em>blogs</em>, redes sociales y aplicaciones que manejan grandes volúmenes de información con estructuras variables. 

        .py-3.py-md-4(titulo="Mapeo objeto-relacional (ORM) y mapeo objeto-documento (ODM)")
          .row
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/t4/img-16.png', alt='')
            .col-md-7
              ul.lista-ul.mb-0
                li.mb-0 
                  i.lista-ul__vineta
                  | Herramientas comunes: Prisma, Sequelize, Mongoose y Entity Framework.
                li.mb-0 
                  i.lista-ul__vineta
                  | Estructura: utilizan objetos y modelos definidos en el código de la aplicación para representar y gestionar los datos almacenados, facilitando la interacción con la base de datos.
                  i.lista-ul__vineta
                  | Caso de uso: aplicaciones que requieren gestionar operaciones de consulta, inserción, actualización y eliminación de datos desde el código, reduciendo la necesidad de trabajar directamente con instrucciones específicas del motor de base de datos. 

      p.mb-4 La selección de estas tecnologías y su integración con los demás componentes de una aplicación forman parte de una arquitectura más amplia de gestión de contenido. La siguiente figura sintetiza esta relación al mostrar la interacción entre la persistencia de datos, el procesamiento realizado en el <em>backend</em>, la distribución de recursos estáticos y la presentación del contenido en el navegador:

      .row.BG01.justify-content-center.px-md-5.px-4.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Ecosistema de gestión, procesamiento y distribución de contenido <em>web</em> estático y dinámico
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/t4/figura-1-1.svg', alt='Figura 3 que representa en un esquema el ecosistema de gestión y distribución de contenido <em>web</em>. Muestra la interacción entre la base de datos para la persistencia de la información, el servidor backend encargado del procesamiento, la red CDN para la distribución de recursos estáticos y el navegador del cliente, donde se presenta el contenido al usuario.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/t4/figura-1-2.svg', alt='Figura 3 que representa en un esquema el ecosistema de gestión y distribución de contenido <em>web</em>. Muestra la interacción entre la base de datos para la persistencia de la información, el servidor backend encargado del procesamiento, la red CDN para la distribución de recursos estáticos y el navegador del cliente, donde se presenta el contenido al usuario.')

</template>

<script>
export default {
  name: 'Tema4',
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
