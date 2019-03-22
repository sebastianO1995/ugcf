<template lang="html">
<div>
  <v-container>
    <!-- @TODO:validate -->
    <v-form @submit.prevent="processForm" ref="form" v-model="valid" lazy-validation>
      <v-layout row wrap>
        <v-flex xs12 sm6 xl4 offset-xl1>
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
        <v-flex xs12 sm6 xl4 offset-xl1>
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
        <v-flex xs12 sm12 xl9 offset-xl1>
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
      <v-layout row wrap>
        <v-flex xs12 sm6 xl4 offset-xl1>
          <v-container>
            <v-snackbar
            v-model="snackbar"
            color= "success"
            :timeout="timeout"
            vertical
              >

              <span class="primary--text text--darken-4">
                <v-icon size="14" color="black" class="pr-2">far fa-check-circle</v-icon>
                {{success}}</span>
              <v-btn
                color="black"
                flat
                @click="snackbar = false"
                >
                Close
              </v-btn>

            </v-snackbar>
            <v-btn class="primary" type="submit">submit</v-btn>
          </v-container>
        </v-flex>
        <v-flex xs12 sm6 xl7>
          <v-fade-transition>
            <div v-if="!valid" class="body-2 primary--text text--darken-3">
              <v-icon size="14" class="pr-2 error--text">fas fa-exclamation-circle</v-icon>
              Validation errors occurred. Please confirm the fields and submit it again.
            </div>
          </v-fade-transition>
        </v-flex>
      </v-layout>
    </v-form>

  </v-container>
</div>
</template>

<script>
import db from '@/components/firebaseInit.js'
export default {
  data () {
    return {
      valid: false,
      snackbar: false,
      timeout:5000,
      success: 'Your message was sent successfully!',
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length >= 10 || 'Message must be greater than 15 characters'
      ]
    }
  },
  computed: {

  },
  methods: {
    processForm: function() {
      if(this.$refs.form.validate()){

        console.log({ name: this.name, email: this.email, message: this.message });
        db.collection('messages').add({
          name: this.name,
          email: this.email,
          message: this.message
        })
        .then(docRef => {
          this.snackbar = true
          this.name = ''
          this.message=''
          this.email = ''
          this.$refs.form.resetValidation()

        })
        .catch(error => console.log(err))


      }





    }
  }
}
</script>

<style lang="css" scoped>
</style>
