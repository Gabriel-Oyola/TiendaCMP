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
                    <router-link class="nav-link" to="/producto">Todos los productos</router-link>
                  </li>
                  <li class="nav-item">

                    <a class="nav-link active">
                      Nuevo producto
                    </a>


                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>

        <div class="mb-5">

          <div class="row justify-content-between align-items-center">
            <div class="col">
              <div class="row align-items-center">
                <div class="col-auto">

                  <!-- Avatar -->
                  <div class="avatar">
                    <img class="avatar-img rounded-circle" :src="str_image" alt="...">
                  </div>

                </div>
                <div class="col ms-n2">

                  <!-- Heading -->
                  <h4 class="mb-1">
                    <b>Portada</b>
                  </h4>

                  <!-- Text -->
                  <small class="text-muted">
                    Imagenes con formato PNG O JPG O WEBP
                  </small>

                </div>
              </div> <!-- / .row -->
            </div>
            <div class="col-auto">

              <!-- Button -->

              <label for="file-upload" class="btn btn-sm btn-primary">
                Upload
              </label>
              <input style="display:none" id="file-upload" type="file" v-on:change="uploadImage($event)" />

            </div>
          </div> <!-- / .row -->

          <!-- Divider -->
          <hr class="my-5">

          <div class="row">
            <div class="col-12 col-md-12">

              <!-- Email address -->
              <div class="form-group">

                <!-- Label -->
                <label class="mb-1">
                  Título del producto
                </label>



                <!-- Input -->
                <input type="text" class="form-control" placeholder="Título del producto" v-model="producto.titulo">

              </div>

            </div>
            <div class="col-12 col-md-6">

              <!-- First name -->
              <div class="form-group">

                <!-- Label -->
                <label class="form-label">
                  Categoria
                </label>

                <!-- Input -->
                <select name="" class="form-select" v-model="producto.categoria" v-on:change="getSubcategorias($event)">
                  <option value="" disabled selected>Seleccionar</option>
                  <option :value="item.categoria.titulo" v-for="item in categorias ">{{ item.categoria.titulo }}</option>

                </select>

              </div>

            </div>

            <div class="col-12 col-md-6">

              <!-- First name -->
              <div class="form-group">

                <!-- Label -->
                <label class="form-label">
                  SubCategoria
                </label>

                <!-- Input -->
                <select name="" class="form-select" v-model="producto.subcategoria">
                  <option value="" disabled selected>Seleccionar</option>
                  <option :value="item.titulo" v-for="item in subcategorias">{{ item.titulo }}</option>

                </select>

              </div>

            </div>
            <div class="col-12 col-md-6">

              <!-- Last name -->
              <div class="form-group">

                <!-- Label -->
                <label class="form-label">
                  Variedad
                </label>

                <!-- Input -->
                <input type="text" class="form-control" placeholder="Titulo de la variedad"
                  v-model="producto.str_variedad">

              </div>

            </div>
            <div class="col-12 col-md-6">

              <!-- Last name -->
              <div class="form-group">

                <!-- Label -->
                <label class="form-label">
                  Precio
                </label>

                <!-- Input -->
                <input disabled type="number" class="form-control" placeholder="Precio" value="0">

              </div>

            </div>

            <div class="col-12 col-md-12">

              <!-- Phone -->
              <div class="form-group">

                <!-- Label -->
                <label class="form-label">
                  Descripción
                </label>

                <!-- Input -->
                <textarea class="form-control" id="" rows="3" placeholder="..."
                  v-model="producto.descripcion"></textarea>

              </div>

            </div>

          </div> <!-- / .row -->



          <div class="row">
            <div class="col-12 col-md-6">

              <!-- Public profile -->
              <div class="form-group">

                <!-- Label -->
                <label class="mb-1">
                  Producto publicado
                </label>

                <!-- Form text -->
                <small class="form-text text-muted">
                  Making your profile public means that anyone on the Dashkit network will be able to find you.
                </small>

                <div class="row">
                  <div class="col-auto">

                    <!-- Switch -->
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="switchOne" v-model="producto.estado" />
                      <label class="form-check-label" for="switchOne"></label>
                    </div>

                  </div>
                  <div class="col ms-n2">

                    <!-- Help text -->
                    <small class="text-muted">
                      Borrador activado
                    </small>

                  </div>
                </div> <!-- / .row -->
              </div>

            </div>
            <div class="col-12 col-md-6">

              <!-- Allow for additional Bookings -->
              <div class="form-group">

                <!-- Label -->
                <label class="mb-1">
                  En descuento
                </label>

                <!-- Form text -->
                <small class="form-text text-muted">
                  If you are available for hire outside of the current situation, you can encourage others to hire you.
                </small>

                <div class="row">
                  <div class="col-auto">

                    <!-- Switch -->
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="switchTwo" v-model="producto.descuento" />
                      <label class="form-check-label" for="switchTwo"></label>
                    </div>

                  </div>
                  <div class="col ms-n2">

                    <!-- Help text -->
                    <small class="text-muted">
                      Descuento desactivado
                    </small>

                  </div>
                </div> <!-- / .row -->
              </div>

            </div>
          </div> <!-- / .row -->

          <!-- Divider -->
          <hr class="mt-4 mb-5">

          <!-- Button -->
          <button class="btn btn-primary" v-on:click="validar()">
            Crear producto
          </button>


        </div>

        <hr>


      </div>
    </div>



  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/TopNav.vue'
