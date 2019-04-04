<template lang="html">
<section>
  <v-container>
    <v-form @submit.prevent="processForm" ref="form" v-model="valid"
     lazy-validation>
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
            <div v-if="!validSubmit" class="body-2 primary--text text--darken-3">
              <v-icon size="14" class="pr-2 error--text">fas fa-exclamation-circle</v-icon>
              Validation errors occurred. Please confirm the fields and submit it again.
            </div>
          </v-fade-transition>
        </v-flex>
      </v-layout>
    </v-form>

  </v-container>
</section>
</template>

<script>
import fb from '@/components/firebaseInit';
import axios from 'axios';

export default {
  data() {
    return {
      valid: false,
      validSubmit: true,
      snackbar: false,
      timeout: 5000,
      success: 'Your message was sent successfully!',
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 15 || 'Name must be less than 15 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length >= 10 || 'Message must be greater than 15 characters',
      ],
    };
  },
  methods: {
    processForm() {
      this.sendFormData();
      // const ts = new Date();
      // if (this.$refs.form.validate()) {
      //   // console.log({ name: this.name, email: this.email, message: this.message });
      //   fb.collection('messages').add({
      //     name: this.name,
      //     email: this.email,
      //     message: this.message,
      //     date: ts, // sends the time stamp of the creation of the message.
      //   })
      //     .then((docRef) => {
      //       this.snackbar = true;
      //       this.sendFormData();
      //       this.name = '';
      //       this.message = '';
      //       this.email = '';
      //       this.$refs.form.resetValidation();
      //       this.validSubmit = true;
      //     })
      //     .catch(err =>
      //       /* eslint no-console: "error" */
      //       console.log(err));
      // } else {
      //   this.validSubmit = false;
      // }
    },
    // sendFormData(name, email, message, date) {
    sendFormData() {
      axios.post('http://localhost:3000/send', {
        name: this.name,
        email: this.email,
        message: this.message,

      }).then((response) => {
            console.log("Success");
    })
        .catch((e)=>{
          console.error('New Error: ' + e);
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
