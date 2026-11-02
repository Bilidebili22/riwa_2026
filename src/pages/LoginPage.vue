<template>
  <q-page padding>
   <h4>Prijava korisnika</h4>

    <q-form @submit="prijavi" class="q-gutter-md">
      <q-input
        v-model="korisnickoIme"
        label="Korisničko ime"
        outlined
        required
      />

      <q-input
        v-model="lozinka"
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
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const korisnickoIme = ref('')
const lozinka = ref('')

function prijavi() {
  $q.notify({
    type: 'info',
    message: 'Prijava još nije povezana s bazom podataka.'
  })
}
</script>
