<template>
    <div style="background: #f3f3f3;">
        <section class="hero" style="margin-top: 8rem !important;">
            <div class="container">
                <!-- Breadcrumbs -->
                <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                    <li class="breadcrumb-item active">Direcciones </li>
                </ol>
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Tus direcciones</h1>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-8 col-xl-9">
                        <div class="block">
                            <!-- Invoice Address-->
                            <div class="block-header" style="background: rgb(0, 95, 150) !important; color: white;">
                                <h6 class="text-uppercase mb-0">Direccion de factura </h6>
                            </div>
                            <div class="block-body">
                                <div class="row">
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="fullname_invoice"><b>Nombre</b></label>
                                        <input class="form-control" type="text" placeholder="Joe Black"
                                            v-model="direccion.nombre">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="emailaddress_invoice"><b>Apellido</b></label>
                                        <input class="form-control" type="text" placeholder="Black"
                                            v-model="direccion.apellido">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="street_invoice"><b>Documento</b></label>
                                        <input class="form-control" type="text" placeholder="123456"
                                            v-model="direccion.documento">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="city_invoice"><b>Celular</b></label>
                                        <input class="form-control" type="text" placeholder="(+54)351-3333333"
                                            v-model="direccion.celular">
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label" for="zip_invoice"><b>Pais</b></label>
                                        <select class="form-control" v-model="direccion.pais">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option v-for="item in $paises" :value="item">{{ item }}</option>


                                        </select>
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="state_invoice"><b>Region/Ciudad</b></label>
                                        <input class="form-control" type="text" placeholder="Cordoba/Capital"
                                            v-model="direccion.ciudad">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="phonenumber_invoice"><b>Codigo postal</b></label>
                                        <input class="form-control" type="text" placeholder="X5001"
                                            v-model="direccion.cp">
                                    </div>
                                    <div class="form-group col-md-6 mb-3">
                                        <label class="form-label" for="phonenumber_invoice"><b>Direccion</b></label>
                                        <input class="form-control" type="text" placeholder="Italia 259"
                                            v-model="direccion.direccion">
                                    </div>

                                </div>
                                <!-- /Invoice Address-->
                            </div>
                            <!-- Shippping Address-->

                        </div>
                        <div class="mb-4 mt-3 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="crear_direccion()"><img
                                    src="/assets/img/write.png" style="width: 20px; margin: 3px;"
                                    alt="">Guardar</button>
                        </div>

                        <span class="text-danger text-center" v-if="msn_error">{{ msn_error }}</span>

                        <table class="table table-bordered table-striped"
                            style="margin-top: 5rem !important;background: white !important;">
                            <thead class="table-dark" v-if="direcciones.length >= 1">
                                <tr>
                                    <th scope="col">Receptor</th>
                                    <th scope="col">Localizacion</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody v-if="direcciones.length >= 1">
                                <tr v-for="item in direcciones">
                                    <th scope="row"> <small>{{ item.nombre }} {{ item.apellido }} <br> {{ item.celular
                                            }}</small></th>
                                    <td><small>{{ item.pais }} {{ item.ciudad }} <br> {{ item.cp }}</small></td>
                                    <td><small>{{ item.direccion }}</small></td>
                                    <td class="btn btn-danger btn-sm" style="background-color: red; margin-top: 10px;">
                                        Eliminar</td>
                                </tr>

                            </tbody>

                            <div class="card" v-if="direcciones.length == 0">
                                <div class="card-body">
                                     <div class="row">
                                            <div class="col-12 text-center">
                                                
                                                <img src="/assets/img/reloj.gif" alt="" style="width: 50px;">
                                                <h3>Aun no tienes direcciones</h3>
                                                <span>Por favor ingresa una</span>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </table>
                    </div>
                    <!-- Customer Sidebar-->
                    <div class="col-xl-3 col-lg-4 mb-5">
                        <div class="customer-sidebar card border-0">
                            <div class="customer-profile"><a class="d-inline-block" href="#"><img
                                        class="img-fluid rounded-circle customer-image shadow"
                                        src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-589739-unsplash-avatar.jpg"
                                        alt=""></a>
                                <h5>Julie Trnka</h5>
                                <p class="text-muted text-sm mb-0">Ostrava, Czech Republic</p>
                            </div>
                            <nav class="list-group customer-nav"><a
                                    class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
                                    href="customer-orders.html"><span>
                                        <svg class="svg-icon svg-icon-heavy me-2">
                                            <use xlink:href="#paper-bag-1"> </use>
                                        </svg>Orders</span>
                                    <div class="badge rounded-pill bg-dark fw-normal px-3">5</div>
                                </a><a
                                    class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
                                    href="customer-account.html"><span>
                                        <svg class="svg-icon svg-icon-heavy me-2">
                                            <use xlink:href="#male-user-1"> </use>
                                        </svg>Profile</span></a><a
                                    class="active list-group-item d-flex justify-content-between align-items-center text-decoration-none"
                                    href="customer-addresses.html"><span>
                                        <svg class="svg-icon svg-icon-heavy me-2">
                                            <use xlink:href="#navigation-map-1"> </use>
                                        </svg>Addresses</span></a><a
                                    class="list-group-item d-flex justify-content-between align-items-center text-decoration-none"
                                    href="customer-login.html"><span>
                                        <svg class="svg-icon svg-icon-heavy me-2">
                                            <use xlink:href="#exit-1"> </use>
                                        </svg>Log out</span></a>
                            </nav>
                        </div>
                    </div>
                    <!-- /Customer Sidebar-->
                </div>
            </div>
        </section>
    </div>
</template>


<script>

import axios from 'axios'
export default {
    data() {
        return {
            direccion: {
                pais: ''
            },
            msn_error: '',
            direcciones: [],
        }
    },

    beforeMount() {
        this.init_direcciones();
    },

    methods: {

        init_direcciones() {
            axios.get(this.$url + '/obtener_direccion', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                this.direcciones = result.data;
            })
        },

        crear_direccion() {
            if (!this.direccion.nombre) {
                this.msn_error = 'Ingrese el nombre por favor';
            }
            else if (!this.direccion.apellido) {
                this.msn_error = 'Ingrese el apellido por favor';
            }
            else if (!this.direccion.documento) {
                this.msn_error = 'Ingrese el documento por favor';
            }
            else if (!this.direccion.celular) {
                this.msn_error = 'Ingrese el celular por favor';
            }
            else if (!this.direccion.pais) {
                this.msn_error = 'Ingrese el pais por favor';
            }
            else if (!this.direccion.ciudad) {
                this.msn_error = 'Ingrese la ciudad por favor';
            }
            else if (!this.direccion.cp) {
                this.msn_error = 'Ingrese el codigo postal por favor';
            }
            else if (!this.direccion.direccion) {
                this.msn_error = 'Ingrese la direccion por favor';
            }
            else {

                axios.post(this.$url + '/crear_direccion', this.direccion, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': this.$store.state.token
                    }
                }).then((result) => {
                    this.msn_error = ''
                    this.init_direcciones()
                })
            }

        }
    }

}

</script>