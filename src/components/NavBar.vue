<template>
   <v-app-bar app dark color="#f26400">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggle_drawer" icon>
        <v-icon>
          mdi-menu
        </v-icon>
      </v-btn>
      <!-- <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn> -->
    </v-app-bar>

</template>

<script>
export default {
methods:{
  toggle_drawer(){
    this.$store.commit('TOGGLE_APP_DRAWER')
    // this.$store.setters.toggle_drawer()
  }
}
}
</script>

<style>

</style>