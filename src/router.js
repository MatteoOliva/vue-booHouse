import { createRouter, createWebHistory } from 'vue-router';

import AppSearch from './pages/AppSearch.vue';
import AppMain from './components/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain
        },
        {
            path: '/search',
            name: 'search',
            component: AppSearch
        }

    ]
});

export { router };

