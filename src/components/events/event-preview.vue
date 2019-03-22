<template lang="html">
  <v-container>
    <!-- PREVIEW -->
    <v-card class="elevation-20 o-bk">
      <v-layout row wrap>
        <!-- Image -->
        <v-flex x12 sm12 md4>
          <v-container>
            <div class="single-image" v-if="event.images.length <= 1">
              <v-img :src="require(`@/assets/${event.images[0].link}`)"
                    height="240"
                    :aspect-ratio="16/9"
                    class="primary lighten-2">
              </v-img>
            </div>
            <!-- MORE IMAGES -->
            <div v-else class="carousel">

            </div>


          </v-container>
        </v-flex>
        <!-- INFO -->
        <v-flex xs12 sm12 md8>
          <v-container>
            <v-layout row wrap class="pb-2">
              <v-flex xs12>
                <div class="headline left font-weight-medium  primary--text text--darken-4">
                  {{event.title}}
                </div>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-2">
              <v-flex xs12 sm6>
                <div :class="['py-1 pl-1 accent--text text--darken-4',
                  {'event-details-xs': $vuetify.breakpoint.xs},
                  {'event-details': $vuetify.breakpoint.smAndUp}] ">
                  <!-- Cost -->
                  <div class="event-cost">
                    <strong>Cost:</strong>
                    <span v-if="!event.isFree">${{event.cost}}</span>
                    <span v-else>Free</span>

                  </div>
                  <!-- Date -->
                  <div class="event-date">
                    <strong>Date:</strong> {{event.date.dayOfWeek}}, {{event.date.month}}
                    {{event.date.day}}, {{event.date.year}}


                  </div>
                  <!-- Time -->
                  <div class="event-time">
                    <strong>Time:</strong> {{event.time}}

                  </div>

                  <!-- Location -->
                  <div class="event-location">
                    <strong>Location:</strong>
                    <br />{{event.location.name}}
                    <br />{{event.location.street}}
                    <br />{{event.location.city}}, {{event.location.state}}
                    {{event.location.zip}}

                  </div>


                </div>
              </v-flex>
              <v-flex xs12 sm6>
                <div class="title primary--text text--darken-4 pb-1">
                  About the event
                </div>
                <div class="body-2 font-weight-light primary--text text--darken-4">
                  {{event.summary}}
                </div>
              </v-flex>


            </v-layout row>
            <!-- BUTTONS -->
            <v-layout row wrap>
              <v-flex xs12 sm4>
                <v-btn :to="event.page" color="info" :class="{'btn-xs':$vuetify.breakpoint.xs}">
                  <span class="primary--text text--darken-4 font-weight-bold">
                    More Info
                  </span>
                </v-btn>
              </v-flex>
              <v-flex xs12 sm4 v-if="event.registration">
                <v-btn color="success" :class="{'btn-xs':$vuetify.breakpoint.xs}"
                  :to="event.registrationLink">
                  <span class="primary--text text--darken-4 font-weight-bold">
                    Register
                  </span>
                </v-btn>
              </v-flex>
              <v-flex xs12 sm4 :class="{'center mt-2':$vuetify.breakpoint.xs}"
                v-if="event.socialMedia">
                <v-layout row wrap>
                  <v-flex xs12>
                    <div class="font-weight-medium primary--text text--darken-4">
                      Social Media
                    </div>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn flat icon color="primary darken-2"
                      v-for="social in event.socials" :key="social.item">
                      <v-icon size= "24px">{{social.icon}}</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>

      <!-- More Info -->
      <!-- <div class="hidden-xs-only">
        <more-info :moreInfo="moreInfo" :description="event.description"></more-info>
      </div> -->
    </v-card>
  </v-container>

</template>

<script>
import eventMore from '@/components/events/event-more-info.vue';

export default {
  props: ['event'],
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
