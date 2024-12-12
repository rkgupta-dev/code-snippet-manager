<template>
    <v-container class="mt-5">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-banner class="text-center" color="primary" dark>
            <span class="display-1 font-weight-bold">How QuickSnip Works</span>
          </v-banner>
  
          <!-- Step 1: Save Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-4">mdi-file-document</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h5 font-weight-bold">Step 1: Save Your Snippets</h3>
              <p>
                Easily add your code snippets by providing a title, choosing the language, and entering the code. Then, simply click the "Save Snippet" button to store it for easy access later.
              </p>
            </v-col>
          </v-row>
  
          <!-- Step 2: Copy Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-4">mdi-content-copy</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h5 font-weight-bold">Step 2: Copy Snippets</h3>
              <p>
                Once your snippet is saved, you can easily copy it to your clipboard with the click of a button. Just hit the "Copy" button, and it's ready to be pasted wherever you need it!
              </p>
            </v-col>
          </v-row>
  
          <!-- Step 3: Search and Filter Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-4">mdi-magnify</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h5 font-weight-bold">Step 3: Search and Filter Snippets</h3>
              <p>
                Quickly find your saved snippets by using the search bar or applying filters based on title or language. It's easy to organize and manage your collection!
              </p>
            </v-col>
          </v-row>
  
          <!-- Step 4: Share Snippets -->
          <v-row class="mt-5" align="center">
            <v-col cols="12" md="4">
              <v-icon color="primary" class="display-4">mdi-whatsapp</v-icon>
            </v-col>
            <v-col cols="12" md="8">
              <h3 class="text-h5 font-weight-bold">Step 4: Share Snippets</h3>
              <p>
                Share your favorite code snippets with others easily via WhatsApp. Just click the "Share" button and choose your desired platform.
              </p>
            </v-col>
          </v-row>
  
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'HowItWorks'
  };
  </script>
  
  <style scoped>
  /* Optional custom styling */
  </style>
  