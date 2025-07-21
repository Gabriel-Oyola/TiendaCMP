<template>
    <div style="background: #f3f3f3;">
        <section class="hero" style="margin-top: 8rem !important;">
            <div class="container">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                        <router-link to="/">
                            Inicio
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">Tienda


                    </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Tienda</h1>
                    <div class="row">
                        <div class="col-xl-8 offset-xl-2">
                            <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <div class="row">
                <!-- Grid -->
                <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
                    <header class="product-grid-header">
                        <div class="me-3 mb-3">
                            Showing <strong>1-12 </strong>of <strong>158 </strong>products</div>
                        <div class="me-3 mb-3"><span class="me-2">Show</span><a class="product-grid-header-show active"
                                href="#">12 </a><a class="product-grid-header-show " href="#">24 </a><a
                                class="product-grid-header-show " href="#">All </a>
                        </div>
                        <div class="mb-3 d-flex align-items-center"><span class="d-inline-block me-2">Sort by</span>
                            <select class="form-select w-auto border-0">
                                <option value="orderby_0">Default</option>
                                <option value="orderby_1">Popularity</option>
                                <option value="orderby_2">Rating</option>
                                <option value="orderby_3">Newest first</option>
                            </select>
                        </div>
                    </header>
                    <div class="row">
                        <!-- product-->
                        <div class="col-xl-4 col-6" v-for="item in productos">
                            <div class="product">
                                <div class="product-image">
                                   <div class="ribbon ribbon-danger" v-if="item.descuento">oferta</div><img class="img-fluid"
                                        :src="$url + '/obtener_portada_producto/' + item.portada" alt="product">

                                </div>
                                <div class="py-2">
                                    <p class="text-muted text-sm mb-1">{{ item.categoria }}</p>
                                    <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="detail.html" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{
                                            item.titulo }}</a></h3>
                                    <span class="text-muted">{{ convertCurrency(item.precio) }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Pagination-->
                    <nav class="d-flex justify-content-center mb-5 mt-3" aria-label="page navigation">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span
                                        aria-hidden="true">Prev</span><span class="sr-only">Previous</span></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1 </a></li>
                            <li class="page-item"><a class="page-link" href="#">2 </a></li>
                            <li class="page-item"><a class="page-link" href="#">3 </a></li>
                            <li class="page-item"><a class="page-link" href="#">4 </a></li>
                            <li class="page-item"><a class="page-link" href="#">5 </a></li>
                            <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span
                                        aria-hidden="true">Next</span><span class="sr-only">Next </span></a></li>
                        </ul>
                    </nav>
                </div>
                <!-- / Grid End-->
                <!-- Sidebar-->
                <div class="sidebar col-xl-3 col-lg-4 order-lg-1">
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#categoriesMenu" aria-expanded="false"
                            aria-controls="categoriesMenu">Categorias de productos</a>
                        <div class="expand-lg collapse" id="categoriesMenu">
                            <div class="nav nav-pills flex-column mt-4 mt-lg-0" role="menu">
                                <div class="sidebar-menu-item mb-2 active" data-bs-toggle="collapse"
                                    data-bs-target="#subcategories_0" aria-expanded="true"
                                    aria-controls="subcategories_0" role="menuitem">
                                    <a class="nav-link active" href="#!">
                                        <div class="row">
                                            <div class="col"><span>Jackets</span></div>
                                            <div class="col" style="text-align: right;"><img
                                                    src="../../assets/flecha.png" alt="" style="width: 20px;"></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="collapse show" id="subcategories_0">
                                    <div class="nav nav-pills flex-column ms-3"><a class="nav-link mb-2" href="#!">Lorem
                                            ipsum</a><a class="nav-link mb-2" href="#!">Dolor</a><a
                                            class="nav-link mb-2" href="#!">Sit amet</a><a class="nav-link mb-2"
                                            href="#!">Donec vitae</a>
                                    </div>
                                </div>
                                <div class="sidebar-menu-item mb-2" data-bs-toggle="collapse"
                                    data-bs-target="#subcategories_1" aria-expanded="false"
                                    aria-controls="subcategories_1" role="menuitem">
                                    <a class="nav-link " href="#!">
                                        <div class="col"><span>Jackets</span></div>
                                        <div class="col" style="text-align: right;"><img src="../../assets/Flecha2.png"
                                                alt="" style="width: 20px;"></div>

                                    </a>
                                </div>
                                <div class="collapse" id="subcategories_1">
                                    <div class="nav nav-pills flex-column ms-3"><a class="nav-link mb-2" href="#!">Lorem
                                            ipsum</a><a class="nav-link mb-2" href="#!">Dolor</a><a
                                            class="nav-link mb-2" href="#!">Sit amet</a><a class="nav-link mb-2"
                                            href="#!">Donec vitae</a>
                                    </div>
                                </div>
                                <div class="sidebar-menu-item mb-2" data-bs-toggle="collapse"
                                    data-bs-target="#subcategories_2" aria-expanded="false"
                                    aria-controls="subcategories_2" role="menuitem">
                                    <a class="nav-link ">
                                        <div class="col"><span>Jackets</span></div>
                                        <div class="col" style="text-align: right;"><img src="../../assets/Flecha2.png"
                                                alt="" style="width: 20px;"></div>
                                    </a>
                                </div>
                                <div class="collapse" id="subcategories_2">
                                    <div class="nav nav-pills flex-column ms-3"><a class="nav-link mb-2" href="#!">Sit
                                            amet</a><a class="nav-link mb-2" href="#!">Donec vitae</a><a
                                            class="nav-link mb-2" href="#!">Lorem ipsum</a><a class="nav-link mb-2"
                                            href="#!">Dolor</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#priceFilterMenu" aria-expanded="false"
                            aria-controls="priceFilterMenu">Filter by price</a>
                        <div class="expand-lg collapse" id="priceFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Price </h6>
                            <div class="mt-4 mt-lg-0" id="slider-snap" ref="slider"> </div>
                            <div class="nouislider-values">
                                <div class="min">From <span
                                        id="slider-snap-value-lower">{{ convertCurrency(minRange) }}</span></div>
                                <div class="max">To <span id="slider-snap-value-upper">{{ convertCurrency(maxRange)
                                        }}</span></div>
                                <input class="slider-snap-input" type="hidden" name="pricefrom"
                                    id="slider-snap-input-lower" value="40">
                                <input class="slider-snap-input" type="hidden" name="priceto"
                                    id="slider-snap-input-upper" value="110">
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#brandFilterMenu" aria-expanded="true"
                            aria-controls="brandFilterMenu">Filter by brand</a>
                        <!-- Brand filter menu - this menu has .show class, so is expanded by default-->
                        <div class="expand-lg collapse show" id="brandFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Brands </h6>
                            <form class="mt-4 mt-lg-0" action="#">
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand0" type="checkbox" name="clothes-brand"
                                            checked>
                                        <label class="form-check-label" for="brand0">Calvin Klein
                                            <small>(18)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand1" type="checkbox" name="clothes-brand"
                                            checked>
                                        <label class="form-check-label" for="brand1">Levi Strauss
                                            <small>(30)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand2" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand2">Hugo Boss
                                            <small>(120)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand3" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand3">Tomi Hilfiger
                                            <small>(70)</small></label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="brand4" type="checkbox"
                                            name="clothes-brand">
                                        <label class="form-check-label" for="brand4">Tom Ford
                                            <small>(110)</small></label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"> <a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#sizeFilterMenu" aria-expanded="false"
                            aria-controls="sizeFilterMenu">Filter by size</a>
                        <!-- Size filter menu-->
                        <div class="expand-lg collapse" id="sizeFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Size </h6>
                            <form class="mt-4 mt-lg-0" action="#">
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size0" type="radio" name="size" checked>
                                        <label class="form-check-label" for="size0">Small</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size1" type="radio" name="size">
                                        <label class="form-check-label" for="size1">Medium</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size2" type="radio" name="size">
                                        <label class="form-check-label" for="size2">Large</label>
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="form-check">
                                        <input class="form-check-input" id="size3" type="radio" name="size">
                                        <label class="form-check-label" for="size3">X-Large</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="sidebar-block px-3 px-lg-0 me-lg-4"><a class="d-lg-none block-toggler"
                            data-bs-toggle="collapse" href="#colourFilterMenu" aria-expanded="false"
                            aria-controls="colourFilterMenu">Filter by colour</a>
                        <!-- Size filter menu-->
                        <div class="expand-lg collapse" id="colourFilterMenu">
                            <h6 class="sidebar-heading d-none d-lg-block">Colour </h6>
                            <div class="mt-4 mt-lg-0">
                                <ul class="list-inline mb-0 colours-wrapper">
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Blue"
                                            style="background-color: #668cb9" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Blue" id="colour_sidebar_Blue">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_White"
                                            style="background-color: #fff" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_White" id="colour_sidebar_White">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Violet"
                                            style="background-color: #8b6ea4" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Violet" id="colour_sidebar_Violet">
                                    </li>
                                    <li class="list-inline-item">
                                        <label class="btn-colour" for="colour_sidebar_Red"
                                            style="background-color: #dd6265" data-allow-multiple> </label>
                                        <input class="input-invisible" type="checkbox" name="colour"
                                            value="value_sidebar_Red" id="colour_sidebar_Red">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Sidebar end-->
            </div>
        </div>
    </div>
</template>

<script>

import noUiSlider from '../../../public/assets/js/nouislider.min.js';
import currency_formatter from 'currency-formatter';
import axios from 'axios'
export default {
    data() {
        return {
            slider: {
                startMin: 25,
                startMax: 100,
                min: 0,
                max: 100,
                start: 40,
                step: 1
            },
            minRange: null,
            maxRange: null,
            productos: []
        }
    },

    mounted() {
        noUiSlider.create(this.$refs.slider, {
            start: [this.slider.startMin, this.slider.startMax],
            step: this.slider.step,
            range: {
                'min': this.slider.min,
                'max': this.slider.max,
            },


        });



        this.$refs.slider.noUiSlider.on('update', (values, handle) => {
            this[handle ? 'maxRange' : 'minRange'] = parseInt(values[handle]);
        })
    },

    beforeMount() {
        axios.get(this.$url + '/obtener_productos_shop', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            this.productos = result.data;
            console.log(this.productos)
        })
    },

    methods: {
        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
            // => '$1,000,000.00'
        }
    }

}





</script>

<style>
.noUi-horizontal .noUi-handle {
    background: #005f96 !important;
    border-radius: 5px !important;
}

.noUi-horizontal .noUi-handle {
    width: 0.5rem !important;
    height: 1rem !important;


}

.noUi-horizontal {
    height: 7px !important;
    background: #787878 !important;
    border: none !important;
}

.sidebar-menu-item[data-bs-toggle="collapse"]::before {
    display: none !important;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #ffffff !important;
    background-color: #005f96 !important;
}
</style>