<template>
  <v-container
    class="d-flex align-center justify-center text-center"
    style="height: 90vh"
  >
    <div>
      <v-row justify="center">
        <v-icon color="red" size="100"> mdi-alert </v-icon>
      </v-row>
      <h1 class="display-1 font-weight-bold my-4">404</h1>
      <p class="text-h6">Oops! The page you are looking for does not exist.</p>
      <v-btn color="primary" dark @click="goHome"> Go to Home </v-btn>
    </div>
  </v-container>
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
