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
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger" v-if="item.descuento">oferta</div><img class="img-fluid"
                  :src="$url+ '/obtener_portada_producto/'+item.portada"
                  alt="product" />
                <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">{{ item.titulo }}</a></h3><span
                  class="text-muted">{{ convertCurrency (item.precio) }}</span>
              </div>
            </div>
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
    <section class="pt-6 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto text-center mb-5">
            <h2 class="text-uppercase">Productos recomendados</h2>
            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <!-- Products Slider-->
          <div class="owl-carousel owl-theme product-slider">
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-primary">Sale</div><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/kyle-loftus-596319-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Accessories</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">College jacket</a></h3>
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/ethan-haddox-484912-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Denim</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Carrot-fit jeans</a></h3>
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/serrah-galos-494231-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Jackets</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Striped T-Shirt</a></h3>
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/averie-woodard-319832-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Shirts</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Short top</a></h3><span
                    class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image">
                  <div class="ribbon ribbon-danger">Sold out</div><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/serrah-galos-494279-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Sweaters</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Ethnic Sweater</a></h3>
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/dmitriy-ilkevich-437760-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Coats</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Beige</a></h3><span
                    class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/ian-dooley-347968-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">T-Shirts</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Skull Tee</a></h3><span
                    class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/alex-holyoake-571682-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Denim</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Trucker jacket</a></h3>
                  <span class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/ao-456813-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Denim</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Blouse</a></h3><span
                    class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
            <!-- product-->
            <div class="product-slider-item">
              <div class="product">
                <div class="product-image"><img class="img-fluid"
                    src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/kyle-loftus-592041-unsplash.jpg"
                    alt="product" />
                  <div class="product-hover-overlay"><a class="product-hover-overlay-link" href="detail.html"></a>
                    <div class="product-hover-overlay-buttons"><a class="btn btn-dark btn-buy" href="detail.html"><i
                          class="fa-search fa"></i><span class="btn-buy-label ms-2">View</span></a>
                    </div>
                  </div>
                </div>
                <div class="py-2">
                  <p class="text-muted text-sm mb-1">Denim</p>
                  <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html">Shirt</a></h3><span
                    class="text-muted">$40.00</span>
                </div>
              </div>
            </div>
            <!-- /product-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>

  .product-image{
    display: block !important;
    overflow: hidden !important;
    height: 320px !important;
  }

  .img-fluid{
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
import { init_carrusel} from '../../public/assets/js/theme.d7b4a888'

export default {
  name: 'HomeView',

  data() {
      return{
        nuevos_productos: [], 

      }
  },
  methods: {
    init_nuevos_productos() {
      axios.get(this.$url + '/obtener_nuevos_productos', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result)=> {
        this.nuevos_productos = result.data;
        console.log(result)
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
  beforeMount(){ 
    this.init_nuevos_productos();
    init_carrusel.init();
  }
}
</script>
