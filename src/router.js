import { createRouter, createWebHashHistory } from 'vue-router';

import MentorDetails from './pages/mentors/MentorDetails.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import MentorsRegistration from './pages/mentors/MentorsRegistration.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/mentors' },
        { path: '/mentors', component: MentorsList },
        {
            path: '/mentors/:id', component: MentorDetails, props: true, children: [
                { path: 'contact', component: ContactMentor }, // /mentors/c1/contact
            ]
        },
        { path: '/register', component: MentorsRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ],
});

export default router;