<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Aeropuertos y clasificación

    .bloque-texto-a.color-primario.p-4.p-md-5.caja_flotante
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.imagen_flotante_animada(src="@/assets/curso/tema1/1.svg")
        .col-lg-8
          .bloque-texto-a__texto.p-5(style="background-color:rgba(255,255,255,0.9);")
            p(data-aos="fade-up") Un aeropuerto, o terminal, es una extensión de tierra que contiene pistas, instalaciones de servicios orientados al tráfico de aviones. La principal función de un aeropuerto es permitir el despegue y el aterrizaje de aviones de pasajeros o de carga, además de ser el lugar para proveerles combustible y mantenimiento.
            p.mt-3(data-aos="fade-up") La torre de control es una de las áreas de mayor importancia en un aeropuerto, es aquí donde se encuentran los controladores del tráfico aéreo quienes tienen la gran responsabilidad de dirigir el movimiento de las aeronaves para evitar accidentes.

    p.mt-5(data-aos="fade-up") En la construcción de un aeropuerto están involucrados varios factores determinantes como las condiciones meteorológicas del sector, ya que este es un componente importante debido a que los vientos tienen gran influencia a la hora de despegar o aterrizar.

    p.mt-5(data-aos="fade-up" style="padding:4px 4px 0px 14px;border-left:5px #8C6DF2 solid;") #[strong Figura 2] Aeropuerto Internacional de Múnich-Franz Josef Strauss

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema1/2.svg" data-aos="fade-up")

    figcaption.mt-5.col-md-3(data-aos="fade-up") Nota. Tomada de  https://pixabay.com

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1 Conceptos y características

    p(data-aos="fade-up") Un aeropuerto, o también conocido como aeródromo, es una extensión de terreno destinado para el tráfico aéreo tanto de llegada como de salida de aeronaves, de vuelos comerciales, de carga o de correo, cuenta con unas características especiales y unos servicios particulares que lo hacen ser un aeropuerto de operación nacional o un aeropuerto internacional.

    h5.mt-4(data-aos="fade-up") Los componentes de un aeropuerto se clasifican en dos, a saber:

    .row.mt-5
      .col-md-4.p-0
        figure
          img.image_floating(src="@/assets/curso/tema1/3.svg" data-aos="fade-left")
      .col-md-8.p-0
        .p-5.caja_flotante_rosada(style="background-color:#FFEFBF;height:100%;" data-aos="fade-right")
          h4(data-aos="fade-up") Lado aire
          p.mt-4(data-aos="fade-up") Hace referencia a todo lo relacionado con los procesos de la aeronave, pistas de despegue y aterrizaje, calles de rodaje, plataformas de parqueo, hangares de mantenimiento, plataformas de abordaje y desembarque de pasajeros y/o mercancía.

    .row.mt-3
      .col-md-4.p-0
        figure
          img.image_floating(src="@/assets/curso/tema1/4.svg" data-aos="fade-left")
      .col-md-8.p-0
        .p-5.caja_flotante(style="background-color:#E0D6FF;height:100%;" data-aos="fade-right")
          h4(data-aos="fade-up") Lado tierra
          p.mt-4(data-aos="fade-up") Está enfocado en los procesos en atención a pasajeros y todo lo que esto involucra, edificio de la operación aérea, bodegas, terminales de carga, entre otros.

    h5.mt-5(data-aos="fade-up") Los aeropuertos deben contar con ciertas características, a continuación se presentan:

    .row.mt-5
      .col-md-4.mb-4
        .p-3.caja_flotante_rosada.caja_escalada_hover(style="background-color:#FFEFBF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/5.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Pistas
            p.mt-4(data-aos="fade-up") Debe contar con pavimento que soporte vuelos de carga, márgenes a los costados, franja capaz de soportar fuego y aterrizajes forzados. Deben estar planificadas de acuerdo con el volumen de tráfico y la dirección de los vientos.

      .col-md-4.mb-4
        .p-3.caja_flotante.caja_escalada_hover(style="background-color:#E0D6FF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/6.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Zonas resistentes
            p.mt-4(data-aos="fade-up") Destinadas a prevenir la erosión que están expuestas a los riegos de reactores, pueden ser acondicionadas con pavimento o con zonas verdes.

      .col-md-4.mb-4
        .p-3.caja_flotante_rosada.caja_escalada_hover(style="background-color:#FFEFBF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/7.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Área de seguridad
            p.mt-4(data-aos="fade-up") Zona de seguridad, se utiliza para aterrizajes cortos y minimizar el riesgo de accidentes.

      .col-md-4.mb-4
        .p-3.caja_flotante.caja_escalada_hover(style="background-color:#E0D6FF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/8.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Torre de control
            p.mt-4(data-aos="fade-up") Desde aquí se dirige el tráfico aéreo, se controla el rodaje, aproximaciones de aeronaves, despegues y aterrizajes.

      .col-md-4.mb-4
        .p-3.caja_flotante_rosada.caja_escalada_hover(style="background-color:#FFEFBF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/9.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Eficacia
            p.mt-4(data-aos="fade-up") Debe permitir que las aeronaves tengan movimiento en el terminal sin afectar otras aeronaves o la estructura del mismo aeropuerto. Además, debe garantizar la correcta y organizada operación aérea, causar la menor cantidad de demoras en la operación diaria, disponer de calles de rodaje adecuadas para los procesos de despegue y aterrizaje.

      .col-md-4.mb-4
        .p-3.caja_flotante.caja_escalada_hover(style="background-color:#E0D6FF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/10.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Configuración
            p.mt-4(data-aos="fade-up") Las plataformas deben estar diseñadas teniendo en cuenta espacio para futuras ampliaciones de acuerdo con las proyecciones y estudios de demanda que se realizan previamente; además, se debe tener en cuenta el espacio para el parqueadero de aeronaves de todo tipo existente, sin causar alteraciones en la operación por su configuración y todo el espacio necesario para la asistencia en tierra que está involucrada en este proceso.

      .col-md-4.mb-4.m-auto
        .p-3.caja_flotante.caja_escalada_hover(style="background-color:#E0D6FF;border-radius:9px;height:100%;")
          figure
            img.image_floating(style="border-radius:9px;" src="@/assets/curso/tema1/11.svg" data-aos="fade-up")
          .p-4
            h4.mt-3(data-aos="fade-up") Edificio de operación
            p.mt-4(data-aos="fade-up") Debe contar con facilidades para la atención a pasajeros, debe garantizar, el proceso en áreas como de registro y entrega de equipajes (#[em Check in]), salas de abordaje, zona de alimentación, salubridad, migración, acceso para personas en condición de discapacidad, zonas para el manejo de equipajes (bandas de equipaje, procesos de seguridad, clasificación, conexiones).

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_2 1.2 Clasificación de aeropuertos

    p(data-aos="fade-up") La clasificación de aeropuertos se basa según el tipo de actividad que se desarrolle en él, entre los principales aeropuertos se tienen:

    SlyderD.mt-5(:datos="datosSlyder12")

    p.mt-5(data-aos="fade-up") Dentro de esta clasificación también se encuentran aeropuertos según el tipo de vuelos, dentro de estos se distinguen dos tipos que son los siguientes:

    .tarjeta-avatar-b.mt-5.col-md-11
      .tarjeta-avatar-b__img(style="place-content: center;")
        img.imagen_flotante_animada(src='@/assets/curso/tema1/17.svg' alt='' style="max-width:130px;display:inline;")
      .tarjeta.caja_flotante_rosada(style="background-color:#FFEFBF;border-radius:0px;")
        .p-4
          h3(data-aos="fade-up") Aeropuerto nacional
          p.mt-4(data-aos="fade-up") Su operación principal son los vuelos nacionales o domésticos, es decir, dentro del país, los aeropuertos nacionales carecen de oficinas de tráfico de pasajeros internacionales, por esta razón no reciben vuelos procedentes o con destino al exterior.

    .tarjeta-avatar-b.mt-3.col-md-11
      .tarjeta-avatar-b__img(style="place-content: center;")
        img.imagen_flotante_animada(src='@/assets/curso/tema1/18.svg' alt='' style="max-width:130px;display:inline;")
      .tarjeta.caja_flotante(style="background-color:#E0D6FF;border-radius:0px;")
        .p-4
          h3(data-aos="fade-up") Aeropuerto internacional
          p.mt-4(data-aos="fade-up") Estos aeropuertos en su mayoría tienen pistas grandes e instalaciones adecuadas para atender trayectos internacionales o intercontinentales. En algunos países se cuenta con una categoría de aeropuertos que presentan vuelos limitados a los destinos de corto alcance o son aeropuertos mixtos (civil y militar).

    br
    p.mt-5(data-aos="fade-up" style="padding:4px 4px 0px 14px;border-left:5px #8C6DF2 solid;") #[strong Figura 3] Aeronave

    figure.mt-5
      img.image_floating(src="@/assets/curso/tema1/19.svg" data-aos="fade-up")

    figcaption.mt-5.col-md-3(data-aos="fade-up") Nota. Tomada de  https://pixabay.com

    br
    br
    .titulo-segundo.mt-5
      h2#t_1_3 1.3  Operación aeroportuaria

    p(data-aos="fade-up") La operación aeroportuaria incluye aquellos servicios que se prestan tanto dentro como fuera de la plataforma, algunos son servicios de operadores directamente a las aeronaves o con ocasión del transporte aéreo, para desarrollar dicha operación se debe contar con los equipos y la infraestructura especializada.

    h5.mt-4(data-aos="fade-up") Según las regulaciones aeronáuticas que controlan este proceso los servicios especializados aeroportuarios se clasifican como:

    .row.mt-5.col-md-10.m-auto
      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/20.svg")
          .newsCaption(style="background-color:#8C6DF2")
            h4.newsCaption-title.text-white.text-center Servicios de rampa
            .newsCaption-content
              p.text-white.p-3 Personal que asiste a las aeronaves en tierra, encargados de procedimientos como embarque y desembarque de carga, equipajes, pasajeros y mensajería.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/21.svg")
          .newsCaption(style="background-color:#FFDC72")
            h4.newsCaption-title.text-center(style="color:#5038A1;") Suministro de combustible
            .newsCaption-content
              p.p-3(style="color:#12263F;") Encargados de realizar el abastecimiento de combustible siguiendo diversas normas técnicas para garantizar la seguridad de la aeronave, del aeropuerto, de la carga, de los operadores y usuarios.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/22.svg")
          .newsCaption(style="background-color:#8C6DF2;")
            h4.p-0.newsCaption-title.text-white.text-center Suministro de alimentos (#[em Catering])
            .newsCaption-content
              p.text-white.p-3 Encargados de proveer el servicio a bordo de las aeronaves, siempre cumpliendo normas sanitarias, de higiene y de protección del personal.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/23.svg")
          .newsCaption(style="background-color:#FFDC72;")
            h4.newsCaption-title.text-center.p-0(style="color:#5038A1;") Terminales de almacenamiento y de carga
            .newsCaption-content
              p.p-3(style="color:#12263F;") Zona de servicios para el manejo de mercancías, el cual debe contar con infraestructura especial, balanzas en buen estado, certificaciones de calibración; instalaciones señalizadas; certificaciones y áreas especiales para mercancías peligrosas, valores, animales vivos; así como contar con implementos de seguridad.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/24.svg")
          .newsCaption(style="background-color:#8C6DF2;")
            h4.p-0.newsCaption-title.text-white.text-center Equipos de apoyo terrestre en plataforma
            .newsCaption-content
              p.text-white.p-3 Aquí encontramos los servicios de limpieza y presentación de las aeronaves. Deberá contarse con los implementos mínimos de seguridad en forma permanente.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/25.svg")
          .newsCaption(style="background-color:#FFDC72;")
            h4.newsCaption-title.text-center.p-0(style="color:#5038A1;") Mantenimiento de aeronaves
            .newsCaption-content
              p.p-3(style="color:#12263F;") Encargados de los trabajos y servicios técnicos para mantener las aeronaves en condiciones aeronavegables.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/26.svg")
          .newsCaption(style="background-color:#8C6DF2;")
            h4.p-0.newsCaption-title.text-white.text-center Personal de atención a pasajeros
            .newsCaption-content
              p.text-white.p-3 Es el personal encargado de brindar a los pasajeros la atención requerida para llevar a cabo su proceso de viaje, en esta área encontramos personal en áreas como, ventas, registro o #[em Check in] de vuelos, salas de abordaje, conexiones, bandas de equipaje, salas VIP.

      .col-md-6.mb-4
        .newsCard.news-Slide-up.caja_flotante(data-aos="fade-up")
          figure
            img(src="@/assets/curso/tema1/27.svg")
          .newsCaption(style="background-color:#FFDC72;")
            h4.newsCaption-title.text-center.p-0(style="color:#5038A1;") Personal de vuelo
            .newsCaption-content
              p.p-3(style="color:#12263F;") Hace referencia al personal en la cabina de vuelo, específicamente se habla del comandante, copiloto, Ingenieros de vuelo, tripulantes de cabina de pasajeros, estos últimos son los encargados del servicio a bordo de pasajeros.

    br
    h3.mt-5(data-aos="fade-up") Operadores de servicios aeroportuarios

    p.mt-4(data-aos="fade-up") Son las personas naturales y/o jurídicas que prestan servicios aeroportuarios especializados. En tal sentido, se pueden considerar como operadores aeroportuarios a las aerolíneas, los agentes de carga internacional, los terminales de carga aérea, los terminales de almacenamiento, los operadores de los servicios indicados en los puntos precedentes, así como también a las empresas administradoras de los aeropuertos internacionales.
          
    p.mt-5(data-aos="fade-up" style="padding:4px 4px 0px 14px;border-left:5px #8C6DF2 solid;") #[strong Figura 4] Servicios aeroportuarios

    figure.mt-5.col-md-8.m-auto
      img.image_floating(src="@/assets/curso/tema1/28.svg" data-aos="fade-up")

    figcaption.mt-5.col-md-3(data-aos="fade-up") Nota. Tomada de  https://pixabay.com





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    datosSlyder12: [
      {
        titulo: 'Aeropuerto de aviación general',
        texto:
          'Son los vuelos que no contemplan los comerciales de pasajeros, hacen referencia a los planeadores, ultraligeros y paramotores, cargueros con operación ocasional.<br><br> También comprende los vuelos con finalidad deportiva, corporativa, taxis aéreos, ambulancias aéreas, vuelos de práctica de escuelas de aviación, agricultura, fotografía desde el aire, etc.',
        imagen: require('@/assets/curso/tema1/12.svg'),
      },
      {
        titulo: ' Aeropuerto de carga aérea',
        texto:
          'Son especializados para servicios en el manejo de mercancías en grandes cantidades, debe contar con facilidades como balanzas, certificaciones de calibración, instalaciones señalizadas, áreas especiales para el manejo de mercancías peligrosas, valores, animales vivos, también debe tener implementos de seguridad.',
        imagen: require('@/assets/curso/tema1/13.svg'),
      },
      {
        titulo: 'Aeropuerto comercial',
        texto:
          'Es la modalidad de la aviación dedicada al transporte comercial sin importar su cantidad, puede ser servicio tanto de transporte de pasajeros como de mensajería o carga de manera regular, es decir, con itinerario específico activo.',
        imagen: require('@/assets/curso/tema1/14.svg'),
      },
      {
        titulo: 'Aeropuerto regional',
        texto:
          'En este caso es un aeropuerto con tráfico no tan significativo o también puede ser por la zona geográfica donde está ubicado, normalmente en poblaciones pequeñas. En sus instalaciones no encontramos áreas de aduanas ni de inmigración que son requeridos para vuelos internacionales. Los aviones que regularmente se utilizan pueden ser pequeños, van desde los aviones ejecutivos, privados y aviones regionales tanto turbohélice como a reacción.',
        imagen: require('@/assets/curso/tema1/aeroregional.jpg'),
      },
      {
        titulo: 'Aeropuerto HUB',
        texto:
          'También conocido como centro de conexión, es una terminal aérea utilizada por una aerolínea como punto de enlace para conectar a todas sus rutas, en Colombia el ejemplo de aeropuerto HUB es Avianca con el Aeropuerto El Dorado, que es su punto de conexión para las distintas rutas nacionales e internacionales.',
        imagen: require('@/assets/curso/tema1/15.svg'),
      },
      {
        titulo: '  Aeropuerto militar o base aérea militar',
        texto:
          'Orientada a la atención de aviones militares que cuenta con las instalaciones necesarias para este tipo de aviación. Está adaptado para el movimiento de aeronaves militares y para las armas por ellas utilizadas.',
        imagen: require('@/assets/curso/tema1/16.svg'),
      },
    ],
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
.bloque-texto-a.color-primario
  background-color: #F6F6F6
.bloque-texto-a.color-primario:before
  background-color: #8C6DF2
.newsCard
  position: relative
  width: 100%
  height: 100%
  background-color: #fff
  color: #fff
  overflow: hidden
  padding: 0
.newsCaption
  position: absolute
  top: auto
  bottom: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #000
  padding: 5px
  -webkit-transform: translateY(80%)
          transform: translateY(80%)
  -webkit-backface-visibility: hidden
          backface-visibility: hidden
  -webkit-transition: opacity 0.1s 0.3s, -webkit-transform 0.4s
  transition: opacity 0.1s 0.3s, -webkit-transform 0.4s
  transition: transform 0.4s, opacity 0.1s 0.3s
  transition: transform 0.4s, opacity 0.1s 0.3s, -webkit-transform 0.4s
  display: grid
  align-content: stretch
  justify-content: space-evenly
  align-items: baseline
.newsCaption-title
  margin-top: .7rem
.newsCaption-content
  margin: 0
  display: table-cell
  vertical-align: middle
.newsCaption-link
  color: #fff
  text-decoration: underline
  -webkit-transition-property: opacity
  transition-property: opacity
  -webkit-transition-duration: 0.15s
          transition-duration: 0.15s
  -webkit-transition-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1)
          transition-timing-function: cubic-bezier(0.39, 0.58, 0.57, 1)
.newsCaption-link:hover

.news-Slide-up:hover .newsCaption
  -webkit-transform: translateY(0px)
          transform: translateY(0px)
  -webkit-transition: opacity 0.1s, -webkit-transform 0.4s
  transition: opacity 0.1s, -webkit-transform 0.4s
  transition: transform 0.4s, opacity 0.1s
  transition: transform 0.4s, opacity 0.1s, -webkit-transform 0.4s
.newsCaption-content p
  font-size: .9rem
</style>
