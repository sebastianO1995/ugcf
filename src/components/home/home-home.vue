<template lang="html">
  <div class="bw">

    <v-img :src="require('@/assets/home.jpg')"

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
              Unified Global Connections
            </p>
            <p :class="[
              {'body-2': $vuetify.breakpoint.xs},
              {'title': $vuetify.breakpoint.sm},
              {'title': $vuetify.breakpoint.md || $vuetify.breakpoint.lg},
              {'display-1': $vuetify.breakpoint.xl}]"
              >
              A better community for a better tomorrow.
            </p>
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
        return 'center 50%';
      }
      return '10% center';
    },
  },
};
</script>

<style lang="css" scoped>

</style>
