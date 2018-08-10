import Vue from 'vue';
import Vuex from 'vuex';
import CONSTANTS from 'Utils/constants.json';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        current_path: '/',
        sidenav_status: 'closed',
        fetched_data: {
            my_repos: null
        }
    },
    mutations: {
        [CONSTANTS.MUTATIONS.SIDENAV_OPEN](state) {
            state.sidenav_status = CONSTANTS.CLASSES.OPENED;
        },
        [CONSTANTS.MUTATIONS.SIDENAV_CLOSE](state) {
            state.sidenav_status = CONSTANTS.CLASSES.CLOSED;
        },
        [CONSTANTS.MUTATIONS.SIDENAV_TOGGLE](state) {
            if (state.sidenav_status === CONSTANTS.CLASSES.OPENED) {
                state.sidenav_status = CONSTANTS.CLASSES.CLOSED;
            } else {
                state.sidenav_status = CONSTANTS.CLASSES.OPENED;
            }
        },
        [CONSTANTS.MUTATIONS.ROUTE_CHANGE](state, to) {
            state.current_path = to.path;
        },
        [CONSTANTS.MUTATIONS.UPDATE_MY_REPOS](state, res) {
            state.fetched_data.my_repos = res;
        }
    }
});

export default store;
