<template>
<div class="container">
        <v-card class="center" elevation="8"> 
            <v-card-text>
                <img src="@/./assets/images/vue-logo.png">       
                <p>INICIO DE SESIÓN</p>
                <div align="center" class="container">
                    <v-text-field label="Correo electrónico" outlined prepend-inner-icon="mdi-email"></v-text-field>
                    <v-text-field label="Contraseña" outlined prepend-inner-icon="mdi-lock"></v-text-field>
                    <v-checkbox
                    label="Recuérdame"
                    color="primary"
                    ></v-checkbox>
                </div>
                <v-btn
                class="ma-1"
                outlined
                rounded
                @click="alert = !alert"
                color="primary"
                >
                Iniciar sesión
                </v-btn>
                <br>
                <v-btn text>
                <u>Registrarse</u>
                </v-btn>
            </v-card-text>
        </v-card>   
        <v-alert
        class="right"
        dismissible
        :value="alert"
        border="right"
        colored-border
        type="error"
        transition="scale-transition"
        elevation="6"
        >
        Error 2001:<br>
        No se pueden dejar campos vacíos al momento de Iniciar Sesión.
        </v-alert>
</div>        
</template>

<script>
export default {
  name: 'Login',
  data () {
      return {
        alert: true,
      }
    },
  props: {
    msg: String
  }
}
</script>

<style>
.v-text-field{
      width: 300px;
}
.v-card{
    opacity: 90%;
    color: solid;
    text-align: center;
}
p{
    color: black;
    text-shadow:  0 0 0.2em rgb(34, 34, 34);
}
img{
    height: 60px;
    width: 70px;
}
.center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.right {
    position: absolute;
    left: 100%;
    top: 85%;
    transform: translate(-100%, -60%);
}
</style>