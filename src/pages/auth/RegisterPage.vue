<template>
  <div class="text-center text-h4 q-pa-lg">Regiter</div>

  <q-card-section>
    <q-form class="q-gutter-md">
      <q-input v-model="registerForm.email" type="email" label="Email">
      </q-input>

      <q-input v-model="registerForm.password" type="text" label="Contraseña">
      </q-input>
    </q-form>
  </q-card-section>

  <q-card-actions class="q-px-md">
    <q-btn
      unelevated
      class="full-width"
      color="blue"
      size="lg"
      label="Registrar"
      @click="register"
    />
  </q-card-actions>

  <div
    class="text-grey-6 q-pa-md text-center"
    @click="$router.push({ name: 'login' })"
  >
    ¿Ya tienes una cuenta?
  </div>
</template>

<script lang="ts">
import { useAuth } from 'src/composables/useAuth';

import { defineComponent } from 'vue';
// import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'RegisterPage',

  setup() {
    const { registerForm, register } = useAuth();

    return {
      registerForm,
      register,
    };
  },
});
</script>
