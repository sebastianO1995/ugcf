<template>
  <div>
    <section id="mission-vision-box" class="card-content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card v-for= "item in about" :key= "item.id" :id="item.id"
           :class="['main-card ontop elevation-5', {'mt-3': item.id === 'vision'} ]">
            <v-container>
              <div :class="['center font-weight-medium accent--text text--darken-4 pb-2',
              { 'display-2': $vuetify.breakpoint.smAndUp },
              { 'headline' : $vuetify.breakpoint.xs }]">
                ~ {{item.title}} ~
                <br />
                <hr class="style-two mt-3">
              </div>
              <div :class="['center mt-4 font-weight-light primary--text text--darken-4',
              { 'headline px-4' : $vuetify.breakpoint.smAndUp },
              { 'subheading font-weight-medium px-2' : $vuetify.breakpoint.xs }]">
                {{item.text}}

              </div>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <hr class="style-two"/>

    <section id="featured">
      <v-container>
        <div :class="['accent--text text--darken-4',
          { 'display-2 mt-4': $vuetify.breakpoint.smAndUp },
          { 'headline mt-3 center' : $vuetify.breakpoint.xs }]">
          Featured Content
        </div>
        <div>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg4>
                <!-- @ToDo: link buttons, decide where more info goes /create dynamic card -->
                <v-container><feature-card-jgmt></feature-card-jgmt></v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </div>
      </v-container>
    </section>
  </div>

</template>

<script>
import JGMEvent from '@/components/home/feature-card-jgmt';

export default {
  components: {
    'feature-card-jgmt': JGMEvent,
  },
  data() {
    return {
      about: [
        {
          id: 'mission',
          title: 'Our Mission',
          text: 'To build meaningful connections between people of different cultures in order to nurture compassionate and accepting communities across the world.',
        },
        {
          id: 'vision',
          title: 'Our Vision',
          text: 'To become a community development network that transcends cultural and geographical boundaries, cultivating a united global community.',
        },
      ],

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
