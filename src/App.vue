<template>
  <v-app class="quicksnip-app">
    <!-- top navbar -->
    <v-app-bar
      app
      flat
      class="quicksnip-navbar px-md-8"
      color="rgba(255,255,255,0.88)"
    >
      <!-- logo -->
      <router-link to="/" class="text-decoration-none">
        <div class="d-flex align-center quick-logo-wrap">
          <v-avatar size="32" tile class="quick-logo mr-3">
            <v-img :src="require('@/assets/logo.png')" contain></v-img>
          </v-avatar>

          <div>
            <h3 class="quick-brand mb-0">QuickSnip</h3>
          </div>
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <!-- nav actions -->
      <div class="d-flex align-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              to="/how-it-works"
              class="quick-icon-btn mr-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>How it Works</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click="toggleDarkMode"
              class="quick-icon-btn"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{
                  isDarkMode ? "mdi-weather-night" : "mdi-white-balance-sunny"
                }}
              </v-icon>
            </v-btn>
          </template>
          <span>Toggle Theme</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <!-- page body -->
    <v-main class="quicksnip-main">
      <router-view />
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

<style scoped>
.quicksnip-app {
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.06),
      transparent 30%
    ),
    radial-gradient(
      circle at top right,
      rgba(244, 114, 182, 0.05),
      transparent 30%
    ),
    linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  min-height: 100vh;
}

/* navbar */
.quicksnip-navbar {
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.03);
}

/* logo */
.quick-logo {
  border-radius: 8px !important;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.12);
}

.quick-logo-wrap {
  cursor: pointer;
}

.quick-brand {
  font-size: 24px;
  font-weight: 900;
  color: #111827;
  letter-spacing: -0.5px;
}

/* icon buttons */
.quick-icon-btn {
  background: rgba(0, 0, 0, 0.03);
  transition: 0.3s;
}

.quick-icon-btn:hover {
  background: rgba(99, 102, 241, 0.08);
  transform: translateY(-2px);
}

/* main area */
.quicksnip-main {
  padding-top: 20px;
}

/* dark mode support */
.theme--dark.quicksnip-app {
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at top right,
      rgba(244, 114, 182, 0.1),
      transparent 30%
    ),
    linear-gradient(180deg, #0f172a 0%, #111827 100%);
}

.theme--dark .quicksnip-navbar {
  background: rgba(15, 23, 42, 0.88) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .quick-brand {
  color: white;
}

.theme--dark .quick-icon-btn {
  background: rgba(255, 255, 255, 0.05);
}

/* mobile */
@media (max-width: 600px) {
  .quick-brand {
    font-size: 20px;
  }
}
</style>
