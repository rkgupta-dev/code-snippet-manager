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
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    component: HowWorks,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/term-of-service",
    name: "TermsOfServicePage",
    component: TermOfServicePage,
  },
  {
    path: "/contact-us",
    name: "TContactUsPage",
    component: ContactUsPage,
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

export default router;
