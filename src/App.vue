<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.boton *, .boton--sm *
  color: white !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: inherit !important
@keyframes float
  0%
    transform: matrix3d(1.01, 0, 0, 0, 0, 1.06, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1.01)
  50%
    transform: matrix3d(1.03, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1.03)
  75%
    transform: matrix3d(1.04, 0, 0, 0, 0, 1.07, 0, 0, 0, 0, 1.04, 0, 0, 0, 0, 1.04)
  100%
    transform: matrix3d(1.01, 0, 0, 0, 0, 1.06, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1.01)
.banner-principal__img img
  filter: drop-shadow(12px 15px 15px rgba(0,0,0,0.25))
  animation: float 6s ease-in-out infinite
  transform: matrix3d(1.01, 0, 0, 0, 0, 1.06, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1.01)
.curso-main-container > .container
  overflow-x: unset !important
.titulo-segundo:after
  border-left: solid 50px #8C6DF2 !important
.titulo-principal__numero
  background-color: #5038A1 !important
@media (max-width: 1000px)
  .slyder-d__content
    position: relative !important
    transform: translateY(0px) !important
  .horizontal-scroll__wrapper
    height: auto !important
.horizontal-scroll__wrapper
  height: 56pc
.slyder-d__content
  transform: translateY(220px)
</style>
