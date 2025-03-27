
<template>
    <div>
        <Sidebar />
        <div class="main-content">
            
          
            <div class="container-fluid"> 

           
                
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <!-- Header -->
                        <div class="header mt-md-5">
                            <div class="header-body">
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Pretitle -->
                                        <h6 class="header-pretitle">
                                            Colaboradores
                                        </h6>

                                        <!-- Title -->
                                        <h1 class="header-title">
                                            Editar colaborador
                                        </h1>

                                    </div>
                                </div> <!-- / .row -->
                                <div class="row align-items-center">
                                    <div class="col">

                                        <!-- Nav -->
                                        <ul class="nav nav-tabs nav-overflow header-tabs">
                                            <li class="nav-item">
                                                <router-link to="/colaboradores/index" class="nav-link"> Todos los colaboradores</router-link>
                                          
                                            </li>
                                            <li class="nav-item">

                                                <router-link class="nav-link active" to="/colaboradores/create">Nuevo colaborador</router-link>
                                             

                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                      

                        <template v-if="data">
                            <div>
                                <div class="row">
                                <div class="col-12 col-md-6">

                                    <!-- First name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Nombres
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" v-model="colaborador.nombre">

                                    </div>

                                </div>
                                <div class="col-12 col-md-6">

                                    <!-- Last name -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Apellidos
                                        </label>

                                        <!-- Input -->
                                        <input type="text" class="form-control" v-model="colaborador.apellido">

                                    </div>

                                </div>
                                <div class="col-12">

                                    <!-- Email address -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="mb-1">
                                            Correo electrónico
                                        </label>

                                        <!-- Form text -->
                                        <small class="form-text text-muted">
                                            This contact will be shown to others publicly, so choose it carefully.
                                        </small>

                                        <!-- Input -->
                                        <input type="email" class="form-control" v-model="colaborador.email">

                                    </div>

                                </div>

                                <div class="col-12 col-md-6">

                                    <!-- Birthday -->
                                    <div class="form-group">

                                        <!-- Label -->
                                        <label class="form-label">
                                            Cargo
                                        </label>

                                        <!-- Input -->
                                        <select name="" class="form-select" id="" v-model="colaborador.rol">
                                            <option value="" disabled selected>Seleccionar</option>
                                            <option value="Administrador">Administrador</option>
                                            <option value="Vendedor">Vendedor</option>
                                            <option value="Inventariado">Inventariado</option>
                                        </select>
                                    </div>

                                </div>

                            </div> 
                            <hr class="my-5">
                            <button type="button" class="btn btn-primary" v-on:click="validar()">
                                Guardar cambios
                            </button>

                            </div>
                        </template>

                            
                        <template v-if="!data">
                           <ErrorNotFound />
                        </template>
                        

                        <br><br>

                    </div>
                </div> <!-- / .row -->
            </div>

        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/TopNav.vue'
import ErrorNotFound from '@/components/ErrorNotFound.vue'
import axios from 'axios'


export default {
    name: 'editColaboradorApp',

    data() {
        return {
            colaborador: {
                rol: '',
            },
            id: this.$route.params.id, 
            data:false, 
        }
    },
    components: {
        Sidebar, 
        TopNav,
        ErrorNotFound
    }, 

    methods: {

        init_data() {

            axios.get(this.$url + '/obtener_usuario_id/' + this.id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$token
                }
            }).then((result) => { 
                if (result == "") {
                    this.data = false; 
                } else {
                    this.data = true; 
                    this.colaborador = result.data;
                }
             })
            .catch((err)=>{console.log(err)})
            
        },



        validar() {
            if (!this.colaborador.nombre) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el nombre completo',
                    type: 'error'
                });
            }
            else if (!this.colaborador.apellido) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el apellido',
                    type: 'error'
                });
            }
            else if (!this.colaborador.email) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el email',
                    type: 'error'
                });
            }
            else if (!this.colaborador.rol) {
                this.$notify({
                    group: 'foo',
                    title: 'ERROR',
                    text: 'Ingrese el rol',
                    type: 'error'
                });
            }
            else{
               this.actualizar_colaborador()
             
            }
        },

        
        actualizar_colaborador() {
            axios.put(this.$url + '/actualizar_usuario_id/'+ this.id, this.colaborador, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$token
                }
            }).then((result => {
                this.$notify({
                        group: 'foo',
                        title: 'Exito',
                        text: 'Colaborador actualizado correctamente',
                        type: 'success'
                    });

                    this.$router.push({name: 'index-colaborador'})
            })).catch((err) => {
                console.log(err)
            })
        }
            
        
    },
           mounted() {

    }, 
    beforeMount() {
        this.init_data();
    }
      
    
 
}
</script>
