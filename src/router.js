import { createRouter, createWebHistory } from 'vue-router';

import AppSearch from './pages/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import AppDetails from './pages/AppDetails.vue';

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
        },
        {
            path: '/details/:slug',
            name: 'details',
            component: AppDetails
        }

    ]
});

export { router };

