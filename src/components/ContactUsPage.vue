<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5" class="mx-auto">
        <v-card elevation="4" class="pa-6 rounded-lg">
          <v-card-title class="mb-4"
            >QuickSnip Contact Information</v-card-title
          >
          <v-card-subtitle class="mb-6">
            You can also reach us through the following methods:
          </v-card-subtitle>

          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="green">mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <h4 class="body-1"
                  >Phone: +91 7079812442</h4
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="amber">mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <h4 class="body-1"
                  >Email: support@quicksnip.com</h4
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="red">mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <h4 class="body-1"
                  >Address: 123 QuickSnip St, 10th Main, Indiranagar,
                  Bengaluru-560038, India.</h4
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="7" class="mx-auto">
        <v-card elevation="4" class="pa-6 rounded-lg">
          <v-card-title class="mb-4">Contact Us</v-card-title>
          <v-card-subtitle class="mb-6">
            We're here to help! Please reach out with any questions or feedback.
          </v-card-subtitle>

          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-text-field
              v-model="name"
              label="Full Name"
              required
              :rules="nameRules"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Email Address"
              required
              :rules="emailRules"
              outlined
              dense
            ></v-text-field>

            <v-textarea
              v-model="message"
              label="Your Message"
              required
              :rules="messageRules"
              outlined
              rows="4"
            ></v-textarea>

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mt-4"
              type="submit"
            >
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar for success or error messages -->
    <v-snackbar
      v-model="snackbar.visible"
      :color="snackbar.color"
      timeout="3000"
    >
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUsPage",
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      message: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name must be at least 3 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          (v && v.length >= 10) || "Message must be at least 10 characters",
      ],
      snackbar: {
        visible: false,
        message: "",
        color: "success", // Can be 'success' or 'error'
      },
    };
  },
  methods: {
    submitForm() {
      const emailData = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      };

      emailjs
        .send(
          "service_timckqh",
          "template_xj8z8ce",
          emailData,
          "v9Fpmm5q1VH_qHYgi"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            this.name = "";
            this.email = "";
            this.message = "";
            this.snackbar.message = "Your message has been sent successfully!";
            this.snackbar.color = "success";
            this.snackbar.visible = true;
          },
          (error) => {
            console.error("Failed to send email:", error);
            this.snackbar.message = "Failed to send message. Please try again.";
            this.snackbar.color = "error";
            this.snackbar.visible = true;
          }
        );
    },
  },
};
</script>

<style scoped>
/* Scoped styles can be added if needed */
</style>
