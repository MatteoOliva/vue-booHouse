import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppMain from './components/AppMain.vue';
import AppDetails from './pages/AppDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },

        {
            path: '/details/:slug',
            name: 'details',
            component: AppDetails
        }

    ]
});

export { router };

