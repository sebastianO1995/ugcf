<template>
  <div class="page">

    <section id="mission-vision-box" class="card-content">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card id="our-mission" class="main-card ontop">
            <v-container>
              <div class="display-2 center underTitle">
                ~ Our Mission ~
              </div>
              <div class="center mt-4 headline">
                To build meaningful connections between people of different
                cultures in order to nurture compassionate and accepting
                communities across the world.

              </div>
            </v-container>
          </v-card>

          <v-card id="our-vision" class="main-card ontop mt-3">
            <v-container>
              <div class="display-2 center underTitle">
                ~ Our Vision ~
              </div>
              <div class="center mt-4 headline">
                To become a community development network that transcends
                cultural and geographical boundaries, cultivating a united
                global community.

              </div>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </section>
<hr />
  <section id="featured">
    <v-container>
      <div class="center display-2 mt-4">
        Featured Content
      </div>

      <div>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 md4>
              <v-card>JGM SOCCER T</v-card>
            </v-flex>

          </v-layout>
        </v-container>

      </div>
    </v-container>


  </section>


  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.underTitle:after{
  content:'';
  display:block;
  margin: 0 auto;
  width:40%;
  padding-top:5px;
  border-bottom: 1px solid black;
}
</style>
