<template lang="html">
  <div>
    <v-expand-transition>
      <div v-show="moreInfo">

          <hr class="style-two"/>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm12 md7 class="mb-1">
                <div class="title primary--text text--darken-4 pb-1">
                  About the event
                </div>
                <div class="body-2 font-weight-light primary--text text--darken-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </v-flex>
              <v-flex xs12 sm12 md5>
                <div class="title primary--text text--darken-4 pb-1">
                  Directions
                </div>
                <div id="map">

                </div>
              </v-flex>
            </v-layout>
          </v-container>

      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  props:['moreInfo']
}
</script>

<style lang="css" scoped>
#map {

      }
</style>
