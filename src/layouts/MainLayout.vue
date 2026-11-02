<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-h3, text-weight-medium"> Knjiznica </q-toolbar-title>

        <div>Sirinjo v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.label"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from '@/components/EssentialLink.vue'

const linksList = [
  {
    label: 'Naslovnica(Pocetna)',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'IndexPage.vue'
  },
  {
    label: 'Popis knjiga',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'http://localhost:9000/#/popis'
  },
  {
    label: 'Trazi knjigu ',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'http://localhost:9000/#/pretraga'
  },
  {
    label: 'O nama page ',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'http://localhost:9000/#/Onama'
  },
  {
    label: 'Lokacija',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'http://localhost:9000/#/lokacija'
  },
  {
    label: 'Login',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'http://localhost:9000/#/login'
  },
  {
    label: 'registracija',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'http://localhost:9000/#/registracija'
  },

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
