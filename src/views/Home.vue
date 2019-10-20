<template>
  <div class="home">
    <v-btn @click="test">change name</v-btn>
    <v-btn @click="clear">clear name</v-btn>
    <v-btn @click="login">login name</v-btn>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  methods: {
    test() {},
    clear() {
      this.$store.commit("LOGOUT");
    },
    login() {
      let user = {
        isLogin: true,
        isAdmin: null,
        username: "ok do"
      };

      this.$store.commit("LOGIN", user);
    }
  }
};
</script>
