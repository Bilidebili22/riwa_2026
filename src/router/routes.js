const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/IndexPage.vue') },
      { path: 'popis', component: () => import('@/pages/PopisKnjigaPage.vue') },
      { path: 'pretraga', component: () => import('@/pages/TraziKnjiguPage.vue') },
      { path: 'Onama', component: () => import('@/pages/ONamaPage.vue') },
      { path: 'lokacija', component: () => import('@/pages/LokacijaPage.vue') },
      { path: 'login', component: () => import('@/pages/LoginPage.vue') },
      { path: 'registracija', component: () => import('@/pages/RegistracijaPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
