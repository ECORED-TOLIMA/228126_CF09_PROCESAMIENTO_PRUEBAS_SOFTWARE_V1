<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La construcción de aplicaciones <em>web</em> integra conocimientos de desarrollo de <em>software</em>, prototipado, gestión de contenidos, seguridad y aseguramiento de la calidad. Este componente formativo aborda el ciclo de vida del <em>software</em> y las metodologías de desarrollo, así como la elaboración de <em>sketches, wireframes, mockups y wireflows.</em>
    p.mb-4 Además, comprende la gestión de contenidos multimedia y licencias, la configuración de bases de datos, los protocolos de comunicación y seguridad, así como las técnicas de diseño y maquetación <em>web</em>. Finalmente, incorpora el diseño de planes de pruebas, los criterios de aceptación y conceptos como Definition of Ready y Definition of Done, orientados a la construcción de soluciones confiables y acordes con los requerimientos establecidos.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se ilustra un mapa conceptual donde se presenta la articulación de los contenidos abordados en el componente formativo, desde las pruebas y el prototipado de aplicaciones hasta el desarrollo de software y la construcción de soluciones web. Se integran aspectos relacionados con criterios de aceptación, metodologías de desarrollo, gestión de contenidos, bases de datos, protocolos, seguridad, maquetación y parámetros de visualización, permitiendo comprender la relación entre los conceptos desarrollados.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
