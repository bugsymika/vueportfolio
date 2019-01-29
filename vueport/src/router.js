import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import about from "./views/About.vue";
import contact from "./views/contact.vue";
import projects from "./views/projects.vue";
import gym from "./views/gym.vue";
import mealprep from "./views/mealprep.vue";
import turkey from "./views/turkey.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    },
    {
      path: "/projects",
      name: "projects",
      component: projects
    },
    {
      path: "/mealPrepApp",
      name: "mealPrep",
      component: mealprep
    },
    {
      path: "/gymApp",
      name: "gym",
      component: gym
    },
    {
      path: "/turkeyApp",
      name: "turkey",
      component: turkey
    }
  ]
});
