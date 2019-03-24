<template lang="html">
  <v-footer color= "primary darken-1" height= "auto" style="z-index:0 !important" >
  <v-layout justify center row wrap>
      <v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title secondary--text text--lighten-2">
                    Unified Global Connections
                  </div>
                </v-flex>
                <v-flex xs12>
                  <v-img :src="require(`@/assets/logo.png`)"
                        height= '125'
                        width= '104'
                        :aspect-ratio="16/9"
                        class="primary darken-1 center mt-3"></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs12 sm6>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title secondary--text text--lighten-2">
                    Let's Connect
                  </div>
                  <div class="subheading secondary--text text--lighten-2 mt-4">
                    Orange, CT 06477<br/>

                    (203)-927-7147<br/>

                      <a href="mailto:unifiedglobalconnections@gmail.com"
                        class="secondary--text text--lighten-2 linka">
                        unifiedglobalconnections@gmail.com
                      </a>
                  </div>
                  <div class="subheading secondary--text text--lighten-2 mt-1 ml-5">

                  </div>
                </v-flex>
                <v-flex xs12>

                    <v-btn :href="item.link" v-for= "item in footerItems" :key= "item.icon"
                      class="mx-3" dark icon>
                        <v-icon size= "30px">{{item.icon}}</v-icon>
                    </v-btn>

                  <v-btn href="https://venmo.com/UGCFoundation" icon>
                    <v-img :src="require(`@/assets/venmo.png`)"
                      height= '30'
                      width= '30'
                      :aspect-ratio="16/9"
                      class="primary darken-1 center"></v-img>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex py-3 white--text xs12 class= "primary darken-4">
        <span class="white--text" >&copy; 2019 Unified Global Connections
          </span>
      </v-flex>
  </v-layout>
</v-footer>
</template>

<script>
export default {
  data() {
    return {
      footerItems: [
        { icon: 'fab fa-facebook',
          link: 'https://www.facebook.com/UGCFoundation',
        },
        {
          icon: 'fab fa-instagram',
          link: 'https://www.instagram.com/unified_global_connections/',
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.linka:hover{
  color: var(--v-primary-darken4) !important;
}
</style>
