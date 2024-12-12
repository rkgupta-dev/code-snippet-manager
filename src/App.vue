<template>
  <v-app>
    <v-app-bar app color="light">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.png')"
          width="30"
        />
        <h3>QuickSnip</h3>
      </div>

      <v-spacer></v-spacer>

      <!-- Dark Mode Toggle Icon -->
      <v-btn icon @click="toggleDarkMode">
        <v-icon>{{
          isDarkMode ? "mdi-brightness-4" : "mdi-brightness-7"
        }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
import FooterView from "./components/FooterView.vue";

export default {
  name: "App",
  components: {
    FooterView,
  },
  data() {
    return {
      isDarkMode: JSON.parse(localStorage.getItem("isDarkMode")) || false, // Load theme mode from localStorage
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode; // Toggle dark mode
    },
  },
  watch: {
    isDarkMode(newVal) {
      // Save the selected theme mode to localStorage
      localStorage.setItem("isDarkMode", JSON.stringify(newVal));
      this.$vuetify.theme.dark = newVal; // Update Vuetify theme
    },
  },
  created() {
    // Set Vuetify theme based on the saved value in localStorage
    this.$vuetify.theme.dark = this.isDarkMode;
  },
};
</script>
