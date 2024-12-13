<template>
  <v-footer padless class="grey darken-4 white--text mt-6">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <h3>QuickSnip</h3>
          <p>
            QuickSnip helps you effortlessly save, share, and organize your code
            snippets in one place.
          </p>
        </v-col>
        <v-col cols="12" sm="4">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/how-it-works">How It Works</router-link></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4">
          <h3>Stay Connected</h3>
          <v-btn
            icon
            color="blue darken-2"
            href="https://twitter.com"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            icon
            color="grey darken-1"
            href="https://github.com/rkgupta-dev"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            icon
            color="blue darken-3"
            href="https://www.linkedin.com/in/rohit-kr-gupta-921760208/"
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            icon
            color="orange darken-2"
            :href="'mailto:rohitkrgupta333@gmail.com'"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="text-center">
        © {{ new Date().getFullYear() }} —
        <strong>QuickSnip. All Rights Reserved.</strong>
      </v-card-text>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
