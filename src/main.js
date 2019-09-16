import Vue from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import Vuex from 'vuex';
import 'ant-design-vue/dist/antd.css';
import '../public/css/layout.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import store from './vuex/store';
import Vuebar from 'vuebar';
Vue.use(Vuebar);

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(PerfectScrollbar);
Vue.use(Vuex);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
