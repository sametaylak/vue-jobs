import Vue from 'vue';
import VueJobs from '@/vue-jobs';

import App from './App.vue';

Vue.use(VueJobs);

new Vue({
  el: '#app',
  render: createElement => createElement(App)
});
