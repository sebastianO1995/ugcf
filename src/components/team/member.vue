<template lang="html">
  <v-card class="elevation-8">
    <v-container>
      <v-layout row wrap v-if="member.id %2 === 0 || $vuetify.breakpoint.xs">
        <v-flex xs12 sm4 md4>
          <v-container>
            <v-img :src="require(`@/assets/team/square-original/${member.image}-300x300.jpg`)"
             class="bk-img elevation-8"

             ></v-img>
          </v-container>
        </v-flex>
        <v-flex xs12 sm8 md8>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="headline primary--text text--darken-4 font-weight-bold">
                  {{name}}
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="subheading accent--text text--darken-4 font-weight-bold
                  pt-1">
                  {{member.position}}, UGC
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="body-2 primary--text text--darken-4 font-weight-light pt-2">
                  {{member.bio}}
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>

      <v-layout v-else row wrap>
        <v-flex xs12 sm8 md8>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <div :class="['headline primary--text text--darken-4 font-weight-bold right',
                {'left':$vuetify.breakpoint.smAndDown}]">
                  {{name}}
                </div>
              </v-flex>
              <v-flex xs12>
                <div :class="['subheading accent--text text--darken-4 font-weight-bold pt-1 right',
                {'left':$vuetify.breakpoint.smAndDown}]">
                  {{member.position}}, UGC
                </div>
              </v-flex>
              <v-flex xs12>
                <div class="body-2 primary--text text--darken-4 font-weight-light pt-2 a-r">
                  {{member.bio}}
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm4 md4>
          <v-container>
            <v-img :src="require(`@/assets/team/square-original/${member.image}-300x300.jpg`)"
             class="bk-img elevation-8"
             ></v-img>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
export default {
  props: ['member'],
  computed: {
    name(){
      return `${this.member.firstName} ${this.member.lastName}`
    }
  }
}
</script>

<style lang="css" scoped>
.bk-img{
  background-image: url('../../assets/team/background.jpg');
}
.a-r{
  text-align: justify;
}
</style>
