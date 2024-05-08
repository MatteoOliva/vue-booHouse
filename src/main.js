import App from './App.vue';

import { router } from './router';


import * as bootstrap from "bootstrap";

// / import the fontawesome core /
import { library } from '@fortawesome/fontawesome-svg-core';
// / import font awesome icon component /
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// / import specific icons  from the 3 free kits/
import { faUser, faSkull, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';
// / add icons to the library */
library.add(faUser, faSkull, faMagnifyingGlass);


import { createApp } from 'vue';
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
