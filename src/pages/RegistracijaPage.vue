<template>
  <q-page padding>
    <h4>Registracija korisnika</h4>

    <q-form @submit="registriraj" class="q-gutter-md">
      <q-input
        v-model="korisnik.ime"
        label="Ime"
        outlined
        required
      />

      <q-input
        v-model="korisnik.prezime"
        label="Prezime"
        outlined
        required
      />

      <q-input
        v-model="korisnik.korisnickoIme"
        label="Korisničko ime"
        outlined
        required
      />

      <q-input
        v-model="korisnik.email"
        label="E-mail"
        type="email"
        outlined
        required
      />

      <q-input
        v-model="korisnik.lozinka"
        label="Lozinka"
        type="password"
        outlined
        required
      />

      <q-btn
        label="Potvrdi"
        type="submit"
        color="primary"
      />
    </q-form>
  </q-page>
</template>

<script setup>
//
import { reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const korisnik = reactive({
  ime: '',
  prezime: '',
  korisnickoIme: '',
  email: '',
  lozinka: ''
})

function registriraj() {
  $q.notify({
    type: 'positive',
    message: 'Podaci su uneseni. Povezivanje s bazom još nije implementirano.'
  })

  console.log('Novi korisnik:', {
    ...korisnik,
    lozinka: undefined
  })
}
</script>
