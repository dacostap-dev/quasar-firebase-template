import { defineStore } from 'pinia';
import { Notify } from 'quasar';
import {
  firebaseAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'src/boot/firebase';
import { AuthErrors } from 'src/helpers/AuthErrors';
import { authState } from 'src/interfaces/user-interface';


type actionsInterface = {
  registerUser: (email: string, password: string) => Promise<void>;
  loginWithCredentials: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

type gettersInterface = {
  test: () => void;
};

export const useAuthStore = defineStore<
  string,
  authState,
  gettersInterface,
  actionsInterface
>('auth', {
  state: () => ({
    authUser: null,
  }),
  actions: {
    async registerUser(email: string, password: string) {
      return createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        (userCredential) => {
          // Signed in
          console.log('createUserWithEmailAndPassword');

          this.authUser = userCredential.user;
          // ...
        }
      );
    },

    async loginWithCredentials(email: string, password: string) {
      console.log('loginWithCredentials');

      return await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      ).then((userCredential) => {
        // Signed in
        this.authUser = userCredential.user;
      });
    },

    async loginWithGoogle() {
      console.log('loginWithGoogle');

      const provider = new GoogleAuthProvider();

      await signInWithPopup(firebaseAuth, provider)
        .then((res) => {
          console.log({ res });

          this.authUser = res.user;
        })
        .catch((res) => {
          console.log(res);

          Notify.create({
            message: AuthErrors[res.code] ?? 'Error desconocido',
          });
        });
    },

    async logout() {
      await firebaseAuth.signOut();
      console.log('logout');
    },
  },
});
