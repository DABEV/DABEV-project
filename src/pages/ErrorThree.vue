<template>
        <v-app>
            <v-app-bar app color="white" height="100">
                <v-avatar class="mr-3" color="grey lighten-5" size="60">
                    <img contain max-height="70%" src="@/./assets/images/vue-logo.png">
                </v-avatar>
                <v-toolbar-title class="font-weight-black headline">
                    Becas escolares DAVEB
                </v-toolbar-title>
            </v-app-bar>
            <div>
                    <div align="center" class="center">
                        <img src="@/assets/images/errorThree.png" />
                        <h1>Lo sentimos...</h1>
                        <h3>No ha sido posible completar la petición que realizaba</h3>
                        <br>
                        <v-btn
                        class="ma-1"
                        outlined
                        rounded
                        color="primary"
                        >
                        Volver a la página principal
                        </v-btn>
                    </div>
            </div>
        </v-app>    
</template>

<script>

export default {
    name: 'ErrorThree',
    components: {
    }
};
</script>

<style>
h3{
  color: rgb(109, 109, 109);
}
img{
  width: 100%;
  height: 100%;
}
.center {
  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>