<template lang="html">
<section>
  <v-container>
    <v-form @submit.prevent="submit" ref="form" v-model="valid"
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
            v-model="snackbar.active"
            :color= "snackbar.color"
            :timeout="timeout"
            vertical
              >
              <span :class="snackbar.txtColor">
                <v-icon size="14" :color="snackbar.iconColor"
                class="pr-2">{{snackbar.icon}}</v-icon>
                {{snackbar.message}}</span>
              <v-btn
                :color="snackbar.iconColor"
                flat
                @click="snackbar.active = false"
                >
                Close
              </v-btn>
            </v-snackbar>
            <!-- INSERT RECAPTCHA HERE -->
            <vue-recaptcha
                  ref="recaptcha"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
                  size="invisible"
                  sitekey="6LdoBJwUAAAAAEr543XNlSIm7ukRasj4MgWG_9iy">
                </vue-recaptcha>
            <v-btn class="primary" :disabled="status==='submitting'" type="submit">submit</v-btn>
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
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    'vue-recaptcha': VueRecaptcha,
  },
  data() {
    return {
      valid: false,
      validSubmit: true,
      snackbar: {
        active: '',
        color: '',
        txtColor: '',
        icon: '',
        iconColor: '',
        message: '',
      },
      timeout: 5000,
      name: '',
      email: '',
      message: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length >= 10 || 'Message must be greater than 15 characters',
      ],
      status: '',
      successfulServerResponse: '',
      serverError: '',
    };
  },
  methods: {
    dbSend() {
      const ts = new Date();

      // console.log({ name: this.name, email: this.email, message: this.message });
      fb.collection('messages').add({
        name: this.name,
        email: this.email,
        message: this.message,
        date: ts, // sends the time stamp of the creation of the message.
      })
        .then(() => {
          this.resetForm();
          console.log('sent to firebase');
        })
        .catch(err =>
          /* eslint no-console: "error" */
          console.log(err));
    },
    resetForm() {
      this.name = '';
      this.message = '';
      this.email = '';
      this.$refs.form.resetValidation();
      this.validSubmit = true;
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$refs.recaptcha.execute();
      } else {
        this.validSubmit = false;
      }
    },
    onCaptchaVerified(recaptchaToken) {
      this.status = 'submitting';
      this.$refs.recaptcha.reset();
      this.sendFormData(recaptchaToken);
    },
    onCaptchaExpired() {
      // this function is called when the recaptcha expires
      this.$refs.recaptcha.reset();
      console.log('Expired');
    },
    snackbarOptions(isSuccessful, message) {
    // Function call means it is active
      this.snackbar.active = true;
      if (isSuccessful) {
        this.snackbar.color = 'success';
        this.snackbar.message = message;
        this.snackbar.txtColor = 'primary--text text--darken-4';
        this.snackbar.icon = 'far fa-check-circle';
        this.snackbar.iconColor = 'black';
      } else {
        this.snackbar.color = 'red';
        this.snackbar.message = message;
        this.snackbar.txtColor = 'white--text';
        this.snackbar.icon = 'fas fa-exclamation-circle';
        this.snackbar.iconColor = 'white';
      }
    },
    sendFormData(recaptchaToken) {
      axios.post('http://localhost:3000/send', {
        name: this.name,
        email: this.email,
        message: this.message,
        recaptchaToken: recaptchaToken,
      })
        .then((response) => {
          this.successfulServerResponse = response.data.message;
          this.dbSend();
          this.snackbarOptions(true, this.successfulServerResponse);
          console.log('Success');
        })
        .catch((e) => {
          // helper to get a message to successfulServerResponse
          function getErrorMessage(error) {
            let responseBody;
            responseBody = error.response;
            if (!responseBody) {
              responseBody = error;
            } else {
              responseBody = error.response.data || responseBody;
            }
            return responseBody.message || JSON.stringify(responseBody);
          }
          this.serverError = getErrorMessage(e);
          console.error(`New Error: ${this.serverError}`);
          this.snackbarOptions(false, this.serverError);
        }).then(() => {
          this.status = '';
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
