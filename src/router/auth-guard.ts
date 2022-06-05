// import { firebaseAuth } from 'boot/firebase';
import { firebaseAuth } from 'src/boot/firebase';
import { authUser } from 'src/interfaces/user-interface';
import { useAuthStore } from 'src/stores/auth-store';
import { NavigationGuardWithThis } from 'vue-router';

const isAuthenticatedGuard: NavigationGuardWithThis<undefined> = async (
  to,
  from,
  next
) => {
  console.log('entrando');
  const authUser = await getAuthUser();

  console.log(authUser);

  useAuthStore().$patch({ authUser });

  if (authUser != null && to.path != '/login') {
    next();
  } else if (authUser != null && to.path == '/login') {
    next({ name: 'dashboard' });
  } else if (authUser == null && to.path == '/login') {
    next();
  } else {
    next({ name: 'login' });
  }
  console.log('holaaaa3');
};

export default isAuthenticatedGuard;

function getAuthUser() {
  return new Promise<authUser | null>((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
}
