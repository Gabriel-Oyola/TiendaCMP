<template>
  <div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style="height: 100%;">
        <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">

          <!-- Heading -->
          <h1 class="display-4 text-center mb-3">
            Ingresar al Sistema
          </h1>

          

          <!-- Form -->
          <form>

            <div v-if="msm_error" class="alert alert-danger" role="alert">
                {{ msm_error }}
</div>
            <!-- Email address -->
            <div class="form-group">

              <!-- Label -->
              <label class="form-label">
                Correo
              </label>

              <!-- Input -->
              <input type="email" class="form-control" placeholder="name@address.com" v-model="email">

            </div>

            <!-- Password -->
            <div class="form-group">
              <div class="row">
                <div class="col">

                  <!-- Label -->
                  <label class="form-label">
                    Contraseña
                  </label>

                </div>
              
              </div> <!-- / .row -->

              <!-- Input group -->
              <div class="input-group input-group-merge">

                <!-- Input -->
                <input class="form-control" type="password" placeholder="contraseña..." v-model="password">

                <!-- Icon -->
                <span class="input-group-text">
                  <i class="fe fe-eye"></i>
                </span>

              </div>
            </div>

            <!-- Submit -->
            <button class="btn btn-lg w-100 btn-primary mb-3" type="button" v-on:click="validar()">
              Login
            </button>

            <!-- Link -->
          

          </form>

        </div>
      </div> <!-- / .row -->
    </div> <!-- / .container -->
  </div>
</template>

<script>
export default {
  name: 'LoginApp',
 data(){
    return{
        email: '',
        password: '', 
        msm_error: '' 

    }
    },
    methods:{
    validar(){
        if (!this.email) {
                this.msm_error = 'Ingrese un correo'
        } else if (!this.password) {
                this.msm_error = 'Ingrese una contraseña'
            }
        else {
            this.msm_error= ""
        }
        }
    }
}

</script>

