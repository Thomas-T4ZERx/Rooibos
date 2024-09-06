import './bootstrap';
import '../css/app.css';
import { createApp, h } from 'vue';
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
                        darkModeSelector: '.my-app-dark'
                    },
                    ripple: true
                }
            });

        // Register the Select component globally
        app.component('Select', Select);
        app.component('Popover', Popover);
        app.component('ToggleSwitch', ToggleSwitch);
        return app.mount(el);
    }
}).then();

