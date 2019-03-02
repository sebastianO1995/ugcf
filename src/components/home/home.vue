<template>
  <div>
    <header class="header-main">
      <v-container>
        <div class="display-3 center main">
          Unified Global Connections
        </div>
        <div class="display-1 center subMain">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        </div>
      </v-container>

      <div class="content">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card id="our-mission" class="mission">
              <v-container>
                <div class="headline center">
                  Our Mission
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor

              </v-container>
            </v-card>

            <v-card id="our-vision" class="vision mt-3">
              <v-container>
                <div class="headline center">
                  Our Vision
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor

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
.content{
  position:absolute;
  left:10%;
  right:10%;
  bottom:-40%;
}
</style>
