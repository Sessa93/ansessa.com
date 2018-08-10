import Vue from 'vue';
import VueResource from 'vue-resource';

import _GithubRes from 'Src/resources/github.res';

Vue.use(VueResource);

const GithubRes = new _GithubRes(Vue.resource);

/* eslint-disable */
export { GithubRes };
