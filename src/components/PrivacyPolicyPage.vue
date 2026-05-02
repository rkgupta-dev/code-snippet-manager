<template>
  <div class="legal-page">
    <v-container class="mb-8">
      <v-card flat class="legal-hero pa-8 pa-md-10 text-center">
        <div class="legal-badge mb-4">LEGAL</div>
        <h1 class="legal-title mb-3">Privacy Policy</h1>
        <p class="legal-subtitle">Effective Date: December 13, 2024</p>
      </v-card>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="9">
          <v-card flat class="legal-content pa-6 pa-md-10">
            <p class="intro-text mb-8">
              At <strong>QuickSnip</strong>, we respect your privacy. This
              policy explains how we collect, use, and safeguard information
              when you use our platform.
            </p>

            <div
              v-for="(section, i) in policySections"
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
  name: "PrivacyPolicyPage",
  data() {
    return {
      policySections: [
        {
          title: "Information We Collect",
          desc: "Since QuickSnip does not require mandatory account creation, we collect only minimal technical information necessary for platform functionality.",
          points: [
            "Usage data such as visited pages and user interactions.",
            "Browser/device technical details for performance optimization.",
            "IP address logs for analytics and security monitoring.",
          ],
        },
        {
          title: "How We Use Your Information",
          desc: "Collected information is used solely to improve service quality and user experience.",
          points: [
            "Optimize application performance.",
            "Analyze feature usage patterns.",
            "Improve usability and reliability.",
          ],
        },
        {
          title: "Cookies",
          desc: "We may use browser cookies and local storage to remember user preferences and enhance navigation experience.",
          points: [
            "Store theme preferences.",
            "Retain temporary snippet-related settings.",
            "Improve page loading performance.",
          ],
        },
        {
          title: "Data Security",
          desc: "We implement reasonable safeguards to protect platform data. However, internet-based services cannot guarantee absolute security.",
          points: [],
        },
        {
          title: "Sharing of Information",
          desc: "We do not sell, rent, or commercially distribute user information to third parties unless required under applicable law.",
          points: [],
        },
        {
          title: "Your Rights",
          desc: "Users maintain control over browser cookies and local storage. Since we collect minimal personal data, direct access/update requests are limited.",
          points: [],
        },
        {
          title: "Policy Updates",
          desc: "This Privacy Policy may be updated periodically. Any modifications will be reflected on this page along with a revised effective date.",
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
