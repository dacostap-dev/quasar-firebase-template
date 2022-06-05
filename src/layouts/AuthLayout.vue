<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="window-height window-width row">
        <div class="col-0 col-md-6 bg-red-2" style="height: 100%"></div>
        <div class="col-12 col-md-6">
          <div class="row justify-center items-center" style="height: 100%">
            <div class="col-11 col-sm-8 col-md-6 col-lg-5">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthLayout',

  setup() {
    return {};
  },
});
</script>
