<template lang="html">
  <div class="center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="primary--text text--darken-4 font-weight-bold headline">
            JGM Memorial Soccer Tournament
          </div>
          <div class="subheading accent--text text--darken-4 font-weight-medium">
            Team Registration
          </div>
        </v-flex>
      </v-layout>
      <v-divider class="my-3"></v-divider>
      <v-form @submit.prevent="processForm" ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-layout row wrap>
            <v-container>
              <v-flex xs12>
                <v-text-field
                  v-model = "teamName"
                  box
                  :rules="nameRules"
                  name = "teamName"
                  label="Team Name: *"
                  id= "teamName"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <div class="subheading accent--text text--darken-4 font-weight-medium">
                  Team Member Information
                </div>
              </v-flex>
            </v-container>
          </v-layout>
          <v-layout row wrap>
            <v-container>
              <v-flex xs12>
                <v-text-field
                  v-model = "mainContact.name"
                  box
                  :rules="nameRules"
                  name = "teamName"
                  label="Main Contact"
                  id= "teamName"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model = "member2.name"
                  box
                  :rules="nameRules"
                  name = "teamName"
                  label="Main Contact"
                  id= "teamName"
                  required
                ></v-text-field>
              </v-flex>
            </v-container>
          </v-layout>
        </v-container>
      </v-form>


    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      teamName: '',
      mainContact: {
        name: '',
        phone: '',
        address: '',
        email: '',
        age: null,
        shirt: ''
      },
      member2: {
        name: '',
        phone: '',
        address: '',
        email: '',
        age: null,
        shirt: ''
      },
      member3: {
        name: '',
        phone: '',
        address: '',
        email: '',
        age: null,
        shirt: ''
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
