<template>
    <div>
        <Sidebar />

        <div class="main-content">
            <TopNav />
            <div class="container-fluid">

                <div class="header mt-md-5">
                    <div class="header-body">
                        <div class="row align-colaboradores-center">
                            <div class="col">

                                <!-- Pretitle -->
                                <h6 class="header-pretitle">
                                    Productos
                                </h6>

                                <!-- Title -->
                                <h1 class="header-title">
                                    Nuevo producto
                                </h1>

                            </div>
                        </div> <!-- / .row -->
                        <div class="row align-colaboradores-center">
                            <div class="col">

                                <!-- Nav -->
                                <ul class="nav nav-tabs nav-overflow header-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active">
                                            Todos los productos
                                        </a>
                                    </li>
                                    <li class="nav-item">

                                        <router-link to="/productos/create" class="nav-link">
                                            Nuevo producto
                                        </router-link>


                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

               <div class="row">
                    <div class="col-12">

                        <!-- Files -->
                        <div class="card" data-list="{&quot;valueNames&quot;: [&quot;name&quot;]}">
                        <div class="card-header">

                            <!-- Title -->
                            <h4 class="card-header-title">
                                Productos
                            </h4>

                            

                            <!-- Button -->
                            <a href="#!" class="btn btn-sm btn-primary text-white">
                                Nuevo producto
                            </a>

                        </div>
                        <div class="card-header">
                            <div class="input-group input-group-flush input-group-merge input-group-reverse">

                                <!-- Input -->
                                <input class="form-control list-search" type="search" placeholder="Busca tu producto">

                                <!-- Prepend -->
                                <div class="input-group-text">
                                <span class="fe fe-search"></span>
                                </div>

                            </div>

                        </div>
                        <div class="card-body">

                            <!-- List -->
                            <ul class="list-group list-group-lg list-group-flush list my-n4">
                                <li class="list-group-item" v-for="item in productos">
                                    <div class="row align-items-center">
                                    <div class="col-auto">

                                        <!-- Avatar -->
                                        <a href="#!" class="avatar avatar-lg">
                                        <img :src="$url+'/obtener_portada_producto/'+item.portada" alt="..." class="avatar-img rounded">
                                        </a>

                                    </div>
                                    <div class="col ms-n2">

                                        <!-- Title -->
                                        <h4 class="mb-1 name">
                                        <a href="#!">{{ item.titulo }}</a>
                                        </h4>

                                        <!-- Text -->
                                        <p class="card-text small text-muted mb-1">
                                        {{ item.categoria }}&nbsp;
                                        
                         <span v-if="item.estado" class="item-score badge bg-success-soft"> Publicado</span>
                        <span v-if="!item.estado" class="item-score badge bg-danger-soft">Borrado</span>
                                                        
                                        </p>

                                        <!-- Time -->
                                        <p class="card-text small text-muted">
                                      Creacion <time datetime="2018-01-03"> {{ convertDate(item.createAT) }}</time>
                                        </p>

                                    </div>
                                    <div class="col-auto">
                                        <span><b>{{ convertCurrency(item.precio)}}</b></span>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Dropdown -->
                                        <div class="dropdown">
                                        <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fe fe-more-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                            Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                            Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                            Something else here
                                            </a>
                                        </div>
                                        </div>

                                    </div>
                                    </div> <!-- / .row -->
                                </li>
                            </ul>

                        </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>


    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/TopNav.vue'
import axios from 'axios'
import moment from 'moment'
import currency_formatter from 'currency-formatter'

export default {
    name: 'IndexProducto',
    data() {
        return {
            productos: [], 
            filtro: ''
        }
    },
    methods: {
        init_data() {
            axios.get(this.$url + '/listar_productos_admin' + this.filtro, {
                 headers: {
                'Content-Type': 'multipart/form-data', 
                    'Authorization' : this.$store.state.token
                }
            }).then((result) => {

                this.productos = result.data;
                console.log(result)
            })
        },
        convertDate(date){
        return moment(date).format('YYYY-MM-DD')
        }, 

        convertCurrency(number) {
            return currency_formatter.format(number, { code: 'USD' });
// => '$1,000,000.00'
        }
   
    },
     beforeMount() {
     this.init_data()
    },
    
    components: {
        Sidebar,
        TopNav
    }, 
}
</script>
