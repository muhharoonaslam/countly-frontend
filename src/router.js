import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout.vue';
import TopDates from '@/components/TopDates.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: TopDates
        }
      ]
    }
  ]
});
