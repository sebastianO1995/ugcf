<template lang="html">
  <div class="bw">

    <v-img :src="require('@/assets/team/team.jpg')"

          :class="['primary lighten-2',
            {'hh-md': $vuetify.breakpoint.mdAndUp},
            {'hh-sm': $vuetify.breakpoint.smAndDown}]"

            gradient="to bottom left, rgba(187,225,255,.33), rgba(0,0,0,.8)"

            :position="posCalc()">

            <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex center>
            <p :class="['page-title',
              {'display-1': $vuetify.breakpoint.xs},
              {'display-2': $vuetify.breakpoint.sm},
              {'display-3': $vuetify.breakpoint.md || $vuetify.breakpoint.lg},
              {'display-4': $vuetify.breakpoint.xl}]"
              >
              Who we are
            </p>
            <v-container>
              <div class="title hidden-xs-only">
                <!-- @ToDo: Team Description -->
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </v-container>


          </v-flex>

        </v-layout>

    </v-img>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  methods:{
    posCalc(){
      if(this.$vuetify.breakpoint.mdAndUp){
        return 'center 5%'
      }
      else if (this.$vuetify.breakpoint.smAndDown) {
        return 'center center'

      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
