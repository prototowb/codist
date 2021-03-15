import {createStore} from 'vuex';

import mentorsModule from './modules/mentors.js';

const store = createStore({
    modules: {
        mentors: mentorsModule
    }
});

export default store;