<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/intro/img-01.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") En el panorama tecnológico actual, la construcción de aplicaciones <em>web</em> ha dejado de ser un proceso puramente artesanal de escritura de código para convertirse en una disciplina de ingeniería de <em>software</em> estructurada, multidisciplinaria y orientada a la calidad. La demanda de plataformas accesibles, seguras, escalables y altamente usables exige que los desarrolladores dominen no solo la sintaxis de lenguajes de programación o maquetación, sino también todo el flujo de trabajo que garantiza el éxito del producto digital.

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
        .bloque-texto-g__img.img-bg-01
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") Este componente formativo permite desarrollar las competencias necesarias para gestionar de manera sistemática cada etapa de la creación de aplicaciones <em>web</em>. Inicia con la comprensión del ciclo de vida del desarrollo de <em>software</em> y las metodologías ágiles que rigen la industria moderna. Posteriormente, se profundiza en la fase de experiencia e interfaz de usuario (UX / UI) mediante la elaboración de bocetos (<em>sketches</em>), esquemas de baja fidelidad (<em>wireframes</em>), maquetas de alta fidelidad (<em>mockups</em>) y flujos navegables (<em>wireflows</em>).

      .row.justify-content-center
        .col-lg-9.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            p Asimismo, se desarrollan competencias para administrar contenidos multimedia, manejar licencias de uso, configurar bases de datos para sistemas <em>web</em> y aplicar estándares de maquetación limpia y segura. Finalmente, se hace especial énfasis en la cultura del aseguramiento de la calidad (Quality Assurance - QA), mediante el diseño de planes de pruebas, la definición de criterios de aceptación claros y la adopción de conceptos fundamentales en marcos ágiles como la definición de listo (<em>definition of ready</em>) y la definición de hecho (<em>definition of done</em>), lo que contribuye a asegurar la entrega de <em>software</em> confiable y alineado con las necesidades del cliente.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/intro/img-03.svg', alt='')

      p.mb-4 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
      
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/olXGxMZ8Q-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
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
