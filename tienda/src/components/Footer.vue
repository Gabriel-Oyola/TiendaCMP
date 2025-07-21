<template>
  <footer class="main-footer">
    <!-- Services block-->
    <div class="text-dark-700 py-6">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 service-column">
            <img class="svg-icon service-icon" src="/assets/img/camion.gif" alt="">
            <div class="service-text">
              <h6 class="text-uppercase">ENVIOS FULL</h6>
              <p class="text-muted fw-light text-sm mb-0">Envios gratis a partir de $30.000</p>
            </div>
          </div>
          <div class="col-lg-4 service-column">
            <!-- <svg class="svg-icon service-icon">
                <use xlink:href="#money-1"> </use>
              </svg> -->
            <img class="svg-icon service-icon" src="/assets/img/euro.gif" alt="">

            <div class="service-text">
              <h6 class="text-uppercase">REEMBOLSOS</h6>
              <p class="text-muted fw-light text-sm mb-0">30 Dias de garantia</p>
            </div>
          </div>
          <div class="col-lg-4 service-column">
            <img class="svg-icon service-icon" src="/assets/img/tailandes.gif" alt="">
            <div class="service-text">
              <h6 class="text-uppercase">020-800-456-747</h6>
              <p class="text-muted fw-light text-sm mb-0">24/7 soporte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main block - menus, subscribe form-->
    <div class="py-6 text-muted" style="background-color: #005f96 !important;">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-5 mb-lg-0">
            <div class="fw-bold text-uppercase text-lg text-white mb-3" style="color: white;">Sell<span
                class="text-primary">.</span></div>
            <p class="text-white">Nuestras redes</p>
            <ul class="list-inline">
              <li class="list-inline-item"><a class="text-muted text-primary-hover" href="https://x.com/?lang=es"
                  target="_blank" title="twitter">
                  <img src="../assets/twitter.png" alt="" style="width: 20px;">
                </a>
              </li>
              <li class="list-inline-item"><a class="text-muted text-primary-hover" href="https://www.facebook.com/"
                  target="_blank" title="facebook">
                  <img src="../assets/facebook.png" alt="" style="width: 20px;">
                </a>
              </li>

              <li class="list-inline-item"><a class="text-muted text-primary-hover" href="https://www.instagram.com/"
                  target="_blank" title="instagram">
                  <img src="../assets/instagram.png" alt="" style="width: 20px;">
                </a>
              </li>

              <li class="list-inline-item"><a class="text-muted text-primary-hover"
                  href="https://workspace.google.com/intl/es-419/gmail/#inbox" target="_blank" title="email">
                  <img src="../assets/email.png" alt="" style="width: 20px;">
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 class="text-uppercase text-white mb-3">Categorias</h6>
            <ul class="list-unstyled">
              <li> <a class="text-white" href="#">Mujer</a></li>
              <li> <a class="text-white" href="#">Hombre</a></li>
              <li> <a class="text-white" href="#">Accesorios</a></li>
              <li> <a class="text-white" href="#">Sobre nosotros</a></li>
              <li> <a class="text-white" href="#">Carrito</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 class="text-uppercase text-white mb-3">Soporte</h6>
            <ul class="list-unstyled">
              <li> <a class="text-white" href="#">Login </a></li>
              <li> <a class="text-white" href="#">Register </a></li>
              <li> <a class="text-white" href="#">Wishlist </a></li>
              <li> <a class="text-white" href="#">Our Products </a></li>
              <li> <a class="text-white" href="#">Checkouts </a></li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h6 class="text-uppercase text-white mb-3">Daily Offers & Discounts</h6>
            <p class="mb-3 text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            <form action="#" id="newsletter-form">
              <div class="input-group mb-3">
                <input class="form-control bg-transparent border-secondary border-end-0" type="email"
                  placeholder="Your Email Address" aria-label="Your Email Address" style="border-color: white !important; color: white !important;">
                <div class="input-group-append">
                  <button class="btn border-start-0" type="submit" style="border-color: white !important; "> 
                    <img src="../assets/search.png" alt="" style="width: 20px;">
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright section of the footer-->
    <div class="py-4 fw-light text-gray-300" style="background-color: #1e1e1e !important;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-md-0">&copy; 2025 Mi tienda(Gabriel Oyola). Todos los derechos reservados.</p>
          </div>
          <div class="col-md-6">
            <ul class="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
              <li class="list-inline-item"><img class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/visa.svg" alt="..."></li>
              <li class="list-inline-item"><img class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/mastercard.svg" alt="..."></li>
              <li class="list-inline-item"><img class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/paypal.svg" alt="..."></li>
              <li class="list-inline-item"><img class="w-2rem"
                  src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/western-union.svg" alt="..."></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

}
</script>
