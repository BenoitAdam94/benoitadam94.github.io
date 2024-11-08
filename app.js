// Création de l'application Vue
const { createApp } = Vue;

createApp({
    // Données de l'application
    data() {
        return {
            message: "Bienvenue sur mon site Vue.js !",
            compteur: 0
        };
    },
    // Méthodes de l'application
    methods: {
        incrementer() {
            this.compteur++;
        }
    }
}).mount('#app'); // Monte l'application sur l'élément avec l'id "app"
