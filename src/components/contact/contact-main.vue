<template lang="html">
  <div class="page bw">
    <v-card flat class="contact pt-5" :height="calcH()">
      <v-container>

          <div :class="['display-2 font-weight-bold mt-5',
            {'headline': $vuetify.breakpoint.smAndDown}]">
            <span class="accent--text text--darken-4">Contact</span>
            <span class="primary--text text--darken-4">United Global Connections</span>
          </div>

          <v-container>
            <div :class="['title primary--text text--darken-4 information mb-4',
             {'subheading': $vuetify.breakpoint.smAndDown}]">
              Contacting us can open up a wide range of opportunities for your community.<br />
              You can reach us via the information provided below, or feel free to leave us a message by completing the form.<br />

              <!-- If you are looking to get involved as a volunteer, follow the links. -->
            </div>
            <hr class="style-two mb-4" />
            <v-layout row wrap>
              <v-flex xs12 sm4>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <div class="title primary--text text--darken-4 font-weight-bold">
                        General Inquries
                      </div>
                    </v-flex>
                    <v-flex xs12 class="pt-2">

                        <a href="mailto:unifiedglobalconnections@gmail.com"
                          class="primary--text text--darken-4 linka">
                          unifiedglobalconnections@gmail.com
                        </a>


                    </v-flex>
                  </v-layout>
                </v-container>

              </v-flex>
              <!-- <v-flex xs4>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <div class="title primary--text text--darken-4 font-weight-bold">
                        Get Involved
                      </div>
                    </v-flex>
                    <v-flex xs12 class="pt-2">




                    </v-flex>
                  </v-layout>
                </v-container>

              </v-flex>
              <v-flex xs4>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <div class="title primary--text text--darken-4 font-weight-bold">
                        Socials
                      </div>
                    </v-flex>
                    <v-flex xs12 class="pt-2">




                    </v-flex> -->
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    calcH () {
      if(this.$vuetify.breakpoint.xl) {
        return '55vh'
      }
      else if (this.$vuetify.breakpoint.lg) {
        return '70vh'
      }

    }
  }
};
</script>

<style lang="css" scoped>
.contact{

  background-color: var(--v-secondary-base);
}
.information{
  line-height: 1.5 !important;
}

.linka:hover{
  color: var(--v-accent-darken4) !important;
}
</style>
