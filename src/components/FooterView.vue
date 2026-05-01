<template>
  <v-footer padless class="footer-wrap mt-10">
    <v-container class="py-10">
      <v-row>
        <!-- brand -->
        <v-col cols="12" md="4" class="mb-8 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-avatar size="32" tile class="mr-3">
              <v-img :src="require('@/assets/logo.png')" contain></v-img>
            </v-avatar>

            <div>
              <h3 class="quick-brand mb-0">QuickSnip</h3>
            </div>
          </div>

          <p class="footer-desc">
            Effortlessly save, organize, search, and share your most important
            code snippets from anywhere.
          </p>

          <div class="mt-5 d-flex">
            <v-btn
              v-for="(social, i) in socials"
              :key="i"
              :href="social.link"
              target="_blank"
              icon
              class="footer-social mr-2"
            >
              <v-icon size="18" :color="social.color">{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- quick links -->
        <v-col cols="12" sm="6" md="4" class="mb-8 mb-sm-0">
          <div class="footer-heading">Quick Links</div>

          <div class="footer-link-list">
            <router-link to="/how-it-works" class="footer-link">
              How It Works
            </router-link>

            <router-link to="/contact-us" class="footer-link">
              Contact Us
            </router-link>

            <!-- <router-link to="/privacy-policy" class="footer-link">
              Privacy Policy
            </router-link>

            <router-link to="/term-of-service" class="footer-link">
              Terms of Service
            </router-link> -->
          </div>
        </v-col>

        <!-- developer note -->
        <v-col cols="12" sm="6" md="4">
          <div class="footer-heading">Built For Developers</div>
          <p class="footer-desc">
            QuickSnip is crafted to help engineers save repetitive effort,
            improve productivity, and access reusable snippets instantly.
          </p>

          <div class="footer-email mt-4">
            <v-icon small color="white" class="mr-2">mdi-email-outline</v-icon>
            rohitkumarrgupta@gmail.com
          </div>
        </v-col>
      </v-row>

      <div class="footer-divider mt-8 mb-5"></div>

      <div class="footer-bottom text-center">
        © {{ new Date().getFullYear() }} QuickSnip — Crafted with ❤️ by
        <a
          href="https://rohitt-a020b.web.app/"
          target="_blank"
          class="author-link"
        >
          Rohit Kr. Gupta
        </a>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "mdi-twitter",
          link: "https://x.com/KrRohit3337",
          color: "#1DA1F2",
        },
        {
          icon: "mdi-github",
          link: "https://github.com/rkgupta-dev",
          color: "white",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/rohit-kr-gupta-921760208/",
          color: "#0077B5",
        },
        {
          icon: "mdi-email",
          link: "mailto:rohitkumarrgupta@gmail.com",
          color: "#D44638",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-wrap {
  background: radial-gradient(
      circle at top left,
      rgba(99, 102, 241, 0.18),
      transparent 25%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(244, 114, 182, 0.12),
      transparent 25%
    ),
    #0f172a;
  color: white;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
}

.footer-logo-circle {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-brand {
  font-size: 24px;
  font-weight: 900;
  margin: 0;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  font-size: 14px;
  max-width: 330px;
}

.footer-heading {
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}

.footer-link-list {
  display: flex;
  flex-direction: column;
}

.footer-link {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 14px;
  transition: 0.3s;
}

.footer-link:hover {
  color: white;
  transform: translateX(4px);
}

.footer-social {
  background: rgba(3, 1, 9, 0.402) !important;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.3s;
}

.footer-social:hover {
  transform: translateY(-4px);
  background: rgba(99, 102, 241, 0.3) !important;
}

.footer-email {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.06);
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.75);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
}

.footer-bottom {
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  letter-spacing: 0.3px;
}

.author-link {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.author-link:hover {
  color: #ffa316;
  text-shadow: 0 0 8px rgba(244, 209, 102, 0.6);
}

/* mobile */
@media (max-width: 960px) {
  .footer-brand {
    font-size: 20px;
  }

  .footer-desc {
    max-width: 100%;
  }

  .footer-heading {
    margin-top: 10px;
  }
}
</style>
