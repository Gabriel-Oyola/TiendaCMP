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

              

            </div>
        </div>


    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'Bienvenido',
    components: {
        Sidebar,
        TopNav
    }, 
}
</script>