import axios from 'axios'

export default {
  name: 'CreateProductoApp',
  components: {
    Sidebar,
    TopNav
  },
  data() {
    return {
      str_image: '',
      producto: {
        titulo: '',
        categoria: '',
        precio: '',
        descripcion: '',
        estado: false,
        descuento: false,
        portada: undefined,
        str_variedad: '',
        subcategoria: ''
        



      },
      categorias: [],
      subcategorias: [],
      
      portada: undefined
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
          this.portada = image;
          this.producto.portada = this.portada

        } else {
          this.$notify({
            group: 'foo',
            title: 'ERROR',
            text: 'Por favor sube una imagen',
            type: 'error'
          })

          this.portada = undefined;
        }

      } else {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Imagen mayor a 1MB',
          type: 'error'
        });
      }
    },
    validar() {

      if (!this.producto.titulo) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese el titulo del producto',
          type: 'error'
        })
      } else if (!this.producto.categoria) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la categoría del producto',
          type: 'error'
        })
      }else if (!this.producto.subcategoria) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la subcategoría del producto',
          type: 'error'
        })
      }
       else if (!this.producto.descripcion) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la descripcion del producto',
          type: 'error'
        })
      } else if (!this.producto.str_variedad) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la variedad del producto',
          type: 'error'
        })
      } else if (this.producto.portada == undefined) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Selecccione una imagen de portada',
          type: 'error'
        })
      } else {
        this.registro()
      }
    },

    registro() {
      var fm = new FormData();
      fm.append('titulo', this.producto.titulo);
      fm.append('categoria', this.producto.categoria);
      fm.append('subcategoria', this.producto.subcategoria);
      fm.append('descripcion', this.producto.descripcion);
      fm.append('estado', this.producto.estado);
      fm.append('descuento', this.producto.descuento);
      fm.append('portada', this.producto.portada);
      fm.append('str_variedad', this.producto.str_variedad);

      axios.post(this.$url + '/registro_producto_admin', fm, {
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
          this.$router.push({ name: 'index-producto' })
        }

      })

    }, 

    init_categorias() {
            axios.get(this.$url + '/listar_categorias_admin', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result) => {
                
                this.categorias = result.data;
            })
        },

        getSubcategorias(event){
            this.subcategorias = this.categorias.filter(item=>item.categoria.titulo == event.target.value)[0].subcategorias;
        }
  },
  
  beforeMount(){
    this.init_categorias();
  },
}

</script>
