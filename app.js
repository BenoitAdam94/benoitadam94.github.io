import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants de chaque page
import Accueil from './components/Accueil.vue';
import Portfolio from './components/Portfolio.vue';
import Liens from './components/Liens.vue';
import Contact from './components/Contact.vue';

// Définition des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/portfolio', component: Portfolio },
    { path: '/liens', component: Liens },
    { path: '/contact', component: Contact }
];

// Création du routeur
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Création de l'application Vue et intégration du routeur
const app = createApp({});
app.use(router);
app.mount('#app');
