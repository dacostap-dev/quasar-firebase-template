import { route } from 'quasar/wrappers';
import { firebaseAuth } from 'src/boot/firebase';
import { authUser } from 'src/interfaces/user-interface';
import { useAuthStore } from 'src/stores/auth-store';
// import { useAuthStore } from 'src/stores/auth-store';

import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });

  Router.beforeEach(async (to, from, next) => {
    console.log('entrando');

    const authUser = await getAuthUser();

    console.log(authUser);

    useAuthStore().$patch({ authUser });

    if (authUser && to.path != '/login') {
      next();
    } else if (authUser && (to.path == '/login' || to.path == '/register')) {
      next({ name: 'dashboard' });
    } else if (!authUser && (to.path == '/login' || to.path == '/register')) {
      next();
    } else {
      next({ name: 'login' });
    }
  });

  return Router;
});

function getAuthUser() {
  return new Promise<authUser | null>((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
}
