import {createStore} from 'vuex';

import mentorsModule from './modules/mentors.js';

const store = createStore({
    modules: {
        mentors: mentorsModule
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