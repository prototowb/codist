import {createStore} from 'vuex';

import mentorsModule from './modules/mentors.js';
import requestsModule from './modules/requests.js';
import authModule from './modules/auth.js';

const store = createStore({
    modules: {
        mentors: mentorsModule,
        requests: requestsModule,
        auth: authModule
    }
});

export default store;