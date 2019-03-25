<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <div class="single-image" v-if="event.images.length <= 1">
          <v-img :src="require(`@/assets/${event.images[0].link}`)"
                height="300"
                :aspect-ratio="16/9"
                class="primary lighten-2">
          </v-img>
        </div>
        <!-- MORE IMAGES -->
        <div v-else class="carousel">
        </div>
      </v-flex>
      <v-flex xs12 sm6>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>

              <div :class="['py-1 pl-1 accent--text text--darken-4',
                {'event-details-xs': $vuetify.breakpoint.xs},
                {'event-details': $vuetify.breakpoint.smAndUp}] ">

                <v-layout row wrap>
                  <v-flex xs12 sm6 :class="{'mb-2': $vuetify.breakpoint.smAndDown}">
                    <!-- Date -->
                    <div class="title primary--text text--darken-4 font-weight-bold">
                      Date and Time
                    </div>
                    <div class="event-date">
                      {{event.date.dayOfWeek}}, {{event.date.month}}
                      {{event.date.day}}, {{event.date.year}}
                      <br />
                    </div>
                    <!-- Time -->
                    <div class="event-time">
                      {{event.time}}
                    </div>

                    <strong>Rain Date:</strong><br />
                    {{event.rain.dayOfWeek}}, {{event.rain.month}}
                    {{event.rain.day}}, {{event.rain.year}}
                  </v-flex>
                  <v-flex xs12 sm5 offset-sm1>
                    <div class="title primary--text text--darken-4 font-weight-bold">
                      Cost
                    </div>
                      <!-- Cost -->
                      <div class="event-cost">
                        <span v-if="!event.isFree">${{event.cost}} <br />
                          Includes: T-shirt, Lunch, and Water.<br/>
                          Concessions will be available.
                        </span>
                        <span v-else>Free</span>
                      </div>
                  </v-flex>
                </v-layout>

                  <br/>

                  <v-layout row wrap>
                    <v-flex xs12 sm6 :class="{'mb-2': $vuetify.breakpoint.smAndDown}">
                      <div class="title primary--text text--darken-4 font-weight-bold">
                        Location
                      </div>
                      <!-- Location -->
                      <div class="event-location">
                        {{event.location.name}}
                        <br />{{event.location.street}}
                        <br />{{event.location.city}}, {{event.location.state}}
                        {{event.location.zip}}

                      </div>
                    </v-flex>
                    <v-flex xs12 sm5 offset-sm1>
                      <v-btn color="success" :class="['center',{'btn-xs':$vuetify.breakpoint.xs}]"
                        :to="event.registrationLink">
                        <span class="primary--text text--darken-4 font-weight-bold">
                          Register
                        </span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-container>
          <div class="center">
            <div class="title primary--text text--darken-4 pb-1">
              About the Event
            </div>
            <div class="body-2 font-weight-light primary--text text--darken-4">
              {{event.description}}
            </div>
          </div>

        </v-container>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-container>
          <div>
            <div class="title primary--text text--darken-4 pb-2">
              Photo Gallery
            </div>
            <v-carousel :height="getHeight()">
              <v-carousel-item
                v-for="(item,i) in event.gallery"
                :key="i"
                :src="require(`@/assets/JGM-Soccer/${item.link}`)"
                ></v-carousel-item>
            </v-carousel>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-container>
          <div>
            <div class="title primary--text text--darken-4 pb-1">
              Social Media Links
            </div>
            <v-btn flat icon color="primary darken-2" :href="social.link"
              v-for="social in event.socials" :key="social.item">
              <v-icon size= "30px">{{social.icon}}</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JGMEvent from '@/components/events/events-list';

export default {
  data() {
    return {
      event: JGMEvent[0],
    };
  },
  methods: {
    getHeight() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return '200';
      }
      return '500';
    },
  },
};
</script>

<style lang="css" scoped>
.btn-xs{
width:100%;
}
</style>
