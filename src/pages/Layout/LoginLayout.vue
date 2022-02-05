<template>
    <v-app>
            <div class="content centerdos backimage">
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-100 md-size-80">
                        <login></login>
                    </div>
                </div>
            </div>
    </v-app>
</template>

<script>
import Login from '@/components/views/LoginView.vue'

export default {
    name: 'Access',
    components: {
        Login
    }
};
</script>

<style>
.backimage{
    background-image:linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://smart-lighting.es/wp-content/uploads/2020/11/0-aula-luz-natural.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.centerdos {
  padding: 140px;
}
</style>