<template>
   <v-bottom-navigation  
    v-model="bottomNav"
    v-show="show"
    dark
    fixed
    app
  >
  <v-btn></v-btn>
    <v-btn value="profile" to="/user/profile">
      <span>Profile</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

 <v-btn value="account" to="/user/account">
      <span>Account</span>
      <v-icon>mdi-clipboard-check</v-icon>
    </v-btn>

     <v-btn value="recent" to="/user/upcoming">
      <span>Upcomming</span>
      <v-icon>mdi-calendar-clock</v-icon>
    </v-btn>

    <v-btn value="suggest" to="/user/suggest">
      <span>Suggest</span>
      <v-icon>mdi-calendar-text</v-icon>
    </v-btn>

    <v-btn value="more" to="/user/more">
      <span>More</span>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-btn></v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
data () {
      return {
        bottomNav: '',
        show:false
      }
    },
    methods:{
        onShow(){
            if(window.innerWidth<420){
                this.show = true
            }else
            {
                this.show = false
            }
        }
    },
    mounted(){
        this.onShow()
        window.addEventListener('resize',this.onShow)
    }
}
</script>

<style>

</style>