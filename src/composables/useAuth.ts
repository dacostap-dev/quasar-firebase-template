import { Notify } from 'quasar';
import { AuthErrors } from 'src/helpers/AuthErrors';
import { useAuthStore } from 'src/stores/auth-store';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export const useAuth = () => {
  const authStore = useAuthStore();
  const router = useRouter();

  const loginForm = reactive({ email: '', password: '' });
  const registerForm = reactive({ email: '', password: '' });

  const loginWithGoogle = async () => {
    console.log('loginWithGoogle');

    authStore.loginWithGoogle().then(() => router.push({ name: 'dashboard' }));
  };

  const loginWithCredentials = async () => {
    authStore
      .loginWithCredentials(loginForm.email, loginForm.password)
      .then(() => router.push({ name: 'dashboard' }))
      .catch((res) => {
        console.log(res);

        Notify.create({
          message: AuthErrors[res.code] ?? 'Error desconocido',
        });
      });
  };

  const register = async () => {
    authStore
      .registerUser(registerForm.email, registerForm.password)
      .then(() => router.push({ name: 'dashboard' }))
      .catch((res) => {
        console.log(res);

        Notify.create({
          message: AuthErrors[res.code] ?? 'Error desconocido',
        });
      });
  };
  const logout = async () => {
    authStore
      .logout()
      .then(() => router.push({ name: 'login' }))
      .catch((res) => {
        console.log(res);

        Notify.create({
          message: AuthErrors[res.code] ?? 'Error desconocido',
        });
      });
  };

  return {
    loginForm,
    registerForm,
    loginWithGoogle,
    loginWithCredentials,
    register,
    logout,
  };
};
