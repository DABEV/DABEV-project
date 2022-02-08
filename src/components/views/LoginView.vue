<template>
    <div align="center" class="center">
        <v-card elevation="8"> 
            <v-card-text>
                <v-avatar class="mr-3" color="grey lighten-5" size="60">
                        <img src="@/./assets/images/vue-logo.png">
                </v-avatar>       
                <p>INICIO DE SESIÓN</p>
                <div class="container">
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
    </div> 
</template>

<script>
export default {
  name: 'Login',
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
</style>