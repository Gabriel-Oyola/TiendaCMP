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
                                    Galeria de productos 
                                </h1>

                            </div>
                        </div> <!-- / .row -->
                        <div class="row align-colaboradores-center">
                            <div class="col">

                                <!-- Nav -->
                                <ul class="nav nav-tabs nav-overflow header-tabs">
                                    <li class="nav-item">
                                      
                                        <router-link to="/producto" class="nav-link">
                                            Todos los productos
                                        </router-link>
                                    </li>
                                    <li class="nav-item">

                                           <a class="nav-link active">
                                            Galeria de productos
                                        </a>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <template v-if="load_data">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </template>

                <template v-if="!load_data">
                    <div>
                         <div class="mb-7" v-if="data">
                            <div class="row">
                                <div class="col-12 col-md-12">

                                <!-- Email address -->
                                <div class="form-group">

                                    <!-- Label -->
                                    <label class="mb-1">
                                        Imagen
                                    </label>

                                    

                                    <!-- Input -->
                                    <div class="input-group mb-3">
                                        <input type="file" id="input_file" class="form-control" placeholder="Selecciona la imagen" v-on:change="uploadImage($event)">
                                        <button class="btn btn-primary" v-on:click="subir_imagen()">
                                            <i class="fe fe-upload"></i>
                                        </button>
                                    </div>
                                    <!-- Form text -->
                                    <small class="form-text text-muted">
                                        Subo un maximo de 5 imagenes para la galeria del producto.
                                    </small>
                                </div>

                                </div>
                                
                            </div> <!-- / .row -->

                            <div class="row listAlias" v-if="!load_galeria">
                                <div class="col-12 col-md-6 col-xl-4" v-for="item in galeria">
                                    <div class="card">
                                        <a href="project-overview.html">
                                            <img :src="$url+'/obtener_galeria_producto/'+ item.imagen" alt="..." class="card-img-top">
                                        </a>
                                        <div class="card-footer card-footer-boxed">
                                        <div class="row">
                                            <div class="col text-center">
                                                <a v-b-modal="'delete-'+item._id" style="cursor: pointer;" class="text-danger">Eliminar imagen</a>

                                                    <b-modal centered :id="'delete-'+item._id" title="Eliminar imagen" title-html="<h4 class='card-header-title'><b>Add a member</b></h4>" @ok="eliminar(item._id)">
                                                                <p class="my-4">{{ item._id }} Eliminar?</p>
                                                  </b-modal>

                                            </div>
                                            
                                        </div> <!-- / .row -->
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row mt-5" v-if="load_galeria">
                                <div class="col-12 text-center">
                                    <img src="/assets/img/reloj.gif" alt="" style="width: 80px;">
                                </div>
                            </div>

                        </div>
                    
                        <template v-if="!data">
                                <ErrorNotFound />
                        </template>

                    </div>
                </template>
               
            </div>
        </div>


    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/TopNav.vue'
import $ from 'jquery'
import axios from 'axios'
import { data } from 'jquery'
import ErrorNotFound from '@/components/ErrorNotFound.vue'

export default {
  name: 'GaleriaProducto',
    components: {
        Sidebar,
        TopNav, 
        ErrorNotFound
    }, 

    data(){
        return{
            imagen: undefined, 
            str_image: '',
            data: false, 
            load_data: true,
            load_galeria: true,
            galeria: []

        }
    },

    methods: {
                uploadImage($event) {

                var image;

                if ($event.target.files.length >= 1) {
                    image = $event.target.files[0]
                }

                if (image.size <= 1000000) {

                    if (image.type == 'image/jpeg' ||
                        image.type == 'image/png' ||
                        image.type == 'image/webp' ||
                        image.type == 'image/jpg') {

                        this.str_image = URL.createObjectURL(image)
                        this.imagen = image;
              

                    } else {
                        this.$notify({
                            group: 'foo',
                            title: 'ERROR',
                            text: 'Por favor sube una imagen',
                            type: 'error'
                        })

                    this.imagen = undefined;
                    $('#input_file').val('')
                    }

                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: 'Imagen mayor a 1MB',
                        type: 'error'
                    });

                     $('#input_file').val('')
                    
                }

                console.log(this.imagen)
        },

          subir_imagen() {
               if(this.imagen == undefined){
                    this.$notify({
                            group: 'foo',
                            title: 'ERROR',
                            text: 'Por favor selecciona una imagen',
                            type: 'error'
                        })

               }else{
                     var fm = new FormData();
                fm.append('producto', this.$route.params.id); 
                fm.append('imagen', this.imagen); 
       
                    
                axios.post(this.$url + '/subir_imagen_producto', fm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': this.$store.state.token
                }
                }).then((result) => {
                    if (result.data.message) {
                    this.$notify({
                            group: 'foo',
                            title: 'ERROR',
                            text: result.data.message,
                            type: 'error'
                        })
                    } else {
                        this.$notify({
                            group: 'foo',
                            title: 'SUCCESS',
                            text: 'Se creo correctamente el producto',
                            type: 'success'
                        })
                        this.init_galeria();
                }
                
                })
               }

        },

         init_data() {
            this.load_data=true;
            axios.get(this.$url + '/obtener_producto_admin/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {

                if(result.data == ''){
                    this.data=false;
                } else{
                    this.data=true;
                    this.producto = result.data;
                     this.str_image = this.$url + '/obtener_portada_producto/' + this.producto.portada;
                }

                this.load_data=false;
                
                
               
            })
        },

        init_galeria(){
            this.load_galeria=true;
            axios.get(this.$url + '/obtener_galeria_producto_admin/' + this.$route.params.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {

                
                this.galeria = result.data;
                this.load_galeria=false;
                
               
            })
        },
        eliminar(id){
            axios.delete(this.$url + '/eliminar_galeria_producto_admin/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {

                if(result.data.message){
                    this.$notify({
                            group: 'foo',
                            title: 'ERROR',
                            text: result.data.message,
                            type: 'error'
                        })
                }else{
                    console.log(result)
                    this.$notify({
                            group: 'foo',
                            title: 'SUCCESS',
                            text: 'Se elimino correctamente la imagen del producto',
                            type: 'success'
                        })
                        this.init_galeria();
                }
                
               
            })
        }
    },

    beforeMount(){
        this.init_data();
        this.init_galeria();
    }
}

</script>
