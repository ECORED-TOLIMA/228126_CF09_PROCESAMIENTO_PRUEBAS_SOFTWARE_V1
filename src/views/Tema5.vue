<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Diseño y desarrollo <em>web</em>

      p El diseño y desarrollo <em>web</em> comprende el conjunto de disciplinas, protocolos de comunicación, arquitecturas de <em>software</em>, estándares visuales y técnicas de maquetación requeridas para la construcción de plataformas, portales y aplicaciones <em>web</em> modernas. Esta área integra la lógica del lado del servidor (<em>backend</em>), la representación e interactividad del lado del cliente (<em>frontend</em>) y la infraestructura de transmisión segura de datos a través de la red global de internet.

      Separador

      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Procedimientos y protocolos de diseño y desarrollo <em>web</em>
      
      .row.justify-content-center.mb-4.recurso-prototipado
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          figure.mb-0.recurso-prototipado__img
            img(src='@/assets/curso/t5/img-01.png', alt='')

        .col-lg-8.col-12
          .recurso-prototipado__cajon
            figure.mb-3.recurso-prototipado__icono
              img(src='@/assets/curso/t5/img-02.svg', alt='')

            p.mb-0 La <em>web</em> opera principalmente sobre un modelo cliente-servidor, en el que diferentes protocolos y estándares permiten establecer la comunicación, transmitir información y acceder a recursos a través de la red. En este modelo, el cliente realiza solicitudes al servidor y este procesa las peticiones y devuelve las respuestas correspondientes. El siguiente esquema representa de manera simplificada este intercambio:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.recurso-terminal-sdlc__code--centrado.
                [ Cliente / <em>browser</em> ] ─── Petición HTTP / HTTPS (GET, POST, PUT, DELETE) ───► [ Servidor <em>web</em> ]
                ◄── Respuesta HTTP (Status 200, 404, 500 + Payload) ───

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Protocolos de comunicación fundamentales

      p.mb-4 La comunicación entre clientes, servidores y otros componentes de la red se apoya en diferentes protocolos y sistemas, cada uno con una función específica. Entre los principales se encuentran los siguientes:

      .row.justify-content-center.mb-4(data-aos="fade-left")
        .col-lg-10(data-aos="fade-right")
          ImagenInfografica.color-acento-botones.desktop
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t5/img-03.svg', alt='')
            .tarjeta.tarjeta--blanca.p-3(x="18%" y="36%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Protocolo de la capa de aplicación utilizado para la transferencia de recursos y datos en la <em>web</em>. Funciona mediante un esquema de petición y respuesta (<em>request / response</em>).
            .tarjeta.tarjeta--blanca.p-3(x="83%" y="36%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Versión segura de HTTP que utiliza TLS (Transport Layer Security) para proteger la comunicación y contribuir a garantizar la confidencialidad, integridad y autenticidad de los datos transmitidos.
            .tarjeta.tarjeta--blanca.p-3(x="18%" y="82%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Conjunto de protocolos fundamentales para la comunicación en redes, que intervienen en la transmisión y el direccionamiento de la información entre los dispositivos conectados.
            .tarjeta.tarjeta--blanca.p-3(x="83%" y="82%" numero="+")(style="background-color:#FFDE92")
              p.mb-0 Sistema jerárquico de resolución de nombres que permite asociar nombres de dominio legibles por las personas, como www.sena.edu.co, con las direcciones IP correspondientes.
          figure.movil
            img(src='@/assets/curso/t5/img-04.svg', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Métodos y códigos de estado HTTP

      p.mb-4 Para la construcción de servicios <em>web</em> e interfaces de programación de aplicaciones (API), se utilizan métodos HTTP estandarizados para indicar las operaciones que se realizarán sobre los recursos. Las respuestas del servidor incluyen códigos de estado que informan el resultado de la solicitud. La siguiente tabla presenta algunos de los métodos y códigos más utilizados:

      .row.justify-content-center(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 9.
            span Métodos HTTP y códigos de estado estándar en el desarrollo <em>web</em>
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Método / categoría
                  th(data-aos="fade-down")(style= "width: 25%") Acción principal
                  th(data-aos="fade-down")(style= "width: 25%") Código de estado común
                  th(data-aos="fade-down")(style= "width: 25%") Significado
              tbody
                tr
                  td(data-aos="fade-down") #[b GET.]
                  td(data-aos="fade-down") Consultar o recuperar un recurso sin modificarlo.
                  td(data-aos="fade-down") 200 OK.
                  td(data-aos="fade-down") Solicitud procesada exitosamente.
                tr
                  td(data-aos="fade-down") #[b POST.]
                  td(data-aos="fade-down") Enviar datos para crear un nuevo recurso en el servidor.
                  td(data-aos="fade-down") 201 Created.
                  td(data-aos="fade-down") Recurso creado con éxito.
                tr
                  td(data-aos="fade-down") #[b PUT.]
                  td(data-aos="fade-down") Actualizar completamente un recurso existente.
                  td(data-aos="fade-down") 200 OK / 204 No Content.
                  td(data-aos="fade-down") Actualización realizada correctamente.
                tr
                  td(data-aos="fade-down") #[b PATCH.]
                  td(data-aos="fade-down") Actualizar parcialmente un recurso existente.
                  td(data-aos="fade-down") 200 OK.
                  td(data-aos="fade-down") Modificación parcial procesada.
                tr
                  td(data-aos="fade-down") #[b DELETE.]
                  td(data-aos="fade-down") Eliminar un recurso del servidor.
                  td(data-aos="fade-down") 200 OK / 204 No Content.
                  td(data-aos="fade-down") Eliminación procesada correctamente.
                tr
                  td(data-aos="fade-down") #[b Error del cliente.]
                  td(data-aos="fade-down") Indica un problema relacionado con la solicitud enviada.
                  td(data-aos="fade-down") 400 Bad Request / 401 Unauthorized / 404 Not Found.
                  td(data-aos="fade-down") Solicitud incorrecta, ausencia de autenticación válida o recurso no encontrado.
                tr
                  td(data-aos="fade-down") #[b Error del servidor.]
                  td(data-aos="fade-down") Indica un problema ocurrido al procesar la solicitud en el servidor.
                  td(data-aos="fade-down") 500 Internal Server Error / 503 Service Unavailable.
                  td(data-aos="fade-down") Error interno o servicio temporalmente no disponible.

      Separador

      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.2 Técnicas de diseño y estructura visual

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .row.align-items-stretch.justify-content-center.g-3.recurso-dod-comparacion
            .col-lg-9.col-12
              .recurso-dod-comparacion__texto
                p.mb-0 La construcción visual de una aplicación <em>web</em> requiere una estructura que permita organizar el contenido, definir su presentación y establecer su comportamiento e interactividad. En este proceso, HTML5 proporciona la estructura y el contenido, CSS permite controlar la presentación visual y JavaScript incorpora comportamientos dinámicos e interacción con el usuario. A partir de esta integración pueden aplicarse diferentes técnicas para organizar los elementos de la interfaz y adaptar su presentación a distintos dispositivos.

            .col-lg-3.col-md-6.col-10
              .recurso-dod-comparacion__imagen
                figure.mb-0
                  img(src='@/assets/curso/t5/img-05.svg', alt='')

      p.mb-4 Entre las técnicas utilizadas para estructurar y distribuir visualmente los elementos de una interfaz <em>web</em> se encuentran las siguientes:

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 A. Modelo de caja CSS (CSS <em>box model</em>)

      p.mb-4 Cada elemento HTML se representa visualmente como una caja rectangular compuesta por áreas que determinan el espacio ocupado por el contenido y su relación con los demás elementos:

      .row.justify-content-center.mb-0.tarjetas-given-when(data-aos="flip-down")
        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t5/img-06.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t5/img-06-hover.svg", alt="")
            h5.text-center Contenido (<em>content</em>)
            p.mb-0 Área donde se presenta el texto, las imágenes u otros elementos.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t5/img-07.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t5/img-07-hover.svg", alt="")
            h5.text-center Relleno (<em>padding</em>)
            p.mb-0 Espacio entre el contenido y el borde.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t5/img-08.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t5/img-08-hover.svg", alt="")
            h5.text-center Borde (<em>border</em>)
            p.mb-0 Línea que rodea el contenido y el relleno.

        .col-xl-3.col-lg-6.col-md-6.col-12.mb-4
          .crd-given-when
            .crd-given-when__icono.mb-4
              figure.mb-0
                img.crd-given-when__img.crd-given-when__img--normal(src="@/assets/curso/t5/img-09.svg", alt="")
                img.crd-given-when__img.crd-given-when__img--hover(src="@/assets/curso/t5/img-09-hover.svg", alt="")
            h5.text-center Margen (<em>margin</em>)
            p.mb-0 Espacio exterior que separa la caja de los elementos vecinos.

      p.mb-4 El siguiente esquema representa la disposición de estas áreas, desde el margen exterior hasta el contenido ubicado en el centro del elemento:

      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.recurso-terminal-sdlc__code--centrado.
                +-----------------------------------+
                | MARGIN                            |
                |   +-----------------------------+ |
                |   | BORDER                      | |
                |   |   +-----------------------+ | |
                |   |   | PADDING               | | |
                |   |   |   +-----------------+ | | |
                |   |   |   | CONTENT         | | | |
                |   |   |   | (Texto/Imagen)  | | | |
                |   |   |   +-----------------+ | | |
                |   |   +-----------------------+ | |
                |   +-----------------------------+ |
                +-----------------------------------+

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 B. Diseño <em>web</em> adaptable

      .row.justify-content-center
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.svg-podcast-console
          figure
            img(src='@/assets/curso/t5/img-10.png', alt='')
        .col.col-lg-9.col-12.order-lg-2.order-2
          .row.mb-0
            p Técnica de diseño que permite adaptar la distribución y presentación de una interfaz a diferentes tamaños y características de pantalla. Su implementación combina recursos que permiten dimensionar los elementos de manera flexible y modificar su disposición según el dispositivo. Entre sus principales componentes se encuentran:
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Cuadrículas fluidas: empleo de unidades relativas, como %, vw, rem y ch, que permiten establecer dimensiones flexibles en lugar de depender exclusivamente de valores fijos en píxeles (px).
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Imágenes flexibles: aplicación de reglas CSS, como <em>max-width</em>: 100 %, para que las imágenes puedan ajustarse al espacio disponible y evitar desbordamientos dentro de su contenedor.
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Consultas de medios: permiten aplicar reglas de estilo de acuerdo con determinadas características del dispositivo o de la ventana de visualización. Pueden utilizar puntos de interrupción (<em>breakpoints</em>) para modificar la distribución de los elementos según el ancho, la orientación u otras condiciones definidas.

      Separador

      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Protocolos de seguridad de la información

      .row.align-items-center.justify-content-center.mb-4
        .col-lg-12
          .row.justify-content-center
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-center.bg-1.recurso-elementos-prueba(data-aos="fade-right")
                .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0
                    img(src='@/assets/curso/t5/img-11.svg', alt='')
                .col-lg
                  p.mb-0 La seguridad constituye un principio fundamental en el desarrollo de aplicaciones <em>web</em> y debe considerarse desde las etapas iniciales del diseño y la implementación (<em>security by design</em>). Las aplicaciones pueden estar expuestas a diferentes vulnerabilidades y ataques orientados al acceso no autorizado, la manipulación de información, el compromiso de sesiones o la afectación de la disponibilidad de los servicios. Por esta razón, es necesario incorporar medidas preventivas y mecanismos de protección durante todo el proceso de desarrollo.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Vulnerabilidades comunes en aplicaciones <em>web</em>
      
      p.mb-4 Entre las vulnerabilidades que pueden afectar a una aplicación se encuentran:

      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--C01")
            .row(titulo="Inyección SQL (SQLi)")
              .col-12.mb-0.mb-md-0
                p.mb-0 Ocurre cuando datos de entrada no controlados se incorporan de manera insegura en consultas SQL, permitiendo que un atacante altere su comportamiento y pueda acceder o manipular información de la base de datos. Para reducir este riesgo se emplean mecanismos como las consultas parametrizadas o preparadas (<em>prepared statements</em>) y prácticas seguras de acceso a datos mediante herramientas ORM.

            .row(titulo="Cross-Site Scripting (XSS)")
              .col-12.mb-0.mb-md-0
                p.mb-0 Consiste en la introducción de contenido o <em>scripts</em> maliciosos que posteriormente pueden ejecutarse en el navegador de otros usuarios. Este tipo de ataque puede comprometer información o acciones asociadas a la sesión. Su prevención requiere aplicar medidas como la codificación adecuada de las salidas según el contexto, el tratamiento seguro de los datos ingresados y políticas como Content Security Policy (CSP)
              
            .row(titulo="Falsificación de solicitudes entre sitios (Cross-Site Request Forgery – CSRF)")
              .col-12.mb-0.mb-md-0
                p.mb-0 Busca aprovechar una sesión autenticada para provocar que el navegador del usuario envíe una solicitud no deseada a una aplicación. Entre las medidas de protección pueden utilizarse tokens anti-CSRF, una configuración apropiada del atributo #[b SameSite] de las <em>cookies</em> y otras validaciones asociadas a las solicitudes.

        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t5/img-12.png', alt='')

      p.mb-4 Además de las medidas específicas para prevenir estas vulnerabilidades, las aplicaciones <em>web</em> requieren mecanismos de seguridad que protejan las comunicaciones, la autenticación, las sesiones y la interacción entre diferentes orígenes. La siguiente tabla presenta algunos de estos mecanismos, su función principal y ejemplos de implementación técnica:

      .row.justify-content-center(data-aos="fade-left")
        .col.col-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 10.
            span Mecanismos e infraestructura de seguridad en el desarrollo <em>web</em>
          .tabla-a.color-acento-contenido.tabla-metodologias
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 25%") Mecanismo de seguridad
                  th(data-aos="fade-down")(style= "width: 25%") Función principal
                  th(data-aos="fade-down")(style= "width: 25%") Implementación técnica
              tbody
                tr
                  td(data-aos="fade-down") #[b Certificados TLS.]
                  td(data-aos="fade-down") Proteger la comunicación entre el cliente y el servidor mediante cifrado y autenticación del servidor.
                  td(data-aos="fade-down") Uso de HTTPS mediante certificados digitales emitidos por autoridades de certificación (CA) o mecanismos de confianza equivalentes.
                tr
                  td(data-aos="fade-down") #[b Autenticación basada en #[em tokens].]
                  td(data-aos="fade-down") Permitir la autenticación y autorización mediante credenciales o <em>tokens</em> utilizados por la aplicación.
                  td(data-aos="fade-down") Uso de mecanismos como JSON <em>Web</em> Tokens (JWT) y estándares o protocolos como OAuth 2.0 / OpenID Connect, según los requerimientos de la aplicación.
                tr
                  td(data-aos="fade-down") #[b Encabezados de seguridad HTTP.]
                  td(data-aos="fade-down") Establecer políticas de seguridad que el navegador debe aplicar al procesar los recursos de la aplicación.
                  td(data-aos="fade-down") Encabezados como Strict-Transport-Security (HSTS), X-Frame-Options y X-Content-Type-Options.
                tr
                  td(data-aos="fade-down") #[b CORS (Cross-Origin Resource Sharing).]
                  td(data-aos="fade-down") Controlar qué orígenes pueden acceder a determinados recursos del servidor desde el navegador.
                  td(data-aos="fade-down") Configuración de encabezados CORS, como Access-Control-Allow-Origin, de acuerdo con los orígenes autorizados.

      Separador

      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.4 Técnicas de maquetación

      p La maquetación <em>web</em> permite organizar y distribuir los elementos de una interfaz para establecer su posición, alineación y relación dentro de la página. CSS proporciona diferentes mecanismos para construir estas estructuras, entre los que destacan Flexbox y CSS Grid, utilizados para controlar la disposición de los componentes de acuerdo con las necesidades del diseño.
      p.mb-4 Aunque ambos permiten organizar elementos, se diferencian principalmente por la forma en que gestionan su distribución. El siguiente esquema representa de manera simplificada esta diferencia: Flexbox trabaja principalmente sobre un eje, mientras que CSS Grid permite organizar elementos mediante filas y columnas:

      .row.justify-content-center.mb-4
        .col-lg-10.col-12
          .recurso-terminal-sdlc.recurso-terminal-sdlc--escenarios
            .recurso-terminal-sdlc__header
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--morado
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--azul
              span.recurso-terminal-sdlc__circle.recurso-terminal-sdlc__circle--amarillo

            .recurso-terminal-sdlc__body
              pre.recurso-terminal-sdlc__code.recurso-terminal-sdlc__code--centrado.
                FLAT LAYOUT (Flexbox - 1D)

                +-------------+
                | 1 | 2 | 3 |  (Fila única)
                +-------------+


                GRID LAYOUT (CSS Grid - 2D)

                +------+------+
                | 1.1  | 1.2  | 1.3 |
                +------+------+
                | 2.1  | 2.2  | 2.3 |
                +------+------+

      p.mb-4 A partir de esta diferencia, cada técnica ofrece características y propiedades específicas para controlar la disposición de los elementos:
      
      .row.justify-content-center
        .col-lg-10.col-12
          .recurso-pruebas-funcionales
            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t5/img-13.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 Flexible box <em>layout</em>
                ul.lista-ul.mb-0
                  li.mb-0 
                    i.lista-ul__vineta
                    | Orientación: unidimensional, ya que permite organizar los elementos principalmente a lo largo de un eje, como una fila o una columna.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Fortalezas: facilita la alineación, la distribución dinámica del espacio y la organización de componentes como barras de navegación, listas de tarjetas y grupos de botones.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Las propiedades clave incluyen <em>display: flex, justify-content, align-items, flex-direction y flex-wrap.</em>

            .recurso-pruebas-funcionales__item
              .recurso-pruebas-funcionales__icono
                img(src='@/assets/curso/t5/img-14.svg', alt='')
              .recurso-pruebas-funcionales__contenido
                h4 CSS grid <em>layout</em>
                ul.lista-ul.mb-0
                  li.mb-0 
                    i.lista-ul__vineta
                    | Orientación: bidimensional, ya que permite organizar los elementos mediante filas y columnas.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Fortalezas: facilita la construcción de estructuras de página y distribuciones que requieren controlar simultáneamente ambas dimensiones, como encabezados, barras laterales, áreas de contenido y pies de página.
                  li.mb-0 
                    i.lista-ul__vineta
                    | Las propiedades clave incluyen <em>display: grid, grid-template-columns, grid-template-rows, gap y grid-area.</em>

      Separador

      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.5 Parámetros de visualización

      p.mb-4 Los parámetros de visualización permiten evaluar aspectos relacionados con la presentación, el rendimiento y la experiencia del usuario durante la carga e interacción con una aplicación <em>web</em>. Su análisis facilita la identificación de elementos que pueden afectar la velocidad de visualización, la capacidad de respuesta y la estabilidad del contenido en el navegador.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Indicadores clave de rendimiento <em>web</em> (Core Web Vitals de Google)
      
      p.mb-4 Los Core Web Vitals permiten evaluar aspectos de la experiencia del usuario mediante métricas relacionadas con la carga, la capacidad de respuesta y la estabilidad visual. Entre las principales se encuentran:

      .row.justify-content-center
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            .cajon.cajon.C04.color-primario1.px-4.py-4.mb-4
              ul.recurso-pruebas-no-funcionales__lista
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Largest Contentful Paint (LCP). Mide el tiempo que tarda en renderizarse el elemento de contenido más grande visible en la ventana gráfica, como una imagen o un bloque de texto principal. Un valor adecuado corresponde a 2,5 segundos o menos. 
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                      | Interaction to Next Paint (INP). Mide la capacidad de respuesta de una página ante las interacciones del usuario, como clics, toques de pantalla o entradas mediante el teclado. Un valor adecuado corresponde a 200 milisegundos o menos. 
                li
                  i.fas.fa-file-code
                  .recurso-pruebas-no-funcionales__texto
                    p.mb-0 
                    | Cumulative Layout Shift (CLS). Mide la estabilidad visual de la página a partir de los cambios inesperados en la posición de los elementos durante su uso. Un valor adecuado corresponde a 0,1 o menos.

        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/t5/img-15.svg', alt='')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Optimización del renderizado en el navegador
      
      p.mb-4 Para favorecer el rendimiento de una aplicación <em>web</em>, pueden aplicarse técnicas orientadas a reducir el tamaño de los recursos y facilitar la presentación inicial del contenido. Entre ellas se encuentran:

      .row.BG01.justify-content-center.px-md-5.px-4.mb-4(data-aos="fade-left")
        .col.col-lg-10.col-12
          .tarjeta--container.row
            .col-lg.tarjeta.color-secundario.rosa.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t5/img-16.svg', alt='')          
              h3.text-center Minificación y agrupación (<em>bundling</em>)
              p.mb-0.parrafo La minificación reduce el tamaño de archivos .js y .css mediante la eliminación o transformación de elementos innecesarios para su ejecución, mientras que la agrupación permite organizar los recursos generados durante el proceso de construcción de la aplicación. Estas tareas pueden gestionarse mediante herramientas como Vite, <em>Web</em>pack o Turbopack. 

            .col-lg.tarjeta.color-acento-botones.azul.p-5 
              .row.justify-content-center.mb-4
                .col-5
                  figure
                    img(src='@/assets/curso/t5/img-17.svg', alt='')          
              h3.text-center CSS crítico (<em>critical</em> CSS)
              p.mb-0.parrafo Consiste en priorizar los estilos necesarios para presentar el contenido inicialmente visible, reduciendo la dependencia de la descarga y procesamiento de hojas de estilo completas antes de mostrar esa parte de la página.

      p.mb-4 Los aspectos relacionados con el rendimiento y el renderizado se integran con otros componentes técnicos que intervienen en la construcción de una aplicación <em>web</em>. La siguiente figura sintetiza esta relación mediante una arquitectura por capas que articula la estructura semántica, la maquetación responsiva, la lógica y seguridad, y el renderizado y rendimiento de la interfaz:

      .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Arquitectura integrada del proceso de diseño, maquetación, seguridad y renderizado <em>web</em>
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/t5/figura-1-1.svg', alt='Figura 4 que ilustra la arquitectura de diseño y desarrollo <em>web</em>, mostrando la integración entre la estructura semántica en HTML5, la maquetación responsiva con CSS3 mediante Flexbox y Grid, la lógica interactiva en JavaScript, la comunicación segura mediante HTTPS y el renderizado final evaluado mediante las métricas Core <em>Web</em> Vitals.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/t5/figura-1-2.svg', alt='Figura 4 que ilustra la arquitectura de diseño y desarrollo <em>web</em>, mostrando la integración entre la estructura semántica en HTML5, la maquetación responsiva con CSS3 mediante Flexbox y Grid, la lógica interactiva en JavaScript, la comunicación segura mediante HTTPS y el renderizado final evaluado mediante las métricas Core <em>Web</em> Vitals.')

</template>

<script>
export default {
  name: 'Tema5',
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
