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
                  Editar producto
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
                <select name="" class="form-select" v-model="producto.categoria">
                  <option value="" disabled selected>Seleccionar</option>
                  <option :value="item" v-for="item in $categorias">{{ item }}</option>

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
                  <option :value="item" v-for="item in subcategorias">{{ item }}</option>

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
                <input type="number" readonly class="form-control" placeholder="Precio" v-model="producto.precio">

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

          <!-- Button -->
          <button class="btn btn-primary" v-on:click="validar()">
            Actualizar producto
          </button>
          <!-- Divider -->
          <hr class="mt-4 mb-5">



          <div class="row justify-content-between align-items-center mb-5">
            <div class="col-12">

              <!-- Heading -->
              <h2 class="mb-2">
                Variedades de producto
              </h2>

              <!-- Text -->
              <p class="text-muted mb-xl-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore aspernatur, beatae id quod
                consequuntur.
              </p>
            </div>

          </div>

          <div class="row mb-5">
            <div class="col-lg-5">
              <small class="text-muted">
                Proveedor
              </small>
              <input type="text" class="form-control" placeholder="Empresa proveedora" v-model="variedad.proveedor">
            </div>
            <div class="col-lg-5">
              <small class="text-muted">
                Variedad
              </small>
              <input type="text" class="form-control" placeholder="Tallas, colores..." v-model="variedad.variedad">
            </div>
            <div class="col">
              <small class="text-muted">
                Acción*
              </small> <br>
              <button class="btn btn-primary btn-block" style="width: 100% !important;"
                v-on:click="validar_variedad()">Agregar</button>
            </div>
          </div>

          <div class="card">
            <div class="card-body" v-if="variedades.length >= 1">

              <!-- List group -->
              <div class="list-group list-group-flush my-n3">

                <div class="list-group-item" v-for="item in variedades">
                  <div class="row align-items-center">
                    <div class="col">

                      <!-- Heading -->
                      <h4 class="mb-1">
                        {{ item.variedad.toUpperCase() }}
                      </h4>

                      <!-- Text -->
                      <small class="text-muted">
                        <b>SKU: </b>{{ item.sku.toUpperCase() }}
                      </small>

                    </div>
                    <div class="col">
                      <h4 class="mb-1">
                        {{ item.stock }}
                      </h4>

                      <!-- Text -->
                      <small class="text-muted">
                        Unidades
                      </small>

                    </div>
                    <div class="col-auto">

                      <!-- Button -->
                      <button v-if="item.stock == 0" class="btn btn-sm btn-danger" type="button"
                        v-b-modal="'delete-' + item._id">
                        Eliminar
                      </button>


                      <button v-if="item.stock >= 1" disabled class="btn btn-sm btn-danger" type="button"
                        v-b-modal="'delete-' + item._id">
                        Eliminar
                      </button>


                      <b-modal centered :id="'delete-' + item._id" title="BootstrapVue"
                        title-html="<h4 class='card-header-title'><b>Add a member</b></h4>" @ok="eliminar(item._id)">
                        <p class="my-4">{{ item._id }} Eliminar?</p>
                      </b-modal>

                    </div>
                  </div> <!-- / .row -->
                </div>

              </div>

            </div>
            <div class="card-body" v-if="variedades.length == 0">
              <div class="row">
                <div class="col-12 text-center">
                  <img src="/assets/img/la cuna de newton.gif" alt="" style="width: 80px;">
                </div>
              </div>
            </div>
          </div>

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
  name: 'EditProductoApp',
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
        str_variedad: ''

      },
      subcategorias: ['Hombre', 'Mujer', 'Accesorios'],
      portada: undefined,
      variedad: {},
      sku: '',
      variedades: [],
    }
  },
  methods: {

    init_data() {
      axios.get(this.$url + '/obtener_producto_admin/' + this.$route.params.id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
      }).then((result) => {
        this.producto = result.data;
        this.str_image = this.$url + '/obtener_portada_producto/' + this.producto.portada;

      })
    },
    uploadImage($event) {

      var image;

      if ($event.target.files.length >= 1) {
        image = $event.target.files[0]
      }

      if (image.size <= 100000) {

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
        this.portada = undefined;
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

      } else if (!this.producto.subcategoria) {
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
      }
      else if (!this.producto.str_variedad) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la variedad del producto',
          type: 'error'
        })
      }
      else if (this.producto.portada == undefined) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Selecccione una imagen de portada',
          type: 'error'
        })
      } else {
        this.Actualizar()
      }
    },

    Actualizar() {
      var data;
      var content = '';

      if (this.poratda != undefined) {
        content = 'multipart/form-data';
        data = new FormData();
        fm.append('titulo', this.producto.titulo);
        fm.append('categoria', this.producto.categoria);
        fm.append('subcategoria', this.producto.subcategoria);
        fm.append('descripcion', this.producto.descripcion);
        fm.append('estado', this.producto.estado);
        fm.append('descuento', this.producto.descuento);
        fm.append('portada', this.producto.portada);
        fm.append('str_variedad', this.producto.str_variedad);
      } else {
        content = 'application/json';
        data = this.producto;
      }

      axios.put(this.$url + '/actualizar_producto_admin/' + this.$route.params.id, data, {
        headers: {
          'Content-Type': content,
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
            text: 'Se actualizo correctamente el producto',
            type: 'success'
          })
          this.$router.push({ name: 'index-producto' })
        }
      })

    },

    validar_variedad() {

      if (!this.variedad.proveedor) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese el proveedor del producto',
          type: 'error'
        })
      } else if (!this.variedad.variedad) {
        this.$notify({
          group: 'foo',
          title: 'ERROR',
          text: 'Ingrese la variedad del producto',
          type: 'error'
        })
      } else {

        this.variedad.producto = this.$route.params.id;
        this.variedad.sku = this.generar_sku()
        console.log(this.variedad)
        this.registro_variedad();

      }
    },

    registro_variedad() {

      axios.post(this.$url + '/registro_variedad_producto', this.variedad, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
      }).then((result) => {
        this.variedad = {}
        this.$notify({
          group: 'foo',
          title: 'SUCCESS',
          text: 'Se agrego una nueva variedad',
          type: 'success'
        })
        this.init_variedades();
      })

    },
    generar_sku() {
      let sku = this.producto.titulo.substr(0, 3) + '' + this.producto.str_variedad.substr(0, 3) + '' + this.variedad.variedad.substr(0, 3) + '' + this.variedad.proveedor.substr(0, 3)

      return sku.toUpperCase();


    },

    init_variedades() {
      axios.get(this.$url + '/obtener_variedad_producto/' + this.$route.params.id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.$store.state.token
        }
      }).then((result) => {

        this.variedades = result.data;
        console.log(this.variedades)
        /*
      this.variedad = {}
       this.$notify({
        group: 'foo',
        title: 'SUCCESS',
        text: 'Se agrego una nueva variedad',
        type: 'success'
      })*/
      })
    },

    eliminar(id) {
      axios.delete(this.$url + '/eliminar_variedad_producto/' + id, {
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
            text: 'Se elimino la variedad',
            type: 'success'
          })

          this.init_variedades()
        }


      })
    }

  },

  beforeMount() {
    this.init_data();
    this.init_variedades();
  }
}

</script>
