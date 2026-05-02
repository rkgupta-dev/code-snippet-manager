<template>
  <div class="snippet-page">
    <!-- HERO -->
    <v-container v-if="isVisible" class="mb-6">
      <v-card flat class="hero-banner pa-6 pa-md-8">
        <v-btn icon class="hero-close-btn" @click="closeSection">
          <v-icon small>mdi-close</v-icon>
        </v-btn>

        <div class="hero-badge mb-4">SMART CODE ORGANIZER</div>

        <h1 class="hero-title mb-3">
          Organize, Save & Share <br />
          Your Snippets Instantly
        </h1>

        <p class="hero-subtitle mb-0">
          Build your own searchable code vault. Copy reusable snippets, manage
          languages, and share snippets across devices in seconds.
        </p>
      </v-card>
    </v-container>

    <v-container>
      <v-row>
        <!-- LEFT CREATE PANEL -->
        <v-col cols="12" md="4">
          <v-card flat class="create-panel pa-6">
            <div class="panel-heading mb-6">
              <div class="panel-mini-badge">CREATE</div>
              <h2 class="panel-title">New Snippet</h2>
              <div class="panel-subtitle">
                Save reusable code blocks into your personal vault
              </div>
            </div>

            <v-text-field
              v-model="title"
              label="Snippet Title"
              outlined
              dense
              class="mb-3 custom-input"
            />

            <v-select
              v-model="category"
              :items="languages"
              label="Select Category"
              outlined
              dense
              class="mb-3 custom-input"
            />

            <v-textarea
              v-model="code"
              label="Paste Your Code"
              outlined
              rows="7"
              class="custom-input code-area"
            />

            <v-btn
              block
              large
              depressed
              color="primary"
              class="save-btn mt-5"
              @click="saveSnippet"
            >
              <v-icon left>mdi-content-save-outline</v-icon>
              Save Snippet
            </v-btn>
          </v-card>
        </v-col>

        <!-- RIGHT LIBRARY PANEL -->
        <v-col cols="12" md="8">
          <v-card flat class="library-panel pa-6">
            <!-- top search row -->
            <v-row align="center" class="mb-5">
              <v-col cols="12" md="4">
                <div class="panel-mini-badge">LIBRARY</div>
                <h2 class="panel-title mb-1">My Snippets</h2>
              </v-col>

              <v-col cols="12" md="8">
                <v-row dense>
                  <v-col cols="12" sm="7">
                    <v-text-field
                      v-model="search"
                      label="Search snippets..."
                      append-icon="mdi-magnify"
                      dense
                      outlined
                      hide-details
                      class="custom-input"
                    />
                  </v-col>

                  <v-col cols="12" sm="5">
                    <v-select
                      v-model="selectedCategory"
                      :items="['All', ...languages]"
                      label="Language"
                      dense
                      outlined
                      hide-details
                      class="custom-input"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- empty -->
            <div v-if="filteredSnippets.length === 0" class="empty-state">
              <v-icon size="70" color="red lighten-1">
                mdi-folder-alert-outline
              </v-icon>
              <h3 class="mt-4">No Snippets Added Yet</h3>
              <p>Your saved snippets will appear here once created.</p>
            </div>

            <!-- snippet list -->
            <v-row v-else>
              <v-col
                cols="12"
                v-for="snippet in filteredSnippets"
                :key="snippet.id"
              >
                <v-card outlined class="snippet-inner-card">
                  <v-card-title
                    class="d-flex justify-space-between align-center"
                  >
                    <div>
                      <div class="snippet-title">{{ snippet.title }}</div>
                      <div class="snippet-language">{{ snippet.category }}</div>
                    </div>

                    <div>
                      <v-btn icon small @click="copyToClipboard(snippet.code)">
                        <v-icon color="primary">mdi-content-copy</v-icon>
                      </v-btn>

                      <v-btn icon small @click="shareOnWhatsApp(snippet)">
                        <v-icon color="green">mdi-whatsapp</v-icon>
                      </v-btn>

                      <v-btn icon small @click="openDeleteDialog(snippet.id)">
                        <v-icon color="red">mdi-delete-outline</v-icon>
                      </v-btn>
                    </div>
                  </v-card-title>

                  <div :class="prismThemeClass">
                    <pre
                      class="premium-code-box prism-code"
                      v-html="highlightedCode(snippet.code, snippet.category)"
                    ></pre>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- snackbars -->
      <v-snackbar v-model="snackbar" :timeout="2000" color="success">
        Snippet copied to clipboard!
      </v-snackbar>

      <v-snackbar v-model="saveSnackbar" :timeout="2000" color="success">
        Snippet saved successfully!
      </v-snackbar>

      <v-snackbar v-model="formSnackbar" :timeout="2000" color="error">
        Please fill out all fields!
      </v-snackbar>

      <v-snackbar v-model="deleteSnackbar" :timeout="2000" color="success">
        Snippet deleted successfully!
      </v-snackbar>
    </v-container>

    <!-- delete dialog -->
    <v-dialog v-model="deleteDialog" max-width="420">
      <v-card class="pa-4 delete-dialog-card">
        <div class="text-center">
          <v-icon size="60" color="red lighten-1">
            mdi-delete-alert-outline
          </v-icon>
          <h2 class="mt-3 font-weight-bold">Delete Snippet?</h2>
          <p class="grey--text text--darken-1 mt-2">
            This snippet will be permanently removed from your library.
          </p>
        </div>

        <v-card-actions class="justify-center mt-4">
          <v-btn text class="dialog-btn" @click="deleteDialog = false">
            Cancel
          </v-btn>

          <v-btn color="red" dark class="dialog-btn" @click="confirmDelete">
            Yes Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Prism from "prismjs";

