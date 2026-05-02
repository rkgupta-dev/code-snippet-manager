<template>
  <div class="how-page">
    <!-- top hero -->
    <v-container class="mb-10">
      <v-card flat class="how-hero pa-8 pa-md-10 text-center">
        <div class="how-badge mb-4">PRODUCT WALKTHROUGH</div>
        <h1 class="how-title mb-4">How QuickSnip Works</h1>
        <p class="how-subtitle mx-auto">
          QuickSnip helps developers build a personal snippet vault for faster
          coding, easier sharing, and instant access to reusable code.
        </p>
      </v-card>
    </v-container>

    <!-- steps -->
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div v-for="(step, i) in steps" :key="i" class="process-step mb-8">
            <v-card flat class="step-card pa-6 pa-md-8">
              <v-row align="center">
                <v-col cols="12" md="3" class="text-center">
                  <div class="step-icon-wrap">
                    <v-icon size="44" color="primary">{{ step.icon }}</v-icon>
                  </div>
                  <div class="step-number mt-4">STEP {{ i + 1 }}</div>
                </v-col>

                <v-col cols="12" md="9">
                  <h2 class="step-title mb-3">{{ step.title }}</h2>
                  <p class="step-desc mb-0">
                    {{ step.desc }}
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
  data() {
    return {
      steps: [
        {
          icon: "mdi-content-save-outline",
          title: "Save Your Snippets",
          desc: "Create reusable code snippets by adding a title, selecting the programming language, and pasting your code. Your snippets are instantly stored in your local snippet vault for future use.",
        },
        {
          icon: "mdi-content-copy",
          title: "Copy in One Click",
          desc: "Need to reuse code? Simply click the copy icon and your snippet is copied to clipboard instantly — ready to paste into your project, IDE, or documentation.",
        },
        {
          icon: "mdi-magnify",
          title: "Search & Filter Efficiently",
          desc: "As your collection grows, use QuickSnip’s smart search and language filters to instantly locate the exact snippet you need without scrolling endlessly.",
        },
        {
          icon: "mdi-whatsapp",
          title: "Share Anywhere",
          desc: "Quickly share useful snippets with teammates, friends, or communities using built-in sharing options. Collaboration becomes faster and smoother.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.how-page {
  min-height: 100vh;
  padding: 20px 0 50px;
}

/* hero */
.how-hero {
  border-radius: 28px !important;
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(244, 114, 182, 0.08),
      transparent 30%
    ),
    linear-gradient(135deg, #ffffff, #f8fbff);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.how-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  padding: 7px 14px;
  border-radius: 30px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
  letter-spacing: 1px;
}

.how-title {
  font-size: 42px;
  font-weight: 900;
  color: #111827;
}

.how-subtitle {
  max-width: 700px;
  color: #6b7280;
  font-size: 15px;
  line-height: 1.8;
}

/* step cards */
.step-card {
  border-radius: 24px !important;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.03);
  transition: 0.3s ease;
}

.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 35px rgba(99, 102, 241, 0.08);
}

.step-icon-wrap {
  width: 88px;
  height: 88px;
  margin: auto;
  border-radius: 22px;
  background: rgba(99, 102, 241, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-number {
  font-size: 12px;
  font-weight: 800;
  color: #6366f1;
  letter-spacing: 1px;
}

.step-title {
  font-size: 28px;
  font-weight: 900;
  color: #111827;
}

.step-desc {
  color: #6b7280;
  line-height: 1.8;
  font-size: 15px;
}

/* dark mode */
.theme--dark .how-hero,
.theme--dark .step-card {
  background: rgba(17, 24, 39, 0.92) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .how-title,
.theme--dark .step-title {
  color: white;
}

.theme--dark .how-subtitle,
.theme--dark .step-desc {
  color: rgba(255, 255, 255, 0.5);
}

/* mobile */
@media (max-width: 960px) {
  .how-title {
    font-size: 30px;
  }

  .step-title {
    font-size: 22px;
    text-align: center;
  }

  .step-desc {
    text-align: center;
  }
}
</style>
