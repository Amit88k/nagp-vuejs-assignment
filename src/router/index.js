import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("../views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/Common")
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () => import("../views/MyPost")
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () => import("../views/AllTags")
        }
      ]
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "register",
      path: "/register",
      component: () => import("../views/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("../views/Settings")
    },
    {
      path: "/@:username",
      component: () => import("../views/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("../views/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () => import("../views/FavoriteArticles")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("../views/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import("@/views/UpdateArticle")
    }
  ]
});
