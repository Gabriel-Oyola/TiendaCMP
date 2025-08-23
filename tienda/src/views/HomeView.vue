<template>
  <div class="home">
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 dark-overlay split-screen-column align-items-center align-items-lg-end"
            style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347942-unsplash.jpg); background-color: #d2cecb;">
            <div class="overlay-content py-6 mt-6 px-lg-5 mt-lg-0 mb-lg-5">
              <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Gentlemen </h1>
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection </a><a
                  class="btn btn-outline-light mx-1 mb-1" href="category.html">See more </a></p>
            </div>
          </div>
          <div class="col-lg-6 split-screen-column align-items-center align-items-lg-end"
            style="background-image: url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/ian-dooley-347962-unsplash.jpg); background-color: #e5b6b4;">
            <div class="py-6 px-lg-5 mb-lg-5">
              <h1 class="display-3 mb-4 text-white fw-bold split-screen-heading letter-spacing-1">Ladies </h1>
              <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
              <p> <a class="btn btn-light mx-1 mb-1" href="category.html">View collection </a><a
                  class="btn btn-outline-light mx-1 mb-1" href="category.html">See more </a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Nuevos productos</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="row">
          <!-- product-->
          <div class="col-lg-3 col-md-4 col-6" v-for="item in nuevos_productos">
            <router-link :to="{ name: 'show-producto', params: { slug: item.slug } }">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-danger" v-if="item.descuento">oferta</div><img class="img-fluid"
                    :src="$url + '/obtener_portada_producto/' + item.portada" alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{ item.titulo }}</a></h3>
                  <span class="text-muted">{{ convertCurrency(item.precio) }}</span>
                </div>
              </div>
            </router-link>

          </div>
          <!-- /product-->
          <!-- product-->

          <!-- /product-->
        </div>
      </div>
    </section>
    <section class="py-6 bg-gray-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2>Coleccion NIKE</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-flex align-items-md-stretch mb-4 mb-md-0">
            <div class="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0"
              style="background: center center url(https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/nordwood-themes-481980-unsplash-square.jpg) no-repeat; background-size: cover;">
              <a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay w-100 overlay-content">
                <h2 class="display-2 fw-bold text-uppercase mb-0">HOMBRE </h2>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 text-white text-center mb-4 dark-overlay"> <img class="card-img"
                src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/malvestida-magazine-458585-unsplash.jpg"
                alt="Ladies"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">MUJER </h2>
                </div>
              </div>
            </div>
            <div class="card border-0 text-white text-center  dark-overlay"> <img class="card-img"
                src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/heather-schwartz-528936-unsplash.jpg"
                alt="Accessories"><a class="tile-link" href="category.html"> </a>
              <div class="card-img-overlay d-flex align-items-center">
                <div class="text-center w-100 overlay-content">
                  <h2 class="display-4 fw-bold text-uppercase text-center mb-0">ACCESORIOS </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 position-relative light-overlay"><img class="bg-image"
        src="../../public/assets/img/air-force-one-portada-1200x572x80xX.jpg" alt="">
      <div class="container">
        <div class="overlay-content text-center text-dark">
          <p class="text-uppercase fw-bold mb-1 letter-spacing-5">NIKE AIR FORCE</p>
          <h3 class="display-1 fw-bold text-serif mb-4">VISITA NUESTRO CATALOGO</h3><a class="btn btn-dark"
            href="category.html">COMPRAR AHORA</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.product-image {
  display: block !important;
  overflow: hidden !important;

}

.img-fluid {
  height: auto !important;
  display: auto !important;
  vertical-align: middle !important;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'
import currency_formatter from 'currency-formatter'
import { init_carrusel } from '../../public/assets/js/theme.d7b4a888'

export default {
  name: 'HomeView',

  data() {
    return {
      nuevos_productos: [],
      load_nuevos_productos: true,

      productos_recomendados: [],
      load_productos_recomendados: true

    }
  },
  methods: {
    init_nuevos_productos() {
      axios.get(this.$url + '/obtener_nuevos_productos', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        this.nuevos_productos = result.data;
        this.load_nuevos_productos;
        console.log(this.nuevos_productos)
      })
    },

    init_productos_recomendados() {
      axios.get(this.$url + '/obtener_productos_recomendados', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        this.productos_recomendados = result.data;
        this.load_productos_recomendados = false;
        console.log(this.productos_recomendados)
      })
    },

    convertCurrency(number) {
      return currency_formatter.format(number, { code: 'USD' });
      // => '$1,000,000.00'
    }
  },
  components: {
    HelloWorld
  },
  beforeMount() {
    this.init_nuevos_productos();
    this.init_productos_recomendados();
    init_carrusel.init();
  }
}
</script>
