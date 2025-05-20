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
                                    Galería de productos
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
                                            Galería de productos
                                        </a>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

              <div class="mb-7">
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
                            <input type="file" class="form-control" placeholder="Selecciona la imagen">
                            <button class="btn btn-primary">
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

                <div class="row listAlias">
                    <div class="col-12 col-md-6 col-xl-4">
                        <div class="card">
                            <a href="project-overview.html">
                                <img src="https://dashkit.goodthemes.co/assets/img/avatars/projects/project-1.jpg" alt="..." class="card-img-top">
                            </a>
                            <div class="card-footer card-footer-boxed">
                            <div class="row">
                                <div class="col text-center">
                                    <a href="" class="text-danger">Eliminar imagen</a>
                                </div>
                                
                            </div> <!-- / .row -->
                            </div>
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
  name: 'GaleriaProductoApp',
    components: {
        Sidebar,
        TopNav
    }, 
}
</script>
