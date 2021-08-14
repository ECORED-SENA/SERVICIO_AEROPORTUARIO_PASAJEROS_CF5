<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-0(data-aos="fade-up") Para la mayoría de los operadores de aeropuertos y aerolíneas del mundo la orientación y acompañamiento al cliente es un factor de diferenciación, si se tiene en cuenta que todas las compañías aéreas han entrado en la era de la certificación de sus procesos, aunque hay avances en el mejoramiento de la infraestructura, esos cambios deben ir acompañados del propósito de elevar los estándares de servicio para mejorar la percepción del cliente frente a sus expectativas.

    p(data-aos="fade-up") El cliente es la razón de ser de la mayoría de las organizaciones, por tanto, identificar de manera precisa sus necesidades y orientarlo en la toma de decisiones contribuye con los propósitos estratégicos de las compañías aéreas.

    h3.mt-5(data-aos="fade-up") Aeropuerto Internacional Suvarnabhumi en Bangkok.

    p(data-aos="fade-up") Este aeropuerto tiene la torre de control más alta del mundo y es la tercera terminal más grande del planeta.

    p.mt-5(data-aos="fade-up" style="padding:4px 4px 0px 14px;border-left:5px #8C6DF2 solid;") #[strong Figura 1]  Aeropuerto Suvarnabhumi

    figure.mt-5.caja_imagen_1
      img.image_floating(src="@/assets/curso/introduccion/1.svg" data-aos="fade-up")

    figcaption.mt-5.col-md-3(data-aos="fade-up") Nota. Tomada de  https://pixabay.com






</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {},
}
</script>
<style lang="sass">
.image_floating
  filter: drop-shadow(10px 5px 4px rgba(0,0,0,.1))
@keyframes float
  0%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
  50%
    filter: drop-shadow(26px 9px 1px rgba(0, 0, 0, 0.09))
    transform: translatey(-20px)
  100%
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
    transform: translatey(0px)
.imagen_flotante_animada
  filter: drop-shadow(0 5px 15px rgba(0,0,0,0.2))
  transform: translatey(0px)
  animation: float 6s ease-in-out infinite
.caja_flotante
  -webkit-box-shadow: -11px 10px 0px -1px #f3f3f3
  -moz-box-shadow: -11px 10px 0px -1px #f3f3f3
  box-shadow: -11px 10px 0px -1px #f3f3f3
.caja_escalada_hover
  transition: transform 0.5s linear
  -o-transition: transform 0.5s linear
  -ms-transition: transform 0.5s linear
  -moz-transition: transform 0.5s linear
  -webkit-transition: transform 0.5s linear
.caja_escalada_hover:hover
  transition: transform .5s ease
  transform: scale(1.06)
.fade-in-image
  animation: fadeIn 3s
  -webkit-animation: fadeIn 3s
  -moz-animation: fadeIn 3s
  -o-animation: fadeIn 3s
  -ms-animation: fadeIn 3s
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
.tarjeta--azul
  background-color: #DBFBFF !important
.tarjeta-avatar-b > img
  min-width: 16%
  max-width: 16%
  top: -9%
.caja_flotante_azul
  box-shadow: -11px 10px 0px -1px #f1fcfd
.caja_flotante_rosada
  box-shadow: -11px 10px 0px -1px #fff6f6
.cajon.color-acento-botones
  background-color: #FFE7C4
.bloque-texto-a.color-secundario
  background-color: #F3F9FF !important
.title__tab_1 .pre
  background-color: #FFCA28
  padding: 1rem 1.5rem 1rem 1.5rem
  border-radius: 50%
  color: inherit
  font-weight: bold
  font-size: 1.3rem
  position: relative
  left: calc(100% - 147%)
  top: 2.3rem
.title__tab_1 .title
 background-color: #4DD0E1
 padding: 1rem 1rem 1rem 2rem
 border-radius: 30px
.title__tab_1
  transition: transform 0.4s linear
  -o-transition: transform 0.4s linear
  -ms-transition: transform 0.4s linear
  -moz-transition: transform 0.4s linear
  -webkit-transition: transform 0.4s linear
.title__tab_1:hover
  transition: transform .4s ease
  transform: scale(1.1)
.nav-link
  border: none !important
.nav-link.active .title__tab_1 .pre

.nav-link.active .title__tab_1 .title
  color: white
  background-color: #1565C0
.caja__mostrar
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
.caja__mostrar:hover
  transition: transform .5s linear
  -o-transition: transform .5s linear
  -ms-transition: transform .5s linear
  -moz-transition: transform .5s linear
  -webkit-transition: transform .5s linear
  transform: scale(1.04)
.bloque-texto-a.color-secundario:before
  background-color: #A9EBF4
.pasos-a.color-primario .pasos-a__circle
  background-color: #4DD0E1
.pasos-a.color-primario .pasos-a__circle div
  color: white
.pasos-a.color-primario .pasos-a__numero::after
  border-left-color: #4DD0E1
.pasos-a.color-primario .pasos-a__linea .hor-line
  border-top-color: #4dd0e1
.pasos-a.color-primario .pasos-a__linea__esquina__linea
  border-color: #4dd0e1
</style>
