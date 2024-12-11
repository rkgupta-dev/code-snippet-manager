<template>
  <div>
    <v-container>
      <v-row class="my-2">
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>Create Snippet</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="title"
                label="Title"
                outlined
              ></v-text-field>
              <v-select
                v-model="category"
                :items="categories"
                label="Category"
                outlined
              ></v-select>
              <v-textarea
                v-model="code"
                label="Code Snippet"
                outlined
                rows="7"
              ></v-textarea>
              <div class="d-flex justify-end my-2">
                <v-btn color="primary" @click="saveSnippet">Save Snippet</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              Snippets
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="Search"
                append-icon="mdi-magnify"
                dense
              ></v-text-field>
            </v-card-title>
            <v-card-text>
              <v-select
                v-model="selectedCategory"
                :items="['All', ...categories]"
                label="Filter by Category"
                dense
                outlined
              ></v-select>
              <div
                v-for="snippet in filteredSnippets"
                :key="snippet.id"
                class="snippet"
              >
                <v-card class="mb-4">
                  <v-card-title
                    class="d-flex justify-space-between align-center"
                  >
                    <span>{{ snippet.title }}</span>

                    <!-- Delete Snippet Button on the right -->
                    <v-btn
                      small
                      color="red"
                      outlined
                      @click="deleteSnippet(snippet.id)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-card-subtitle>{{ snippet.category }}</v-card-subtitle>
                  <v-btn
                    class="my-1 ml-4"
                    small
                    icon
                    @click="copyToClipboard(snippet.code)"
                  >
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                  <v-card-text class="scrollable-card">
                    <pre v-html="highlightedCode(snippet.code)"></pre>
                  </v-card-text>
                </v-card>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" :timeout="2000" color="success">
        Snippet copied to clipboard!
      </v-snackbar>
      <v-snackbar v-model="saveSnackbar" :timeout="2000" color="success">
        Snippet save successfully!
      </v-snackbar>
    </v-container>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <span>Snippet Manager - Created by rkgupta-dev</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Import the Prism.js theme

export default {
  data() {
    return {
      title: "",
      category: "",
      code: "",
      search: "",
      selectedCategory: "All",
      categories: ["JavaScript", "Vue.js", "CSS", "HTML", "Python"],
      snippets: [],
      snackbar: false, // Control the visibility of the snackbar
      saveSnackbar: false,
    };
  },
  computed: {
    filteredSnippets() {
      return this.snippets.filter((snippet) => {
        const matchesSearch = snippet.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
        const matchesCategory =
          this.selectedCategory === "All" ||
          snippet.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
  methods: {
    saveSnippet() {
      if (!this.title || !this.category || !this.code) {
        alert("Please fill out all fields!");
        return;
      } else {
        this.saveSnackbar = true;
      }

      const newSnippet = {
        id: Date.now(),
        title: this.title,
        category: this.category,
        code: this.code,
      };

      this.snippets.push(newSnippet);
      this.title = "";
      this.category = "";
      this.code = "";
      localStorage.setItem("snippets", JSON.stringify(this.snippets));
    },
    highlightedCode(code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
    copyToClipboard(code) {
      navigator.clipboard.writeText(code).then(
        () => {
          this.snackbar = true; // Show the snackbar when successful
        },
        (err) => {
          console.error("Failed to copy snippet: ", err);
        }
      );
    },
    deleteSnippet(id) {
      // Remove the snippet with the matching id
      this.snippets = this.snippets.filter((snippet) => snippet.id !== id);
      // Update localStorage after deletion
      localStorage.setItem("snippets", JSON.stringify(this.snippets));
    },
  },
  mounted() {
    const savedSnippets = JSON.parse(localStorage.getItem("snippets"));
    if (savedSnippets) {
      this.snippets = savedSnippets;
    }
  },
};
</script>

<style scoped>
.snippet pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
}
.scrollable-card {
  /* Adjust width as needed */
  height: 300px; /* Adjust height as needed */
  overflow: auto; /* Enables scrolling for overflowing content */
}
pre {
  white-space: pre-wrap; /* Ensures code wraps within the card */
  word-wrap: break-word; /* Prevents long lines from breaking layout */
}
</style>
