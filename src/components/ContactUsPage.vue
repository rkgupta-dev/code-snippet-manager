<template>
  <div class="contact-page">
    <!-- top hero -->
    <v-container class="mb-8">
      <v-card flat class="contact-hero pa-8 pa-md-10 text-center">
        <div class="contact-badge mb-4">SUPPORT CENTER</div>
        <h1 class="contact-title mb-4">Get in Touch with QuickSnip</h1>
        <p class="contact-subtitle mx-auto">
          Need help, have feedback, or want to suggest improvements? Reach out —
          we’d love to hear from developers using QuickSnip.
        </p>
      </v-card>
    </v-container>

    <v-container>
      <v-row>
        <!-- contact info -->
        <v-col cols="12" md="5">
          <v-card flat class="info-panel pa-6 pa-md-8">
            <div class="panel-mini-badge mb-3">CONTACT INFO</div>
            <h2 class="panel-title mb-2">Reach Us Directly</h2>
            <p class="panel-subtitle mb-8">
              We usually respond within 24 hours for support and product
              queries.
            </p>

            <div
              v-for="(item, i) in contactInfo"
              :key="i"
              class="contact-info-box mb-5"
            >
              <div class="d-flex align-center">
                <div class="contact-icon-wrap mr-4">
                  <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </div>

                <div>
                  <div class="contact-label">{{ item.label }}</div>
                  <div class="contact-value">{{ item.value }}</div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>

        <!-- form -->
        <v-col cols="12" md="7">
          <v-card flat class="form-panel pa-6 pa-md-8">
            <div class="panel-mini-badge mb-3">MESSAGE US</div>
            <h2 class="panel-title mb-2">Send a Message</h2>
            <p class="panel-subtitle mb-8">
              Fill in the details below and our team will get back to you
              shortly.
            </p>

            <v-form v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                label="Full Name"
                :rules="nameRules"
                outlined
                dense
                class="custom-input mb-3"
              ></v-text-field>

              <v-text-field
                v-model="email"
                label="Email Address"
                :rules="emailRules"
                outlined
                dense
                class="custom-input mb-3"
              ></v-text-field>

              <v-textarea
                v-model="message"
                label="Your Message"
                :rules="messageRules"
                outlined
                rows="5"
                class="custom-input"
              ></v-textarea>

              <v-btn
                :disabled="!valid || loading"
                :loading="loading"
                large
                depressed
                color="primary"
                class="send-btn mt-5"
                type="submit"
              >
                <v-icon left v-if="!loading">mdi-send-outline</v-icon>
                {{ loading ? "Sending Message..." : "Send Message" }}
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>

      <v-snackbar
        v-model="snackbar.visible"
        :color="snackbar.color"
        timeout="3000"
      >
        {{ snackbar.message }}
      </v-snackbar>
    </v-container>

    <v-dialog v-model="successDialog" max-width="460" persistent>
      <v-card class="success-dialog pa-8 text-center">
        <div class="success-check mx-auto mb-5">
          <v-icon size="42" color="white">mdi-check</v-icon>
        </div>

        <h2 class="success-title mb-3">Message Sent Successfully 🎉</h2>

        <p class="success-subtitle mb-6">
          Thank you for reaching out to QuickSnip. We have received your message
          and will get back to you within 24 hours.
        </p>

        <v-btn
          color="primary"
          large
          depressed
          rounded
          class="px-10 text-capitalize font-weight-bold"
          @click="successDialog = false"
        >
          Awesome
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactUsPage",
  data() {
    return {
      successDialog: false,
      loading: false,
      valid: false,
      name: "",
      email: "",
      message: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 3) || "Name must be at least 3 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      messageRules: [
        (v) => !!v || "Message is required",
        (v) =>
          (v && v.length >= 10) || "Message must be at least 10 characters",
      ],
      snackbar: {
        visible: false,
        message: "",
        color: "success",
      },
      contactInfo: [
        {
          icon: "mdi-phone-outline",
          color: "green",
          label: "Phone Support",
          value: "+91 7079812442",
        },
        {
          icon: "mdi-email-outline",
          color: "amber darken-2",
          label: "Email Address",
          value: "rohitkumarrgupta@gmail.com",
        },
        {
          icon: "mdi-map-marker-outline",
          color: "red",
          label: "Office Address",
          value: "10th Main, Indiranagar, Bengaluru - 560038, India",
        },
      ],
    };
  },

  created() {
    emailjs.init({
      publicKey: process.env.VUE_APP_EMAILJS_PUBLIC_KEY,
    });
  },

  methods: {
    submitForm() {
      if (!this.valid) return;

      this.loading = true;

      const emailData = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      };

      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          emailData,
        )
        .then((response) => {
          console.log("Email sent successfully:", response);

          this.loading = false;
          this.successDialog = true;

          this.name = "";
          this.email = "";
          this.message = "";

          setTimeout(() => {
            this.successDialog = false;
          }, 4000);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);

          this.loading = false;

          this.snackbar.message = "Failed to send message. Please try again.";
          this.snackbar.color = "error";
          this.snackbar.visible = true;
        });
    },
  },
};
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 20px 0 50px;
}

/* hero */
.contact-hero {
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

.contact-badge,
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

.contact-title {
  font-size: 40px;
  font-weight: 900;
  color: #111827;
}

.contact-subtitle {
  max-width: 720px;
  color: #6b7280;
  line-height: 1.8;
  font-size: 15px;
}

/* panels */
.info-panel,
.form-panel {
  border-radius: 26px !important;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.04);
  height: 100%;
}

.panel-title {
  font-size: 28px;
  font-weight: 900;
  color: #111827;
}

.panel-subtitle {
  color: #6b7280;
  font-size: 14px;
}

/* info cards */
.contact-info-box {
  padding: 18px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid rgba(0, 0, 0, 0.03);
}

.contact-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: rgba(99, 102, 241, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-label {
  font-size: 13px;
  font-weight: 700;
  color: #6366f1;
}

.contact-value {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
}

/* inputs */
.custom-input ::v-deep .v-input__slot {
  border-radius: 16px !important;
}

.send-btn {
  text-transform: none !important;
  font-weight: 800;
  border-radius: 16px !important;
  height: 48px !important;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
}

/* dark */
.theme--dark .contact-hero,
.theme--dark .info-panel,
.theme--dark .form-panel {
  background: rgba(17, 24, 39, 0.92) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .contact-title,
.theme--dark .panel-title,
.theme--dark .contact-value {
  color: white;
}

.theme--dark .contact-subtitle,
.theme--dark .panel-subtitle {
  color: rgba(255, 255, 255, 0.5);
}

.theme--dark .contact-info-box {
  background: rgba(255, 255, 255, 0.03);
}

.success-dialog {
  border-radius: 28px !important;
  background: linear-gradient(135deg, #ffffff, #f8fbff);
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
}

.success-check {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #34d399);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: popScale 0.5s ease;
  box-shadow: 0 12px 30px rgba(16, 185, 129, 0.3);
}

.success-title {
  font-size: 28px;
  font-weight: 900;
  color: #111827;
}

.success-subtitle {
  color: #6b7280;
  font-size: 14px;
  line-height: 1.8;
}

@keyframes popScale {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.theme--dark .success-dialog {
  background: #111827 !important;
}

.theme--dark .success-title {
  color: white;
}

.theme--dark .success-subtitle {
  color: rgba(255, 255, 255, 0.6);
}

/* mobile */
@media (max-width: 960px) {
  .contact-title {
    font-size: 30px;
  }

  .panel-title {
    font-size: 22px;
  }
}
</style>
