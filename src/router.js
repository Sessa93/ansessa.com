import Vue from 'vue';
import Router from 'vue-router';

/* views */
import Home from 'Views/Home';
import Projects from 'Views/Projects';
import NotFound from 'Views/NotFound';

import CONSTANTS from 'Utils/constants.json';
import store from 'Src/store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
});

router.beforeEach((to, _, next) => {
    store.commit(CONSTANTS.MUTATIONS.ROUTE_CHANGE, to);
    next();
});

export default router;
