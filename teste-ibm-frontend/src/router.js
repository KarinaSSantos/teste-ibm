import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      //trocar os nomes para os nomes certos
      name: 'Login',
      component: Login,
    },
    {
      path: '/login',
      //trocar os nomes para os nomes certos
      name: 'Login',
      component: Login,
    },
    {
      path: '/repos',
      name: 'repo-page',
      // route level code-splitting
      // this generates a separate chunk (repo-page.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "repo-page" */ './views/RepoPage'),
    },
  ],
});