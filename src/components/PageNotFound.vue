<template>
  <div class="notfound-page">
    <v-container
      class="fill-height d-flex align-center justify-center text-center"
    >
      <div class="notfound-box">
        <div class="error-icon-wrap mb-6">
          <v-icon size="70" color="red lighten-1"
            >mdi-alert-circle-outline</v-icon
          >
        </div>

        <h1 class="error-code mb-2">404</h1>

        <h2 class="error-title mb-4">Page Not Found</h2>

        <p class="error-subtitle mb-8">
          Oops! The page you're trying to access doesn't exist or may have been
          moved.
        </p>

        <v-btn
          large
          depressed
          rounded
          color="primary"
          class="go-home-btn"
          @click="goHome"
        >
          <v-icon left>mdi-arrow-left</v-icon>
          Back to Home
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.notfound-page {
  min-height: 100vh;
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.12),
      transparent 25%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(244, 114, 182, 0.1),
      transparent 25%
    ),
    linear-gradient(135deg, #f8fbff, #ffffff);
}

.notfound-box {
  max-width: 650px;
  padding: 50px 30px;
}

.error-icon-wrap {
  width: 120px;
  height: 120px;
  margin: auto;
  border-radius: 32px;
  background: rgba(239, 68, 68, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatY 3s ease-in-out infinite;
}

.error-code {
  font-size: 110px;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.error-title {
  font-size: 34px;
  font-weight: 900;
  color: #111827;
}

.error-subtitle {
  color: #6b7280;
  font-size: 15px;
  line-height: 1.8;
  max-width: 520px;
  margin: auto;
}

.go-home-btn {
  text-transform: none !important;
  font-weight: 800;
  padding: 0 32px !important;
  height: 50px !important;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.22);
}

/* dark mode */
.theme--dark .notfound-page {
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.15),
      transparent 25%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(244, 114, 182, 0.12),
      transparent 25%
    ),
    #0f172a;
}

.theme--dark .error-title {
  color: white;
}

.theme--dark .error-subtitle {
  color: rgba(255, 255, 255, 0.6);
}

.theme--dark .error-icon-wrap {
  background: rgba(255, 255, 255, 0.04);
}

/* animation */
@keyframes floatY {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* mobile */
@media (max-width: 960px) {
  .error-code {
    font-size: 78px;
  }

  .error-title {
    font-size: 26px;
  }
}
</style>
