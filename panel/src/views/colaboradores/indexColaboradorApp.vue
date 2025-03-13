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
                                    Colaboradores
                                </h6>

                                <!-- Title -->
                                <h1 class="header-title">
                                    Nuevo colaborador
                                </h1>

                            </div>
                        </div> <!-- / .row -->
                        <div class="row align-colaboradores-center">
                            <div class="col">

                                <!-- Nav -->
                                <ul class="nav nav-tabs nav-overflow header-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active">
                                            Todos los colaboradores
                                        </a>
                                    </li>
                                    <li class="nav-item">

                                        <router-link to="/colaboradores/create" class="nav-link">
                                            Nuevo colaborador
                                        </router-link>


                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content">

                    <div class="tab-pane fade show active" id="contactsListPane" role="tabpanel"
                        aria-labelledby="contactsListTab">

                        <!-- Card -->
                        <div class="card"
                            data-list='{"valueNames": ["item-name", "item-title", "item-email", "item-phone", "item-score", "item-company"], "page": 10, "pagination": {"paginationClass": "list-pagination"}}'
                            id="contactsList">
                            <div class="card-header">
                                <div class="row align-colaboradores-center">
                                    <div class="col">

                                        <!-- Form -->
                                        <form>
                                            <div
                                                class="input-group input-group-flush input-group-merge input-group-reverse">
                                                <input class="form-control list-search" type="search"
                                                    placeholder="Search">
                                                <span class="input-group-text">
                                                    <i class="fe fe-search"></i>
                                                </span>
                                            </div>
                                        </form>

                                    </div>

                                    <div class="col-auto">

                                        <!-- Dropdown -->
                                        <button class="btn btn-sm btn-white" type="button">
                                            <i class="fe fe-sliders me-1"></i> Filter <span
                                                class="badge bg-primary ms-1 d-none">0</span>
                                        </button>

                                    </div>
                                </div> <!-- / .row -->
                            </div>
                            <div class="table-responsive">
                                <table class="table table-sm table-hover table-nowrap card-table">
                                    <thead>
                                        <tr>

                                            <th>
                                                <a class="list-sort text-muted" >Nombre</a>
                                            </th>
                                            <th>
                                                <a class="list-sort text-muted" >Rol</a>
                                            </th>
                                            <th>
                                                <a class="list-sort text-muted">Email</a>
                                            </th>
                                          
                                            <th>
                                                <a class="list-sort text-muted" >Estado</a>
                                            </th>
                                          
                                        </tr>
                                    </thead>
                               
                                        <paginate 
                                            tag="tbody"
                                            ref="colaboradores"
                                            name="colaboradores"
                                            :list="colaboradores"
                                            :per="perPage"
                                            class="list fs-base"
                                            >
                                           <tr v-for="item in paginated('colaboradores')">

                                            <td>

                                                <!-- Avatar -->
                                                <div class="avatar avatar-xs align-middle me-2">
                                                    <img class="avatar-img rounded-circle"
                                                        src="/assets/img/avatar-1.jpg" alt="...">
                                                </div> <a class="item-name text-reset">{{ item.nombre }} {{
                                                    item.apellido }}</a>

                                            </td>
                                            <td>

                                                <!-- Text -->
                                                <span class="item-title">{{ item.rol }}</span>

                                            </td>
                                            <td>

                                                <!-- Email -->
                                                <a class="item-email text-reset">{{ item.email }}</a>

                                            </td>

                                            <td>


                                                <span v-if="!item.estado" class="item-score badge bg-danger-soft">Desactivado</span>
                                                <span  v-if="item.estado" class="item-score badge bg-success-soft">Activado</span>

                                            </td>
                                
                                            <td class="text-end">

                                                <!-- Dropdown -->
                                                <div class="dropdown">
                                                    <a class="dropdown-ellipses dropdown-toggle" href="#" role="button"
                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
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

                                            </td>
                                        </tr>
                                        </paginate>
                                </table>
                            </div>
                            <div class="card-footer d-flex justify-content-between">

                                <!-- Pagination (prev) -->
                                <ul class="list-pagination-prev pagination pagination-tabs card-pagination">
                                    <li class="page-item">
                                        <a class="page-link ps-0 pe-4 border-end" v-on:click="goPrev()">
                                            <i class="fe fe-arrow-left me-1"></i> Anterior
                                        </a>
                                    </li>
                                </ul>

                                <!-- Pagination -->
                                <ul class=" pagination pagination-tabs card-pagination"></ul>
                                <paginate-links   @change="onLangsPageChange" for="colaboradores" :classes="{'ul': ['list-pagination', 'pagination', 'pagination-tabs', 'cad-pagination'], 'a': ['page']}"></paginate-links>

                                <!-- Pagination (next) -->
                                <ul class="list-pagination-next pagination pagination-tabs card-pagination">
                                    <li class="page-item">
                                        <a class="page-link ps-4 pe-0 border-start" v-on:click="goNext()">
                                            Siguiente<i class="fe fe-arrow-right ms-1"></i>
                                        </a>
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

export default {
    name: 'indexColaboradorApp',

    data() {
        return {
            colaboradores: [],   
            paginate: ['colaboradores'],    
            currentPage: '1',
            perPage: '2'
        }
    },
    components: {
        Sidebar,
        TopNav
    }, 
    methods: {
        onLangsPageChange(toPage, fromPage) {
            // handle here…

            this.currentPage = toPage;
        },
        goPrev() {
         

            if (this.currentPage >=2) {
                   this.$refs.colaboradores.goToPage(this.currentPage--)
            } else {
                   this.$refs.colaboradores.goToPage(1)
            }
        },
        goNext() {
             if (this.currentPage <=Math.ceil(this.colaboradores.length/this.perPage)) {
                   this.$refs.colaboradores.goToPage(this.currentPage++)
            } else {
                   this.$refs.colaboradores.goToPage(Math.ceil(this.colaboradores.length/this.perPage))
            }
        }
    },
    beforeMount() {
        axios.get(this.$url + '/listar_usuarios_admin', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.$token
            }
        }).then((result => {
            this.colaboradores = result.data;
            console.log(colaboradores)
        })).catch((err => {
            console.log(err)
        }))
    }
}
</script>
