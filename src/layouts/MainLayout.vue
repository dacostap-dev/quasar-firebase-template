<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div class="text-subtitle1 q-pa-sm">Daniel Acosta</div>
        <q-avatar size="35px">
          <img :src="authStore.authUser?.photoURL!" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-btn
        class="full-width"
        color="red-4"
        icon="fa-solid fa-arrow-right-from-bracket"
        label="SALIR"
        @click="logout"
      />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useAuthStore } from 'src/stores/auth-store';

import { useAuth } from 'src/composables/useAuth';

const linksList = [
  {
    title: 'Home',
    caption: 'quasar.dev',
    icon: 'fa-solid fa-house',
    link: 'https://quasar.dev',
  },
  {
    title: 'Hospitales',
    caption: 'github.com/quasarframework',
    icon: 'fa-solid fa-hotel',
    link: 'https://github.com/quasarframework',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const { logout } = useAuth();

    const authStore = useAuthStore();

    return {
      logout,
      authStore,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
