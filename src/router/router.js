import { createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Theme from "../pages/Theme.vue";
import { getTheme } from "../api/api";

export const createAppRouter = ({ history }) => {
  const routes = [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Themes",
      path: "/theme/:theme",
      component: Theme,
      beforeRouteEnter(to, from, next) {
        getTheme(to.params.theme).then(
          (response) => (to.params.data = response.data)
        );
        next();
      },
    },
  ];

  return createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.fullPath === from.fullPath) return false;
      return savedPosition || { x: 0, y: 0 };
    },
  });
};
