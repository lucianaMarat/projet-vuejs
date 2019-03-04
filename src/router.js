import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateProjet from './views/CreateProjet.vue';
import Projet from './views/Projet.vue';
import Client from './views/Client.vue';
import Salaries from './views/Salaries.vue';
import CreateClient from './views/CreateClient.vue';
import ProjetDetail from './views/ProjetDetail.vue';
import ProjetUpdate from './views/ProjetUpdate.vue';
import ProjetDelete from './views/ProjetDelete.vue';
import CreateSalaries from './views/CreateSalaries.vue';
import SalariesDetails from './views/SalariesDetails.vue';
import SalariesUpdate from './views/SalariesUpdate.vue';
import SalariesDelete from './views/SalariesDelete.vue';
 import ClientDetail from './views/ClientDetail.vue';
import ClientUpdate from './views/ClientUpdate.vue';
import ClientDelete from './views/ClientDelete.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Projet',
      name: 'Projet',
      
      component: () => import( './views/Projet.vue'),
    },
    {
      path: '/Client',
      name: 'Client',
      component: Client,
    },
    {
      path: '/Salaries',
      name: 'Salaries',
      component: Salaries,
    },
    {
      path: '/CreateProjet',
      name: 'CreateProjet',
      component: CreateProjet,
    },
    {
      path: '/CreateClient',
      name: 'CreateClient',
      component: CreateClient,
    },
    {
      path: '/ProjetDetail',
      name: 'ProjetDetail',
      component: ProjetDetail,
    },
    {
      path: '/CreateSalaries',
      name: 'CreateSalaries',
      component: CreateSalaries,
    },
    {
      path: '/ProjetUpdate',
      name: 'ProjetUpdate',
      component: ProjetUpdate,
    },
    {
      path: '/ProjetDelete',
      name: 'ProjetDelete',
      component: ProjetDelete,
    },
    {
      path: '/SalariesDetails',
      name: 'SalariesDetails',
      component: SalariesDetails,
    },
    {
      path: '/SalariesUpdate',
      name: 'SalariesUpdate',
      component: SalariesUpdate,
    },
     {
      path: '/SalariesDelete',
      name: 'SalariesDelete',
      component: SalariesDelete,
    },
    {
      path: '/ClientDetail',
      name: 'ClientDetail',
      component: ClientDetail,
    },
    {
      path: '/ClientUpdate',
      name: 'ClientUpdate',
      component: ClientUpdate,
    },
    {
      path: '/ClientDelete',
      name: 'ClientDelete',
      component: ClientDelete,
    } 

  ],
});
