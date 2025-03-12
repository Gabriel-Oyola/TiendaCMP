
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
                                            Nuevo colaborador
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
                                                <a class="nav-link active">
                                                    Nuevo colaborador
                                                </a>

                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form -->
                      



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

                            </div> <!-- / .row -->

                            <!-- Divider -->




                            <hr class="my-5">

                            <!-- Button -->
                            <button type="button" class="btn btn-primary" v-on:click="validar()">
                                Crear colaborador
                            </button>


                        

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
import axios from 'axios'

export default {
    name: 'createColaboradorApp',

    data() {
        return {
            colaborador: {
                rol: '',
            }
        }
    },
    components: {
        Sidebar, 
        TopNav
    }, 

    methods: {
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
                this.create_colaborador()
             
            }
        },

        create_colaborador() {
            axios.post(this.$url + '/admin_registro_usuarios', this.colaborador, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$token
                }
            }).then((result => {
                console.log(result)
                if (result.data.data == undefined) {
                    this.$notify({
                        group: 'foo',
                        title: 'ERROR',
                        text: result.data.message,
                        type: 'error'
                    });
                }
                else {
                    this.$notify({
                        group: 'foo',
                        title: 'Exito',
                        text: 'Colaborador registrado correctamente',
                        type: 'success'
                    });

                    this.$router.push({name: 'index-colaborador'})
                }
            })).catch((err) => {
                console.log(err)
            })
        }
        
    },
           mounted() {

    }
      
    
 
}
</script>
