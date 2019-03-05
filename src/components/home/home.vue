<template>
  <div>
    <header class="header-main">
      <v-container>
        <div class="display-3 center main">
          Unified Global Connections
        </div>
        <!-- <div class="display-1 center subMain">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </div> -->
      </v-container>

      <div class="content-body">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat id="our-mission" class="mission">
              <v-container>
                <div class="display-2 center underTitle">
                  ~ Our Mission ~
                </div>
                <div class="center mt-4 headline">
                  To build meaningful connections between people of different cultures in order to nurture compassionate and accepting communities across the world.

                </div>
              </v-container>
            </v-card>

            <v-card flat id="our-vision" class="vision mt-3">
              <v-container>
                <div class="display-2 center underTitle">
                  ~ Our Vision ~
                </div>
                <div class="center mt-4 headline">
                  To become a community development network that transcends cultural and geographical boundaries, cultivating a united global community.

                </div>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>


      </div>

    </header>


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
header{
  background-image: url('../../assets/back-community.jpg');
}
.main{
margin-top:20px;

}
.content-body{
  position:absolute;
  left:20%;
  right:20%;
  top:80%;
}
.underTitle:after{
  content:'';
  display:block;
  margin: 0 auto;
  width:40%;
  padding-top:5px;
  border-bottom: 1px solid black;
}
</style>
