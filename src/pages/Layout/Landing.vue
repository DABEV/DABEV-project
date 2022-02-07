<template>
    <div>
        <v-app>
            <v-app-bar app color="white" height="100">
                <v-avatar class="mr-3" color="grey lighten-5" size="60">
                    <img contain max-height="70%" src="@/./assets/images/vue-logo.png">
                </v-avatar>
                <v-toolbar-title class="font-weight-black headline">
                    Becas escolares DAVEB
                </v-toolbar-title>
            </v-app-bar>
            <v-content>
                <section id="hero">
                    <v-row no-gutters>
                        <v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80">
                            <v-theme-provider dark>
                                <v-container fill-height>
                                    <v-row align="center" class="white--text mx-auto" justify="center">
                                        <v-col class="white--text text-center" cols="12" tag="h1">
                                            <span :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']" class="font-weight-light">
                          BIENVENIDO A
                        </span>
                                            <br>
                                            <span :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']" class="font-weight-black">
                          DAVEB
                        </span>
                                        </v-col>
                                        <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                                            <v-icon>mdi-chevron-double-down</v-icon>
                                        </v-btn>
                                    </v-row>
                                </v-container>
                            </v-theme-provider>
                        </v-img>
                    </v-row>
                </section>
                <section id="about-me">
                    <div class="py-12"></div>
                    <v-container class="text-center">
                        <h2 class="display-2 font-weight-bold mb-3">SOBRE NOSOTROS</h2>
                        <v-responsive class="mx-auto mb-8" width="56">
                            <v-divider class="mb-1"></v-divider>
                            <v-divider></v-divider>
                        </v-responsive>
                        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
                            Registro de becas para estudiantes en general. Dentro DAVEB nos interesamos en el progreso de los estudiantes profesionistas del futuro. Brindamos becas a cualquier estudiante que requiera un apoyo económico para sobrellevar sus estudios de cualquier
                            nivel educativo.
                        </v-responsive>
                        <v-avatar class="elevation-12 mb-12" size="128">
                            <v-img src="https://images.unsplash.com/photo-1512847930783-39fdc971594b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></v-img>
                        </v-avatar>
                        <div></div>
                    </v-container>
                    <div class="py-12"></div>
                </section>
                <section id="features" class="grey lighten-3">
                    <div class="py-12"></div>
                    <v-container>
                        <h2 class="text-center display-2 font-weight-bold mb-3">REGISTRAR ESTUDIANTES</h2>
                        <v-responsive class="mx-auto mb-12" width="56">
                            <v-divider class="mb-1"></v-divider>
                            <v-divider></v-divider>
                        </v-responsive>
                        <v-row>
                            <div class="col-md-4" align="center">
                                <v-text-field label="Nombre" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
                                <v-text-field label="Primer Apellido" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
                                <v-text-field label="Segundo Apellido" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
                                <v-text-field label="Fecha de nacimiento" outlined prepend-inner-icon="mdi-calendar-today"></v-text-field>
                            </div>
                            <div class="col-md-4" align="center">
                                <v-text-field label="Martrícula" outlined prepend-inner-icon="mdi-clipboard-account"></v-text-field>
                                <v-text-field label="Grado de estudios" outlined prepend-inner-icon="mdi-bookmark-box-multiple"></v-text-field>
                                <v-text-field label="Escuela" outlined prepend-inner-icon="mdi-school"></v-text-field>
                                <v-text-field label="Telefono" outlined prepend-inner-icon="mdi-phone"></v-text-field>
                            </div>
                            <div class="col-md-4" align="center">
                                <v-text-field label="Beca" outlined prepend-inner-icon="mdi-file-document"></v-text-field>
                                <v-text-field label="Correo electrónico" outlined prepend-inner-icon="mdi-email"></v-text-field>
                            </div>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn class="ma-2" outlined rounded large color="indigo">
                                Registrarse
                            </v-btn>
                        </v-row>
                    </v-container>
                    <div class="py-12"></div>
                </section>
                <section id="stats">
                    <div class="parallax">
                        <v-container fill-height>
                            <v-row class="mx-auto">
                                <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                                    <div class="text-center letra">
                                        <div class="display-3 font-weight-black mb-4 " v-text="value"></div>
                                        <div class="title font-weight-regular text-uppercase " v-text="title"></div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </section>
                <section id="blog">
                    <div class="py-12"></div>
                    <v-container>
                        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">REGISTRAR BECA</h2>
                        <v-responsive class="mx-auto mb-12" width="56">
                            <v-divider class="mb-1"></v-divider>
                            <v-divider></v-divider>
                        </v-responsive>
                        <v-row>
                            <div class="col-md-6" align="center">
                                <v-text-field label="Nombre" outlined prepend-inner-icon="mdi-account-circle"></v-text-field>
                                <v-text-field label="Monto" outlined prepend-inner-icon="mdi-currency-usd"></v-text-field>
                                <v-text-field label="Perido" outlined prepend-inner-icon="mdi-calendar-range"></v-text-field>
                            </div>
                            <div class="col-md-6" align="center">
                                <v-text-field label="Institución" outlined prepend-inner-icon="mdi-domain"></v-text-field>
                                <v-textarea label="Descripción" name="input-7-4" outlined prepend-inner-icon="mdi-file-document"></v-textarea>
                            </div>
                        </v-row>
                        <v-row class="justify-center">
                            <v-btn class="ma-2" outlined rounded large color="indigo">
                                Registrarse
                            </v-btn>
                        </v-row>
                    </v-container>
                    <div class="py-12"></div>
                </section>
            </v-content>
        </v-app>
    </div>
</template>
<script>
export default {
    name: '#app',
    data() {
        return {
            stats: [
                ['108k', 'Becarios beneficiados'],
                ['28+', 'Estados asociados'],
                ['51m', 'Pesos repartidos'],
                ['12K', 'Becas disponibles'],
            ],
        }
    }
}
</script>
<style>
.v-text-field{
      width: 300px;
}
.parallax {
    /* The image used */
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url("https://th.bing.com/th/id/R.744877dd360fd44a37b4992eedeaa373?rik=hlErMSRH4Nk2cw&riu=http%3a%2f%2fsocialevo.net%2fwp-content%2fuploads%2fmax-tele-720x479.jpg&ehk=u2Y1dTYKNn8ADZT8IFv4yPAJAevIk0S6si8WDg9oPN0%3d&risl=&pid=ImgRaw&r=0");
    /* Set a specific height */
    min-height: 400px;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.letra {
    color: white;
    padding: 100px;
    text-align: center;
}
</style>


