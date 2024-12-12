<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld/> -->
      <SnippetManager />
    </v-main>
    <FooterView />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import FooterView from "./components/FooterView.vue";
import SnippetManager from "./components/SnippetManager.vue";

export default {
  name: "App",

  components: {
    // HelloWorld,
    SnippetManager,
    FooterView,
  },

  data: () => ({
    //
  }),
};
</script>
