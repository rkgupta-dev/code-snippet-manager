<template>
  <v-container class="pa-4">
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Create Snippet</v-card-title>
          <v-card-text>
            <v-text-field v-model="title" label="Title" outlined></v-text-field>
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
              rows="8"
            ></v-textarea>
            <v-btn color="primary" @click="saveSnippet">Save Snippet</v-btn>
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
                <v-card-title>{{ snippet.title }}</v-card-title>
                <v-card-subtitle>{{ snippet.category }}</v-card-subtitle>
                <v-card-text class="scrollable-card">
                  <v-btn small icon @click="copyToClipboard(snippet.code)">
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                  <pre v-html="highlightedCode(snippet.code)"></pre>
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
        alert("Snippet copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy snippet: ", err);
      }
    );
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
