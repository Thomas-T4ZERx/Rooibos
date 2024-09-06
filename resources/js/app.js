import './bootstrap';
import '../css/app.css';
import {createApp, h, ref} from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import PrimeVue from 'primevue/config';
import Layout from "./layouts/Layout.vue";
import Aura from '@primevue/themes/aura';
import Select from "primevue/select";
import Popover from 'primevue/popover';
import ToggleSwitch from 'primevue/toggleswitch';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';





createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./views/**/*.vue", { eager: true });
        let page = pages[`./views/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        prefix: 'p',
                        darkModeSelector: '.my-app-dark',
                        lightModeSelector: '.my-app-light', // Mode clair
                    },
                    ripple: true,
                },

            });

        // Register the Select component globally
        app.component('Select', Select);
        app.component('Popover', Popover);
        app.component('ToggleSwitch', ToggleSwitch);
        return app.mount(el);
    }
}).then();


// Initialiser le mode sombre à false pour démarrer en mode clair
const isDarkMode = ref(false);  // Assurez-vous que cela est défini ailleurs dans votre code

const initializeDarkMode = () => {
    const element = document.documentElement;

    if (isDarkMode.value) {
        element.classList.add('my-app-dark');
    } else {
        element.classList.add('my-app-light');
    }
};

// Fonction de basculement entre les modes
const emitDarkModeChange = () => {
    isDarkMode.value = !isDarkMode.value;
    const element = document.documentElement;

    if (isDarkMode.value) {
        element.classList.add('my-app-dark');
        element.classList.remove('my-app-light');
    } else {
        element.classList.add('my-app-light');
        element.classList.remove('my-app-dark');
    }
};

// Appeler initializeDarkMode pour appliquer le bon mode au chargement
initializeDarkMode();
