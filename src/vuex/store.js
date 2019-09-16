import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        isSidebarCollapsed: false
    },

    mutations: {

        setSidebarState ( store, state ) {

            store.isSidebarCollapsed = state

        }

    },

    getters: {

        isSidebarCollapsed: state => state.isSidebarCollapsed,

    }

})