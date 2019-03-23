<template>
  <div>
    <section id="team-box" class="card-content">
      <v-card class="main-card ontop elevation-2">
        <v-container>
          <v-layout row wrap class="hidden-sm-and-up">
            <v-container>
              <v-flex xs12>
                <div :class="['title primary--text text--darken-4 nm font-weight-light',
                {'body-2': $vuetify.breakpoint.smAndDown}]" style="line-height: 1.2 !important">
                Dedicated to the betterment of community and self,
                the UGC team prides itself on its passion and determination
                to succeed. Each member, a leader in his/her own right,
                has extensive knowledge and experience in the different
                 facets of what makes a successful organization. Chosen
                  based on their individual merits, they come together to
                   form a diverse group of global citizens from all walks of
                   life, with one common goal: to plant trees under whose shade
                   they will never sit.
                </div>
              </v-flex>
            </v-container>

          </v-layout>
          <member-card v-for="member in members" :key="member.id"
            :member="member"
            class="mb-4"
            >

          </member-card>
        </v-container>
      </v-card>
    </section>
  </div>

</template>

<script>
import memberCard from '@/components/team/member';

import membersList from '@/components/team/members';

export default {

  components: {
    'member-card': memberCard,
  },
  data() {
    return {
      members: membersList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nm{
  margin-top:-40px;
}

</style>
