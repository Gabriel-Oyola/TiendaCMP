<template>
    <div tyle="background: #f3f3f3;">
        <section class="hero" style="margin-top: 8rem !important;">
            <div class="container">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active">Checkout </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Checkout</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <p class="lead text-muted">Por favor revisa tu orden.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Checkout-->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">

                        <div class="block mb-5">
                            <div class="block-header text-white" style="    background: #499493 !important;" >
                                <h6 class="text-uppercase mb-0">Dirección de entrega </h6>
                            </div>
                            <div class="block-body" style="background-color: #e5e5e5 !important;">
                                <div class="row">
                                    <div class="mb-4 col-md-6 d-flex align-items-center">
                                        <input type="radio" name="shippping" id="option0">
                                        <label class="ms-3" for="option0"><strong
                                                class="d-block text-uppercase mb-2">Usps next day</strong><span
                                                class="text-muted text-sm">Get it right on next day - fastest option
                                                possible.</span></label>
                                    </div>
                                    <div class="mb-4 col-md-6 d-flex align-items-center">
                                        <input type="radio" name="shippping" id="option1">
                                        <label class="ms-3" for="option1"><strong
                                                class="d-block text-uppercase mb-2">Usps next day</strong><span
                                                class="text-muted text-sm">Get it right on next day - fastest option
                                                possible.</span></label>
                                    </div>
                                    <div class="mb-4 col-md-6 d-flex align-items-center">
                                        <input type="radio" name="shippping" id="option2">
                                        <label class="ms-3" for="option2"><strong
                                                class="d-block text-uppercase mb-2">Usps next day</strong><span
                                                class="text-muted text-sm">Get it right on next day - fastest option
                                                possible.</span></label>
                                    </div>
                                    <div class="mb-4 col-md-6 d-flex align-items-center">
                                        <input type="radio" name="shippping" id="option3">
                                        <label class="ms-3" for="option3"><strong
                                                class="d-block text-uppercase mb-2">Usps next day</strong><span
                                                class="text-muted text-sm">Get it right on next day - fastest option
                                                possible.</span></label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="mb-5">
                            <div class="cart">
                                <div class="cart-wrapper">
                                    <div class="cart-header text-center text-white" style="    background: #499493 !important;">
                                        <div class="row">
                                            <div class="col-6">
                                                <span class="text-left">Producto</span>
                                            </div>
                                            <div class="col-2 text-white"><span>Precio</span></div>
                                            <div class="col-2 text-white"><span>Cantidad</span></div>
                                            <div class="col-2 text-white"><span>Total</span></div>
                                        </div>
                                    </div>
                                    <div class="cart-body" style="background-color: #e5e5e5 !important;">
                                        <!-- Product-->
                                        <div class="cart-item">
                                            <div class="row d-flex align-items-center text-center">
                                                <div class="col-6">
                                                    <div class="d-flex align-items-center"><a href="detail.html"><img
                                                                class="cart-item-img"
                                                                src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-ian-dooley-347968-unsplash.jpg"
                                                                alt="..."></a>
                                                        <div class="cart-title text-start"><a
                                                                class="text-uppercase text-dark"
                                                                href="detail.html"><strong>Skull
                                                                    Tee</strong></a><br><span
                                                                class="text-muted text-sm">Size: Large</span><br><span
                                                                class="text-muted text-sm">Colour: Green</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-2">$65.00</div>
                                                <div class="col-2">4
                                                </div>
                                                <div class="col-2 text-center">$260.00</div>
                                            </div>
                                        </div>
                                        <!-- Product-->
                                        <div class="cart-item">
                                            <div class="row d-flex align-items-center text-center">
                                                <div class="col-6">
                                                    <div class="d-flex align-items-center"><a href="detail.html"><img
                                                                class="cart-item-img"
                                                                src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-kyle-loftus-596319-unsplash.jpg"
                                                                alt="..."></a>
                                                        <div class="cart-title text-start"><a
                                                                class="text-uppercase text-dark"
                                                                href="detail.html"><strong>Transparent
                                                                    Blouse</strong></a><br><span
                                                                class="text-muted text-sm">Size: Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-2">$55.00</div>
                                                <div class="col-2">3
                                                </div>
                                                <div class="col-2 text-center">$165.00</div>
                                            </div>
                                        </div>
                                        <!-- Product-->
                                        <div class="cart-item">
                                            <div class="row d-flex align-items-center text-center">
                                                <div class="col-6">
                                                    <div class="d-flex align-items-center"><a href="detail.html"><img
                                                                class="cart-item-img"
                                                                src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-serrah-galos-494312-unsplash.jpg"
                                                                alt="..."></a>
                                                        <div class="cart-title text-start"><a
                                                                class="text-uppercase text-dark"
                                                                href="detail.html"><strong>White
                                                                    Tee</strong></a><br><span
                                                                class="text-muted text-sm">Size: Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-2">$55.00</div>
                                                <div class="col-2">3
                                                </div>
                                                <div class="col-2 text-center">$165.00</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 d-flex justify-content-between flex-column flex-lg-row"><router-link
                                class="btn btn-link text-muted" to="/shop"> <img src="/assets/img/shop.png" alt="" style="width: 18px;"> Regresar a la tienda...</router-link>
                                    <a
                                class="btn btn-dark" href="checkout5.html">Place an order<i
                                    class="fa fa-angle-right ms-2"></i></a></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="block mb-5">
                            <div class="block-header text-white" style="    background: #499493 !important;">
                                <h6 class="text-uppercase mb-0">Order Summary</h6>
                            </div>
                            <div class="block-body  pt-1" style="background-color: #e5e5e5 !important;">
                                <p class="text-sm">Shipping and additional costs are calculated based on values you have
                                    entered.</p>
                                <ul class="order-summary mb-0 list-unstyled">
                                    <li class="order-summary-item"><span>Subtotal </span><span>$390.00</span></li>
                                    <li class="order-summary-item"><span>Envio</span><span>$10.00</span></li>

                                    <li class="order-summary-item border-0"><span>Total</span><strong
                                            class="order-summary-total">$400.00</strong></li>
                                </ul>
                            </div>
                        </div>

                        <div class="block mb-5">
                            <div class="block-header text-white" style="    background: #499493 !important;">
                                <h6 class="text-uppercase mb-0">Método de pago</h6>
                            </div>
                            <div class="block-body  pt-1 mb-3" style="background-color: #e5e5e5 !important;">
                                <div class="col-md-12 mb-2">

                                    <span class="d-block  mb-2" style="letter-spacing: 0px;font-weight: 600;">Tarjeta de
                                        crédito o débito</span>
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <img src="/assets/img/payments.png" style="width: 180px">
                                        </div>
                                        <div class="col-12">
                                            <p class="text-muted" style="font-size: 13px">
                                                (Luego de hacer clic en "PAGAR" será redirigido a Mercado Pago de forma
                                                segura para completar su compra).</p>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-md-12">
                                    <p class="text-sm" style="margin-bottom: 0.4rem;">Deberes e impuestos no están
                                        incluidos en paquetes con envio internacional. /Tus datos personales serán
                                        utilizados para procesar tu pedido y respaldar tu experiencia en este sitio web.
                                    </p>
                                    <a> <b> Términos & Privacidad.</b></a>
                                </div>

                            </div>
                            <div class="block-footer">
                                <a class="btn btn-dark" id="btnBuy" style="cursor: pointer;width: 100%;">PAGAR</a>
                                <!--  <button class="btn btn-dark btnBuy" style="cursor: pointer" disabled>Procesando...</button> -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: 'CheckoutApp',

}


</script>