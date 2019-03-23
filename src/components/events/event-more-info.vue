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
                  {{description}}
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
  props: ['moreInfo', 'description'],
};
</script>

<style lang="css" scoped>
#map {

      }
</style>
