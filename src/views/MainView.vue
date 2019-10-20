<template>
  <v-app>
    <NavBar />
    <NavDrawer />
    <v-container>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import NavDrawer from "../components/NavDrawer";

export default {
  components: {
    NavBar,
    NavDrawer
  }
};
</script>

<style>
</style>