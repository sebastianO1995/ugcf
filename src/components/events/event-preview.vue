<template lang="html">
  <v-container>
    <!-- PREVIEW -->
    <v-card class="elevation-20 o-bk">
      <v-layout row wrap>
        <!-- Image -->
        <v-flex x12 sm12 md4>
          <v-container>
            <v-img :src="require('@/assets/JGMT-Ball.jpg')"
                  cotain
                  height="240"
                  :aspect-ratio="16/9"
                  class="grey lighten-2">
                </v-img>
          </v-container>
        </v-flex>
        <!-- INFO -->
        <v-flex xs12 sm12 md8>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="headline left font-weight-medium  primary--text text--darken-4">
                  JGM Memorial Soccer Tournament
                </div>
              </v-flex>
              <v-flex xs12>
                <div :class="['py-1 pl-1 accent--text text--darken-4',
                  {'event-details-xs': $vuetify.breakpoint.xs},
                  {'event-details': $vuetify.breakpoint.smAndUp}] ">
                  <!-- Cost -->
                  <div class="event-cost">
                    <strong>Cost:</strong>
                    $

                  </div>
                  <!-- Date -->
                  <div class="event-date">
                    <strong>Date:</strong> Saturday, June 22nd, 2019


                  </div>
                  <!-- Time -->
                  <div class="event-time">
                    <strong>Time:</strong> 8:00am

                  </div>

                  <!-- Location -->
                  <div class="event-location">
                    <strong>Location:</strong>
                    <br />Fred Wolfe Soccer Park<br />300 Hollow Road<br />Orange, CT 06477

                  </div>


                </div>
              </v-flex>


            </v-layout row>
            <!-- BUTTONS -->
            <v-layout row wrap>
              <v-flex xs12 sm4>
                <v-btn color="info" v-on:click="showmore()" :class="{'btn-xs':$vuetify.breakpoint.xs}">
                  <span class="primary--text text--darken-4 font-weight-bold">
                    More Info
                  </span>
                </v-btn>
                <div class="hidden-sm-and-up">
                  <more-info :moreInfo="moreInfo"></more-info>
                </div>
              </v-flex>
              <v-flex xs12 sm4>
                <v-btn color="success" :class="{'btn-xs':$vuetify.breakpoint.xs}">
                  <span class="primary--text text--darken-4 font-weight-bold">
                    Register
                  </span>
                </v-btn>
              </v-flex>
              <v-flex xs12 sm4 :class="{'center mt-2':$vuetify.breakpoint.xs}">
                <v-layout row wrap>
                  <v-flex xs12>
                    <div class="font-weight-medium primary--text text--darken-4">
                      Social Media
                    </div>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn flat icon color="primary darken-2">
                      <v-icon size= "24px">fab fa-facebook</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>


      <!-- More Info -->
      <div class="hidden-xs-only">
        <more-info :moreInfo="moreInfo"></more-info>
      </div>


    </v-card>
  </v-container>

</template>

<script>
import eventMore from '@/components/events/event-more-info.vue';
export default {
  components:{
    'more-info': eventMore,
  },
  data() {
    return{
      moreInfo:false,

    };
  },
  methods:{
    showmore(){
      this.moreInfo = !this.moreInfo;
    }
  }
}
</script>

<style lang="css" scoped>
.event-details{
  height: 155px;

}
.event-details-xs{
  height: auto;

}
.btn-xs{
width:100%;
}

</style>
