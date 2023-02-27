<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-black gt-sm text-weight-bold">
          {{ $route.name }}
        </q-toolbar-title>
        <q-icon
          class="q-pa-md lt-md absolute-center"
          size="md"
          color="primary"
          name="fa-brands fa-twitter"
        ></q-icon>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="283"
    >
      <q-icon
        class="q-pa-md"
        size="lg"
        color="primary"
        name="fa-brands fa-twitter"
      ></q-icon>

      <q-list>
        <q-item exact clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon
              size="md"
              class=""
              name="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Anasayfa</q-item-section
          >
        </q-item>

        <q-item exact clickable v-ripple to="/explore">
          <q-item-section avatar>
            <q-icon
              size="md"
              class=""
              name="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"
            />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Keşfet</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        class="q-ma-md"
        rounded
        outlined
        placeholder="Twitter'da ara"
        dense
      >
        <template v-slot:prepend>
          <q-icon
            size="1rem"
            name="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          />
        </template>
      </q-input>
      <q-list class="" separator bordered padding>
        <q-item class="q-pa-md">
          <q-item-section class="">
            <q-item-label class="text-gray" size="2rem"
              >Gündemdekiler</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Single line item</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-gray" size="2rem"
              >Gündemdekiler</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Single line item</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>18 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-gray" size="2rem"
              >Gündemdekiler</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Single line item</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>36 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
<style>
.container {
  width: 100%;
}
</style>
