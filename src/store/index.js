import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        a: "",
        b: "",
        total: ""
    },
    mutations: {
        updateA(state, payload) {
            state.a = payload;
        },
        updateB(state, payload) {
            state.b = payload;
        },
        updateTotal(state, payload) {
            state.total = payload
        }
    },
    actions: {
        async doSum({ state, commit }) {
            let total = state.a + state.b;
            commit("updateTotal", total);
        }
    }
});

export default store;