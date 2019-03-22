<template lang="html">
  <v-card class="elevation-5" :height= "heightC()">
    <v-container>
      <v-img :src="require(`@/assets/${event.images[0].link}`)"
            height="200"
            :aspect-ratio="16/9"
            class="primary lighten-2">
            <v-layout pa-2 column fill-height class="lightbox white--text">
              <v-flex class="event-date">
                <span class="date primary--text text--darken-4
                font-weight-bold">{{event.date.month}}
                {{event.date.day}}, {{event.date.year}}</span>
              </v-flex>
          <v-spacer></v-spacer>
          <v-flex shrink>
            <p :class="[
              {'body-1': $vuetify.breakpoint.xs},
              {'body-2': $vuetify.breakpoint.sm},
              {'title': $vuetify.breakpoint.md || $vuetify.breakpoint.lg},
              {'headline': $vuetify.breakpoint.xl}]"
              >
              <span class="type-event elevation-5">upcoming event</span><br />

            </p>

          </v-flex>

        </v-layout>
      </v-img>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="title primary--text text--darken-4 font-weight-medium pb-1 pt-3">
            {{event.title}}
          </div>
        </v-flex>
        <v-flex xs12>
          <div class="card-content caption primary--text text--darken-3 font-weight-light mb-4 mt-2">
            {{event.summary}}
          </div>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 sm6 >
              <v-btn :to="event.page" color="info" :class="['center', {'btn-xs mb-2':$vuetify.breakpoint.xs}]">
                <span class="primary--text text--darken-4 font-weight-bold">
                  More Info
                </span>
              </v-btn>
            </v-flex>
            <v-flex xs12 sm6>
              <v-btn :to="event.registrationLink" color="success" :class="['center', {'btn-xs':$vuetify.breakpoint.xs}]">
                <span class="primary--text text--darken-4 font-weight-bold">
                  Register
                </span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import JGMEvent from'@/components/events/events-list.js';
export default {

    data () {
      return {
        event: JGMEvent[0],
      }
    },
  methods: {
    heightC () {
      if (this.$vuetify.breakpoint.xs){
        return 'auto';
      }
      else if (this.$vuetify.breakpoint.xl){
        return '510';
      }
      else if (this.$vuetify.breakpoint.sm) {
        return '500'
      }
      else {
        return '560'
      }
    }
  },
};
</script>

<style lang="css" scoped>
/*Move to APp.js here and in event-preview*/

.btn-xs{
  width: 100%;
}
.card-content{
  height: 150px;
  overflow: scroll;
}
.type-event{
  background-color: var(--v-info-base);
  color: var(--v-success-darken4);
  padding:10px 20px 5px 20px;
  opacity:.89;
  letter-spacing: 1px;
}
.type-news{
  background-color: var(--v-accent-base);
  color: var(--v-primary-darken4);
  padding:10px 20px 5px 20px;
  opacity:.89;
  letter-spacing: 1px;
}
.event-date{
text-align: right;

}
.date{
  background:var(--v-accent-lighten4);
  padding:5px 20px 5px 20px;
  opacity: .9;
}
</style>
