<template lang="html">
    <section id="events-box" class="card-content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card id="upcoming-events" class="main-card ontop">
            <v-container>
              <div :class="[{'display-1': $vuetify.breakpoint.xs},
                  {'display-2': $vuetify.breakpoint.smAndUp},'primary--text text--darken-4']">
                Upcoming Events
              </div>
              <hr class="style-eight mt-3" />
              <div class="mt-4">
                 <div class="mt-4 headline center">
                No Upcoming Events
              </div>
              </div>
            </v-container>
          </v-card>

          <v-card id="past-events" class=" main-card ontop mt-3">
            <v-container>
              <div :class="[{'display-1': $vuetify.breakpoint.xs},
                  {'display-2': $vuetify.breakpoint.smAndUp},'primary--text text--darken-4']">
                Past Events
              </div>
              <hr class="style-eight mt-3" />
              <div class="mt-4 headline center">
                No Past Events
              </div>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </section>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
#events-box {
  overflow-wrap: break-word;
}
</style>
