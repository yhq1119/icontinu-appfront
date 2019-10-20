<template>
  <v-navigation-drawer color="#f26400" dark :value="drawer" absolute temporary>
    <!--  -->
    <v-list-item>
      <v-list-item-avatar >
        <v-img v-if="user.isLogin" src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-if="user.isLogin">{{ user.username }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-flag</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title @click="set_username">Set Username</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!--  -->
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // drawer: null,
      // username:'',
      items: [
        { title: "Home", icon: "mdi-home", method: null },
        { title: "About", icon: "mdi-information", method: null }
        // { title: "set",icon:'mdi-flag',method:"set_username"}
      ]
    };
  },
  methods: {
    set_username() {
      console.log("click set");
    }
  },
  computed: {
    ...mapState(["app_drawer", "user"]),
    drawer() {
      return this.app_drawer;
    }
  },
  mounted() {
    console.log("drawer shows");
    if(this.app_drawer){
      console.log('appear')
    }
  }
  // mounted(){
  //     this.username = window.localStorage.getItem('username')

  // }
};
</script>

<style>
</style>