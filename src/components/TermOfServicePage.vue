<template>
  <div class="legal-page">
    <v-container class="mb-8">
      <v-card flat class="legal-hero pa-8 pa-md-10 text-center">
        <div class="legal-badge mb-4">LEGAL</div>
        <h1 class="legal-title mb-3">Terms of Service</h1>
        <p class="legal-subtitle">Effective Date: December 13, 2024</p>
      </v-card>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <v-card flat class="legal-content pa-6 pa-md-10">
            <p class="intro-text mb-8">
              These Terms of Service govern your use of
              <strong>QuickSnip</strong>. By accessing or using this platform,
              you agree to comply with the following terms and conditions.
            </p>

            <div
              v-for="(section, i) in termsSections"
              :key="i"
              class="legal-section mb-8"
            >
              <div class="section-number mb-3">0{{ i + 1 }}</div>
              <h2 class="section-title mb-3">{{ section.title }}</h2>
              <p class="section-desc mb-4">{{ section.desc }}</p>

              <ul
                v-if="section.points && section.points.length"
                class="legal-list"
              >
                <li v-for="(point, j) in section.points" :key="j">
                  {{ point }}
                </li>
              </ul>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TermsOfServicePage",
  data() {
    return {
      termsSections: [
        {
          title: "Acceptance of Terms",
          desc: "By using QuickSnip, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you do not agree, please discontinue use of the platform.",
          points: [],
        },
        {
          title: "Permitted Use of the Website",
          desc: "QuickSnip is provided for developers to store, browse, copy, and share code snippets for educational, personal, or professional purposes.",
          points: [
            "You must not violate any applicable laws or regulations.",
            "You must not upload harmful, malicious, or illegal code.",
            "You must not interfere with website security or performance.",
          ],
        },
        {
          title: "Code Snippet Responsibility",
          desc: "Users are solely responsible for snippets they submit or share. By submitting content, you confirm that you possess the rights to distribute that code and that it does not violate third-party ownership.",
          points: [],
        },
        {
          title: "Intellectual Property",
          desc: "Open-source code snippets may be freely used in accordance with their respective licenses. However, platform branding, UI design, logos, and textual content remain the intellectual property of QuickSnip unless otherwise stated.",
          points: [],
        },
        {
          title: "Limitation of Liability",
          desc: "QuickSnip is provided on an 'as is' basis without warranties of uninterrupted availability or error-free functionality. We are not liable for losses, damages, or issues resulting from platform usage.",
          points: [],
        },
        {
          title: "Termination or Removal",
          desc: "We reserve the right to remove inappropriate content, restrict access, or discontinue any part of the service without prior notice if misuse or policy violations occur.",
          points: [],
        },
        {
          title: "Changes to Terms",
          desc: "These Terms may be updated periodically. Continued use of QuickSnip after updates constitutes acceptance of the revised terms.",
          points: [],
        },
        {
          title: "Governing Law",
          desc: "These Terms of Service shall be governed by and interpreted in accordance with the laws of India. Any disputes shall fall under the jurisdiction of the courts of India.",
          points: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  padding: 20px 0 60px;
}

/* hero */
.legal-hero {
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
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.legal-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 7px 14px;
  border-radius: 30px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
}

.legal-title {
  font-size: 40px;
  font-weight: 900;
  color: #111827;
}

.legal-subtitle {
  color: #6b7280;
  font-size: 14px;
}

/* content */
.legal-content {
  border-radius: 26px !important;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.04);
}

.intro-text {
  font-size: 15px;
  line-height: 1.9;
  color: #4b5563;
}

.legal-section {
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.section-number {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-size: 24px;
  font-weight: 900;
  color: #111827;
}

.section-desc {
  color: #6b7280;
  line-height: 1.8;
  font-size: 14px;
}

.legal-list {
  padding-left: 20px;
}

.legal-list li {
  margin-bottom: 10px;
  color: #374151;
  line-height: 1.8;
  font-size: 14px;
}

/* dark mode */
.theme--dark .legal-hero,
.theme--dark .legal-content {
  background: rgba(17, 24, 39, 0.92) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .legal-title,
.theme--dark .section-title {
  color: white;
}

.theme--dark .intro-text,
.theme--dark .section-desc,
.theme--dark .legal-list li,
.theme--dark .legal-subtitle {
  color: rgba(255, 255, 255, 0.6);
}

.theme--dark .legal-section {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* mobile */
@media (max-width: 960px) {
  .legal-title {
    font-size: 30px;
  }

  .section-title {
    font-size: 20px;
  }
}
</style>
