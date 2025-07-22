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
                                    Categorias
                                </h6>

                                <!-- Title -->
                                <h1 class="header-title">
                                    Categorias
                                </h1>

                            </div>
                        </div> <!-- / .row -->

                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12">
                        <button v-if="!section_form" class="btn btn-dark btn-sm" v-on:click="section_form = true">Nuevas
                            categorias</button>
                        <button v-if="section_form" class="btn btn-dark btn-sm"
                            v-on:click="section_form = false">Ocultar</button>
                    </div>
                    <div class="col-12 mt-3" v-if="section_form">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" v-model="nueva_categoria"
                                placeholder="Nueva categoria">
                            <button class="btn btn-dark" v-on:click="crear_categoria()">Crear</button>
                        </div>

                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <ul class="list-group list-group-flush list my-n3">
                            <li class="list-group-item" v-for="item in categorias">
                                <div class="row align-items-center">
                                    <div class="col-auto">

                                        <!-- Avatar -->
                                        <a href="profile-posts.html" class="avatar">
                                            <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg"
                                                alt="..." class="avatar-img rounded-circle">
                                        </a>

                                    </div>
                                    <div class="col ms-n2">

                                        <!-- Title -->
                                        <h4 class="mb-1 name">
                                            <a href="profile-posts.html">{{ item.titulo }}</a>
                                        </h4>

                                        <!-- Time -->
                                        <p class="small mb-0" v-if="item.estado">
                                            <span class="text-success">●</span> Publicado
                                        </p>

                                         <p class="small mb-0" v-if="!item.estado">
                                            <span class="text-danger">●</span> Oculto
                                        </p>

                                    </div>
                                    <div class="col-auto">

                                        <!-- Button -->
                                        <a href="#!" class="btn btn-sm btn-danger text-white"
                                            style="margin-right: 1rem;">
                                            Quitar
                                        </a>
                                        <a href="#!" class="btn btn-sm btn-dark text-white">
                                            Subcategoria
                                        </a>

                                    </div>
                                </div>
                                <!-- / .row -->
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <ul class="list-group mt-4">

                                            <li class="list-group-item d-flex justify-content-between align-items-center"
                                                style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                Morbi leo risus
                                                <a href="#!" class="btn btn-sm btn-danger text-white">
                                                    Quitar
                                                </a>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"
                                                style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                Morbi leo risus
                                                <a href="#!" class="btn btn-sm btn-danger text-white">
                                                    Quitar
                                                </a>
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center"
                                                style="font-size: .8rem;padding: 0.5rem 1.5rem;">
                                                Morbi leo risus
                                                <a href="#!" class="btn btn-sm btn-danger text-white">
                                                    Quitar
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
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

export default {
    name: 'IndexCategorias',

    data() {
        return {
            section_form: false,
            nueva_categoria: '',
            categorias: [],
        }
    },

    methods: {
        crear_categoria() {
            console.log(this.nueva_categoria)
            axios.post(this.$url + '/crear_categoria_admin', { titulo: this.nueva_categoria }, {
                headers: {
                    'Content-Type': 'application/json',
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
                        text: 'Se registro la categoria',
                        type: 'success'
                    })
                    this.nueva_categoria = ''
                }

            })
        },

        init_data() {
            axios.get(this.$url + '/listar_categorias_admin',  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                console.log(result)
                this.categorias = result.data;
            })
        }
    },

    beforeMount(){
        this.init_data();
    },
    components: {
        Sidebar,
        TopNav
    },
}
</script>