import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-python";

export default {
  name: "SnippetManager",

  data() {
    return {
      isVisible: true,

      title: "",
      category: "",
      code: "",

      search: "",
      selectedCategory: "All",

      languages: [
        "JavaScript",
        "Vue.js",
        "CSS",
        "HTML",
        "Python",
        "UI/UX",
        "Vuetify",
        "Other",
      ],

      snippets: [],

      snackbar: false,
      saveSnackbar: false,
      formSnackbar: false,
      deleteSnackbar: false,

      deleteDialog: false,
      deleteId: null,
    };
  },

  computed: {
    prismThemeClass() {
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
    closeSection() {
      this.isVisible = false;
    },

    saveSnippet() {
      if (!this.title || !this.category || !this.code) {
        this.formSnackbar = true;
        return;
      }

      const newSnippet = {
        id: Date.now(),
        title: this.title,
        category: this.category,
        code: this.code,
      };

      this.snippets.unshift(newSnippet);

      localStorage.setItem("snippets", JSON.stringify(this.snippets));

      this.title = "";
      this.category = "";
      this.code = "";

      this.saveSnackbar = true;
    },

    highlightedCode(code, category) {
      const langMap = {
        JavaScript: "javascript",
        "Vue.js": "javascript",
        CSS: "css",
        HTML: "markup",
        Python: "python",
        Vuetify: "javascript",
        "UI/UX": "css",
        Other: "javascript",
      };

      const lang = langMap[category] || "javascript";
      const grammar = Prism.languages[lang] || Prism.languages.javascript;

      return Prism.highlight(code, grammar, lang);
    },

    copyToClipboard(code) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
          this.snackbar = true;
        });
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        this.snackbar = true;
      }
    },

    shareOnWhatsApp(snippet) {
      const encodedMessage = encodeURIComponent(
        `*Title:* ${snippet.title}\n*Language:* ${snippet.category}\n\n${snippet.code}`,
      );

      window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
    },

    openDeleteDialog(id) {
      this.deleteId = id;
      this.deleteDialog = true;
    },

    confirmDelete() {
      this.snippets = this.snippets.filter(
        (snippet) => snippet.id !== this.deleteId,
      );

      localStorage.setItem("snippets", JSON.stringify(this.snippets));

      this.deleteDialog = false;
      this.deleteId = null;
      this.deleteSnackbar = true;
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
.snippet-page {
  min-height: 100vh;
  padding: 20px 0 40px;
}

/* ================= HERO ================= */
.hero-banner {
  border-radius: 28px !important;
  background: radial-gradient(
      circle at top right,
      rgba(99, 102, 241, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(244, 114, 182, 0.08),
      transparent 30%
    ),
    linear-gradient(135deg, #ffffff, #f8fbff);
  border: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.04);
}

.hero-close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
}

.hero-badge,
.panel-mini-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 7px 14px;
  border-radius: 30px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
}

.hero-title {
  font-size: 42px;
  line-height: 1.2;
  font-weight: 900;
  color: #111827;
}

.hero-subtitle {
  max-width: 700px;
  color: #6b7280;
  line-height: 1.8;
  font-size: 15px;
}

/* ================= PANELS ================= */
.create-panel,
.library-panel {
  border-radius: 26px !important;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.04);
}

.panel-title {
  font-size: 28px;
  font-weight: 900;
  color: #111827;
}

.panel-subtitle {
  font-size: 14px;
  color: #6b7280;
}

/* ================= INPUTS ================= */
.custom-input ::v-deep .v-input__slot {
  border-radius: 16px !important;
  box-shadow: none !important;
}

.code-area ::v-deep textarea {
  font-family: "Courier New", monospace;
  font-size: 13px;
}

.save-btn,
.dialog-btn {
  text-transform: none !important;
  font-weight: 800;
  border-radius: 16px !important;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
}

/* ================= EMPTY ================= */
.empty-state {
  padding: 80px 20px;
  text-align: center;
  color: #94a3b8;
}

/* ================= SNIPPET CARD ================= */
.snippet-inner-card {
  border-radius: 22px !important;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #ffffff;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.03);
  transition: all 0.3s ease;
}

.snippet-inner-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 35px rgba(99, 102, 241, 0.08);
}

.snippet-title {
  font-size: 18px;
  font-weight: 800;
  color: #111827;
}

.snippet-language {
  font-size: 12px;
  font-weight: 700;
  color: #6366f1;
  margin-top: 2px;
}

/* ================= CODE BOX ================= */
.premium-code-box {
  margin-top: 14px;
  max-height: 320px;
  overflow: auto;
  border-radius: 16px;
  font-size: 13px;
  line-height: 1.6;
  padding: 18px;
  white-space: pre-wrap;
  word-break: break-word;
}

.prism-light .premium-code-box {
  background: #f8fafc;
  color: #111827;
}

.prism-dark .premium-code-box {
  background: #111827;
  color: #f8fafc;
}

/* ================= DELETE DIALOG ================= */
.delete-dialog-card {
  border-radius: 24px !important;
}

/* ================= DARK MODE ================= */
.theme--dark .hero-banner,
.theme--dark .create-panel,
.theme--dark .library-panel,
.theme--dark .snippet-inner-card {
  background: rgba(17, 24, 39, 0.95) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .hero-title,
.theme--dark .panel-title,
.theme--dark .snippet-title {
  color: white;
}

.theme--dark .hero-subtitle,
.theme--dark .panel-subtitle,
.theme--dark .empty-state {
  color: rgba(255, 255, 255, 0.55);
}

/* ================= MOBILE ================= */
@media (max-width: 960px) {
  .hero-title {
    font-size: 30px;
  }

  .panel-title {
    font-size: 24px;
  }
}
</style>
