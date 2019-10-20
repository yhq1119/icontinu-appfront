<template>
  <v-app>
    <NavBar />
    <NavDrawer />
    <v-container fluid>
      <v-content>
        <v-col>
          <v-row>
          <v-col style="padding:0">
            <router-view></router-view>
          </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
        </v-row>
        </v-col>
        
      </v-content>
    </v-container>
    <BNav />
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import NavDrawer from "../components/NavDrawer";
import BNav from "../components/BottomNav";

export default {
  components: {
    NavBar,
    NavDrawer,
    BNav
  }
};
</script>

<style>
</style>