<template>
 <h4>Pretraživanje knjiga</h4>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-input
          v-model="pojam"
          label="Unesite naslov ili autora"
          outlined
        />
      </div>

      <div class="col-12">
        <q-checkbox
          v-model="poNaslovu"
          label="Pretražuj po naslovu"
        />

        <q-checkbox
          v-model="poAutoru"
          label="Pretražuj po autoru"
        />
      </div>

      <div class="col-12">
        <q-btn
          label="Traži"
          color="primary"
          @click="traziKnjige"
        />
      </div>
    </div>

    <q-table
      class="q-mt-lg"
      title="Pronađene knjige"
      :rows="rezultati"
      :columns="stupci"
      row-key="id"
    />
</template>

<script setup>
import { ref } from 'vue'

const pojam = ref('')
const poNaslovu = ref(true)
const poAutoru = ref(false)

const knjige = [
  { id: 1, naslov: 'Mali princ', autor: 'Antoine de Saint-Exupéry' },
  { id: 2, naslov: 'Zločin i kazna', autor: 'Fjodor Dostojevski' },
  { id: 3, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić' }
]

const rezultati = ref([])

const stupci = [
  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    sortable: true
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    sortable: true
  }
]

function traziKnjige() {
  const unos = pojam.value.toLowerCase().trim()

  if (!poNaslovu.value && !poAutoru.value) {
    rezultati.value = []
    return
  }

  rezultati.value = knjige.filter((knjiga) => {
    const naslovOdgovara =
      poNaslovu.value &&
      knjiga.naslov.toLowerCase().includes(unos)

    const autorOdgovara =
      poAutoru.value &&
      knjiga.autor.toLowerCase().includes(unos)

    return naslovOdgovara || autorOdgovara
  })
}
</script>
