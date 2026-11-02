<template>
  <q-page padding>
  <div class="q-pa-md">
  <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
</div>
  </q-page>
</template>

<script setup>
const columns = [
  {
    name:'id',
    required: true,
    label:'id',
    align: 'left',
        field:'id',
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'ime',
    align: 'left',
    label: 'ime',
    field: 'ime',
    sortable: true,

    style: {
      fontSize:'14px'
    },
    headerStyle: {
      fontSize: '18px'
    }

  }
  
  ,
  { name: 'autor', label: 'autor', field: 'autor', sortable: true },
  { name: 'datum izlaska', label: 'datum izlaska', field: 'datum_izlaska' },
  { name: 'genre', label: 'genre', field: 'genre' },
  { name: 'broj stranica', label: 'broj stranica', field: 'broj_stranica' },

]

 const rows = [
  {
    id: 1,
    ime: "Na Drini ćuprija",
    autor: "Ivo Andrić",
    datum_izlaska: 1945,
    genre: "povijesna",
    broj_stranica: 314,
  },
  {
    id: 2,
    ime: "Zločin i kazna",
    autor: "Fjodor Dostojevski",
    datum_izlaska: 1866,
    genre: "psihološki roman",
    broj_stranica: 671,
  },
  {
    id: 3,
    ime: "Mali princ",
    autor: "Antoine de Saint-Exupéry",
    datum_izlaska: 1943,
    genre: "fantastika",
    broj_stranica: 96,
  },
  {
    id: 4,
    ime: "1984",
    autor: "George Orwell",
    datum_izlaska: 1949,
    genre: "distopija",
    broj_stranica: 328,
  },
  {
    id: 5,
    ime: "Romeo i Julija",
    autor: "William Shakespeare",
    datum_izlaska: 1597,
    genre: "tragedija",
    broj_stranica: 160,
  },
  {
    id: 6,
    ime: "Gospodar prstenova",
    autor: "J. R. R. Tolkien",
    datum_izlaska: 1954,
    genre: "fantastika",
    broj_stranica: 423,
  },
  {
    id: 7,
    ime: "Ponos i predrasude",
    autor: "Jane Austen",
    datum_izlaska: 1813,
    genre: "romantika",
    broj_stranica: 432,
  },
  {
    id: 8,
    ime: "Mali ratovi",
    autor: "J. R. R. Tolkien",
    datum_izlaska: 1937,
    genre: "fantastika",
    broj_stranica: 310,
  },
];
</script>
