<template>
  <v-footer color="" padless class="grey darken-4 white--text">
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
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4">
          <h3>Stay Connected</h3>
          <v-btn icon color="blue darken-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon color="grey darken-1">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon color="blue darken-3">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon color="red darken-2">
            <v-icon>mdi-youtube</v-icon>
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
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
