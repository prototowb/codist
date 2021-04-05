import { createRouter, createWebHistory } from 'vue-router';

import MentorDetails from './pages/mentors/MentorDetails.vue';
import MentorsList from './pages/mentors/MentorsList.vue';
import MentorsRegistration from './pages/mentors/MentorsRegistration.vue';
import ContactMentor from './pages/requests/ContactMentor.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/mentors' },
    { path: '/mentors', component: MentorsList },
    {
      path: '/mentors/:id', component: MentorDetails, props: true, children: [
        { path: 'contact', component: ContactMentor }, // /mentors/c1/contact
      ]
    },
    { path: '/register', component: MentorsRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/mentors');
  } else {
    next();
  }
});

export default router;