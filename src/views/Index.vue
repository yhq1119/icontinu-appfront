<template>
  <v-container>
    <v-col>
      <v-row>
        <v-col>
          <v-img src="../assets/logo.png"></v-img>
        </v-col>
      </v-row>
     </v-col>
       <v-footer absolute>

      <v-row>
        <v-col style="padding:0">
          <v-btn id="btn1" block tile dark color="#3c3c3c" to="/login">Login</v-btn>
        </v-col>
        <v-col style="padding:0">
          <v-btn id="btn2" block tile dark color="#f26400" to="/signup">Sign up</v-btn>
        </v-col>
      </v-row>
      </v-footer>
   
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#bottom{
    position: absolute;
    bottom: 0;
}
// #btn1{
//     width: 100%;
// }
// #btn2{
//     width: 50%;
// }
</style>