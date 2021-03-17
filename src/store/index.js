import {createStore} from 'vuex';

import mentorsModule from './modules/mentors.js';
import requestsModule from './modules/requests.js';

const store = createStore({
    modules: {
        mentors: mentorsModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;