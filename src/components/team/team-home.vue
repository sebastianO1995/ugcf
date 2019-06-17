<template lang="html">
  <div class="bw">

    <v-img :src="require('@/assets/team/team.jpg')"

          :class="['primary lighten-2',
            {'hh-md': $vuetify.breakpoint.mdAndUp},
            {'hh-sm': $vuetify.breakpoint.smAndDown}]"

            gradient="to bottom left, rgba(187,225,255,.33), rgba(0,0,0,.8)"

            :position="posCalc()">

            <v-layout pa-2 column fill-height class="lightbox white--text">
          <v-spacer></v-spacer>
          <v-flex center>
            <p :class="['page-title',
              {'display-1': $vuetify.breakpoint.xs},
              {'display-2': $vuetify.breakpoint.sm},
              {'display-3': $vuetify.breakpoint.md || $vuetify.breakpoint.lg},
              {'display-4': $vuetify.breakpoint.xl}]"
              >
              Who We Are
            </p>
            <!-- <v-container>
              <v-layout row wrap class="hidden-xs-only">
                <v-flex sm8 offset-sm2>
                  <div class="caption"
                   style="line-height: 1.2 !important">
                  Dedicated to the betterment of community and self,
                  the UGC team prides itself on its passion and determination
                  to succeed. Each member, a leader in his/her own right,
                  has extensive knowledge and experience in the different
                  facets of what makes a successful organization.
                  Chosen based on their individual merits, they come
                  together to form a diverse group of global citizens
                  from all walks of life, with one common goal: to plant
                   trees under whose shade they will never sit.
                  </div>
                </v-flex>
              </v-layout>

            </v-container> -->


          </v-flex>

        </v-layout>

    </v-img>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  methods: {
    posCalc() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return 'center 5%';
      }
      return 'center center';
    },
  },
};
</script>

<style lang="css" scoped>

</style>
