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
                dense
              ></v-text-field>
              <v-select
                v-model="category"
                :items="languages"
                label="Category"
                outlined
                dense
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
              <div class="d-flex">
                <v-select
                  v-model="selectedCategory"
                  :items="['All', ...languages]"
                  label="Filter by Language"
                  dense
                  outlined
                ></v-select>
                <v-btn
                  color="primary"
                  class="ml-2"
                  elevation="4"
                  dark
                  @click="sheet = !sheet"
                  >My Snippets</v-btn
                >
              </div>
              <!-- Bottom Sheet for snippets lists -->
              <div class="text-center">
                <v-bottom-sheet v-model="sheet" inset>
                  <v-sheet class="text-center" height="350px">
                    <v-btn
                      class="my-4"
                      text
                      color="red"
                      @click="sheet = !sheet"
                    >
                      Close
                      <v-icon right dark> mdi-close </v-icon>
                    </v-btn>
                    <div
                      style="
                        max-height: 300px;
                        overflow-y: auto;
                        display: block;
                        width: 100%;
                        height: 100%;
                      "
                    >
                      <v-simple-table class="my-4">
                        <template v-slot:default>
                          <tr>
                            <th>Serial No.</th>
                            <th>Title</th>
                            <th>Languages</th>
                            <th>Actions</th>
                          </tr>
                          <tbody>
                            <!-- Check if there are no snippets -->
                            <template v-if="filteredSnippets.length === 0">
                              <tr>
                                <td colspan="4" class="text-center py-4">
                                  <v-icon color="red" class="display-3"
                                    >mdi-alert-circle-outline</v-icon
                                  ><br />
                                  <span class="ml-2 text-h6 font-weight-bold"
                                    >No Snippets Added Yet</span
                                  >
                                </td>
                              </tr>
                            </template>

                            <!-- Render snippets if available -->
                            <template v-else>
                              <tr
                                v-for="(snippet, index) in filteredSnippets"
                                :key="snippet.id"
                                class="md-4"
                              >
                                <td>{{ index + 1 }}</td>
                                <!-- Serial number -->
                                <td>{{ snippet.title }}</td>
                                <td>{{ snippet.category }}</td>
                                <td>
                                  <!-- Copy Button -->
                                  <v-btn
                                    small
                                    icon
                                    @click="copyToClipboard(snippet.code)"
                                  >
                                    <v-icon>mdi-content-copy</v-icon>
                                  </v-btn>

                                  <!-- Share Button -->
                                  <v-btn
                                    small
                                    color="green"
                                    outlined
                                    @click="shareOnWhatsApp(snippet)"
                                    classs
                                  >
                                    <v-icon>mdi-whatsapp</v-icon>
                                  </v-btn>
                                  <!-- Delete Button -->
                                  <!-- <v-btn
                                    small
                                    color="red"
                                    outlined
                                    @click="deleteSnippet(snippet.id)"
                                    class="ml-4"
                                  >
                                    <v-icon>mdi-delete</v-icon>
                                  </v-btn> -->
                                </td>
                              </tr>
                            </template>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </div>

              <!-- Show message when no snippets match the filter or search -->
              <div
                v-if="filteredSnippets.length === 0"
                align="center"
                justify="center"
              >
                <v-divider></v-divider>
                <div class="mt-4">
                  <v-icon color="red" class="display-1"
                    >mdi-alert-circle-outline</v-icon
                  >
                  <span class="ml-2 text-h6 font-weight-bold"
                    >No Snippets Added Yet</span
                  >
                </div>
              </div>

              <!-- Display filtered snippets -->
              <div
                v-for="snippet in filteredSnippets"
                :key="snippet.id"
                class="snippet"
              >
                <v-card class="my-4" outlined>
                  <v-card-title
                    class="d-flex justify-space-between align-center"
                  >
                    <span>{{ snippet.title }}</span>
                    <div>
                      <v-btn
                        small
                        color="green"
                        outlined
                        @click="shareOnWhatsApp(snippet)"
                        classs
                      >
                        <v-icon>mdi-whatsapp</v-icon>
                      </v-btn>
                      <!-- Delete Snippet Button on the right -->
                      <v-btn
                        small
                        color="red"
                        outlined
                        @click="deleteSnippet(snippet.id)"
                        class="ml-2"
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
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
                  <v-card-text class="scrollable-card my-2 prism-code">
                    <div :class="prismThemeClass">
                      <pre
                        class="prism-code"
                        v-html="highlightedCode(snippet.code)"
                      ></pre>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Snackbar Notifications -->
      <v-snackbar v-model="snackbar" :timeout="2000" color="success">
        Snippet copied to clipboard!
      </v-snackbar>
      <v-snackbar v-model="saveSnackbar" :timeout="2000" color="success">
        Snippet saved successfully!
      </v-snackbar>
    </v-container>

    <!-- Footer Section -->
    <!-- <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh"
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col class="text-center">
          <span>Snippet Manager - Created by rkgupta-dev</span>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Light theme
import "prismjs/themes/prism-okaidia.css"; // Dark theme
export default {
  data() {
    return {
      sheet: false,
      title: "",
      category: "",
      code: "",
      search: "",
      selectedCategory: "All",
      languages: ["JavaScript", "Vue.js", "CSS", "HTML", "Python"],
      snippets: [],
      snackbar: false, // Control the visibility of the snackbar
      saveSnackbar: false,
    };
  },
  computed: {
    prismThemeClass() {
      // Determine the theme class based on Vuetify's dark mode
      return this.$vuetify.theme.dark ? "prism-dark" : "prism-light";
    },
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
      if (navigator.clipboard) {
        // Use Clipboard API for modern browsers
        navigator.clipboard.writeText(code).then(
          () => {
            this.snackbar = true; // Show the snackbar on success
          },
          (err) => {
            console.error("Failed to copy snippet: ", err);
            this.snackbar = false; // Optionally hide snackbar if there was an error
          }
        );
      } else {
        // Fallback for browsers that do not support Clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        this.snackbar = true; // Show snackbar for success
      }
    },
    deleteSnippet(id) {
      // Remove the snippet with the matching id
      this.snippets = this.snippets.filter((snippet) => snippet.id !== id);
      // Update localStorage after deletion
      localStorage.setItem("snippets", JSON.stringify(this.snippets));
    },
    shareOnWhatsApp(snippet) {
      const encodedMessage = encodeURIComponent(
        `*Title:* ${snippet.title}\n*Language:* ${snippet.category}\n*Code Snippet:*\n${snippet.code}`
      );
      const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
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
.ml-2 {
  margin-left: 8px;
}
.prism-light .prism-code {
  background: #f5f5f5;
  color: #333;
}

/* Dark Theme */
.prism-dark .prism-code {
  background: #2d2d2d;
  color: #f8f8f2;
}

/* Common Styles */
.prism-code {
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Courier New", Courier, monospace;
}
</style>
