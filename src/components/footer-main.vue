<template lang="html">
  <v-footer color= "primary" height= "auto" app style="z-index:0 !important" >
  <v-layout justify center row wrap>
      <v-flex>
        <v-btn v-for= "item in footerItems" :key= "item.icon"
          class="mx-3" dark icon>
            <v-icon size= "24px">{{item.icon}}</v-icon>
        </v-btn>
      </v-flex>
      <v-flex py-3 white--text xs12 class= "grey darken-3">
        <span class="white--text" >&copy; 2018</span>
      </v-flex>
  </v-layout>
</v-footer>
</template>

<script>
export default {
  data() {
    return {
      footerItems: [
        {icon: 'fab fa-facebook'},
        {icon: 'fab fa-twitter'},
        {icon: 'fab fa-instagram'}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
