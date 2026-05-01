import Vue from "vue";
import VueRouter from "vue-router";

// Import your components
import HowWorks from "@/components/HowWorks.vue";
import SnippetManager from "@/components/SnippetManager.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage.vue";
import TermOfServicePage from "@/components/TermOfServicePage.vue";
import ContactUsPage from "@/components/ContactUsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: SnippetManager,
    meta: {
      title: "QuickSnip — Save, Organize, Copy & Share Code Snippets Instantly",
      description:
        "QuickSnip helps developers save, manage, search, and share reusable code snippets faster.",
    },
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: HowWorks,
    meta: {
      title: "How QuickSnip Works — Smart Snippet Workflow for Developers",
      description:
        "Learn how QuickSnip allows developers to save, search, copy, and share code snippets in seconds.",
    },
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
    meta: {
      title: "Privacy Policy — QuickSnip",
      description:
        "Read QuickSnip privacy practices, data handling, cookies, and user information protection policy.",
    },
  },
  {
    path: "/term-of-service",
    name: "TermsOfServicePage",
    component: TermOfServicePage,
    meta: {
      title: "Terms of Service — QuickSnip",
      description:
        "Read the terms and conditions governing the use of QuickSnip web application.",
    },
  },
  {
    path: "/contact-us",
    name: "TContactUsPage",
    component: ContactUsPage,
    meta: {
      title: "Contact QuickSnip — Developer Support & Feedback",
      description:
        "Need help or want to share feedback? Contact the QuickSnip support team directly.",
    },
  },
  // Add other routes here
  {
    path: "*", // Catch-all route
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Scroll to the saved position when using back/forward buttons
    } else {
      return { x: 0, y: 0 }; // Scroll to the top for new routes
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "QuickSnip";

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", to.meta.description || "");
  }

  next();
});

export default router;
