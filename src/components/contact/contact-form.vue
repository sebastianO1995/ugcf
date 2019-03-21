<template lang="html">
<div>
  <v-container>
    <!-- @TODO:validate -->
    <v-form @submit.prevent="processForm" ref="form" v-model="valid" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-container>
            <v-text-field
              v-model = "name"
              box
              :rules="nameRules"
              name = "name"
              label="Name"
              id= "name"
              required
            ></v-text-field>
          </v-container>

        </v-flex>
        <v-flex xs12 sm6>
          <v-container>
            <v-text-field
              box
              :rules="emailRules"
              v-model = "email"
              name = "email"
              label="Email"
              id= "email"
              required
            ></v-text-field>
          </v-container>

        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-container>
            <v-textarea
              box
              label="Message"
              name="message"
              id="message"
              :rules="messageRules"
              v-model = "message"
              required>
            </v-textarea>
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6>
          <v-container>
            <v-btn class="primary" :disabled="!valid" @click="validate()" type="submit">submit</v-btn>
          </v-container>
        </v-flex>
        <v-flex xs12 sm6>
          <div v-if="!valid" class="body-2 primary--text text--darken-3">
            Validation errors occurred. Please confirm the fields and submit it again.
          </div>
        </v-flex>
      </v-layout>
    </v-form>

  </v-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length >= 10 || 'Name must be greater than 15 characters'
      ]
    }
  },
  computed: {

  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
          this.snackbar = true
        }
    },
    processForm: function() {
      console.log({ name: this.name, email: this.email, message: this.message });
      //TODO:add snackbar for successful message, reset form.
    }
  }
}
</script>

<style lang="css" scoped>
</style>
