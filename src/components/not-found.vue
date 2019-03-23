<template lang="html">
  <div class="bw">
    <v-container class="mt-5">
      <v-layout row wrap class="mt-4">
        <v-flex xs12>
          <div :class="['display-1 left font-weight-medium  primary--text text--darken-4',
          {'title': $vuetify.breakpoint.smAndDown}]">
            Page Not Found
          </div>
        </v-flex>
      </v-layout>
        <v-divider class="my-2"></v-divider>
        <v-btn to="/" class="primary">Go Home</v-btn>
    </v-container>
  </div>

</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
</style>
