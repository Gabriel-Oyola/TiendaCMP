<template>
    <div>
        <section class="hero" style="margin-top: 11rem;">
            <div class="container">
                <!-- Breadcrumbs -->
               
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading mb-0">Customer zone</h1>
                </div>
            </div>
        </section>
        <!-- customer login-->
        <section>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="block">
                            <div class="block-header">
                                <h6 class="text-uppercase mb-0">Iniciar sesion</h6>
                            </div>
                            <div class="block-body">
                                
                                <p class="text-muted">Ingresa a tu cuenta para realizar una compra.</p>
                                <hr>
                                <form action="customer-orders.html" method="get">
                                    <div class="mb-4">
                                        <label class="form-label" for="email1">Correo electronico</label>
                                        <input class="form-control" id="email1" type="text" placeholder="correo electronico" autocomplete="off">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="password1">Contraseña</label>
                                        <input class="form-control" id="password1" type="password" placeholder="contraseña" autocomplete="off">
                                    </div>
                                    <div class="mb-4 text-center">
                                        <button class="btn btn-outline-dark" type="button"><i
                                                class="fa fa-sign-in-alt me-2"></i> Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="block">
                            <div class="block-header">
                                <h6 class="text-uppercase mb-0">Nueva cuenta</h6>
                            </div>
                            <div class="block-body">
                             
                                <p class="text-muted">Registrate para realizar tu compra y acceder a miles de promociones y beneficios de la web</p>
                             
                                <form action="customer-orders.html" method="get">
                                    <div class="mb-4">
                                        <label class="form-label" for="name">Nombre</label>
                                        <input class="form-control" id="name" type="text">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="email">Correo eletronico</label>
                                        <input class="form-control" id="email" type="text">
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label" for="password">Contraseña</label>
                                        <input class="form-control" id="password" type="password">
                                    </div>
                                    <div class="mb-4 text-center">
                                        <button class="btn btn-outline-dark" type="button"><i
                                                class="far fa-user me-2"></i>Registrar </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'LoginApp'
}


</script>