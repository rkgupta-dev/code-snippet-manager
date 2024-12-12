import Vue from "vue";
import VueRouter from "vue-router";

// Import your components
import HowWorks from "@/components/HowWorks.vue";
import SnippetManager from "@/components/SnippetManager.vue";
import PageNotFound from "@/components/PageNotFound.vue";

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
