<template>
  <div>
    <v-container fluid class="my-2">
      <div class="text-center" color="primary" dark>
        <h2 class="font-weight-bold">How QuickSnip Works</h2>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <!-- Step 1: Save Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-3"
                >mdi-file-document</v-icon
              >
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h6 font-weight-bold">
                Step 1: Save Your Snippets
              </h3>
              <p>
                Easily add your code snippets by providing a title, choosing the
                language, and entering the code. Then, simply click the "Save
                Snippet" button to store it for easy access later.
              </p>
            </v-col>
          </v-row>

          <!-- Step 2: Copy Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-3"
                >mdi-content-copy</v-icon
              >
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h6 font-weight-bold">Step 2: Copy Snippets</h3>
              <p>
                Once your snippet is saved, you can easily copy it to your
                clipboard with the click of a button. Just hit the "Copy"
                button, and it's ready to be pasted wherever you need it!
              </p>
            </v-col>
          </v-row>

          <!-- Step 3: Search and Filter Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-3">mdi-magnify</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h6 font-weight-bold">
                Step 3: Search and Filter Snippets
              </h3>
              <p>
                Quickly find your saved snippets by using the search bar or
                applying filters based on title or language. It's easy to
                organize and manage your collection!
              </p>
            </v-col>
          </v-row>

          <!-- Step 4: Share Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-3">mdi-whatsapp</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h6 font-weight-bold">Step 4: Share Snippets</h3>
              <p>
                Share your favorite code snippets with others easily via
                WhatsApp. Just click the "Share" button and choose your desired
                platform.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
};
</script>

<style scoped>
/* Optional custom styling */
</style>
