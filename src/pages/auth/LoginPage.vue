<template>
  <div class="text-center text-h4 q-pa-lg">Logo</div>

  <q-card-section>
    <q-form class="q-gutter-md">
      <q-input outlined v-model="loginForm.email" type="email" label="Email">
        <template v-slot:prepend>
          <q-icon name="fa-solid fa-envelope" />
        </template>
      </q-input>

      <q-input
        outlined
        v-model="loginForm.password"
        :type="isPwd ? 'password' : 'text'"
        label="Contraseña"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </q-form>
  </q-card-section>

  <q-card-actions class="q-px-md">
    <q-btn
      unelevated
      class="full-width"
      color="blue"
      size="lg"
      label="Iniciar Sesion"
      @click="loginWithCredentials"
    />
  </q-card-actions>

  <div
    class="text-grey-6 q-pa-md text-center"
    @click="$router.push({ name: 'register' })"
  >
    ¿No tienes una cuenta?
  </div>

  <q-separator spaced inset />

  <q-card-actions class="q-pa-sm justify-center">
    <q-btn
      round
      glossy
      color="red"
      icon="fa-brands fa-google"
      @click="loginWithGoogle"
    />
    <q-btn
      round
      glossy
      color="blue"
      icon="fa-brands fa-facebook"
      @click="loginWithGoogle"
    />
  </q-card-actions>
</template>

<style>
.q-card {
  width: 360px;
}
</style>

<script lang="ts">
import { useAuth } from 'src/composables/useAuth';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const { loginForm, loginWithGoogle, loginWithCredentials } = useAuth();

    return {
      isPwd: ref(true),
      loginForm,

      loginWithGoogle,
      loginWithCredentials,
    };
  },
});
</script>
