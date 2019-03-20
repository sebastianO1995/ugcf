<template>
  <div>
    <section id="team-box" class="card-content">
      <v-card class="main-card ontop elevation-2">
        <v-container>
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
import memberCard from '@/components/team/member.vue'
import members from '@/components/team/members.js'
export default {

  components: {
    'member-card' : memberCard,
  },
  data() {
    return {
      members: members,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
