import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const oneStore = {
  namespaced: true,
  state: {
    one: "one",
  },
  getters: {
    jisuan(state, getters, rootState) {
      return state.one + rootState.root;
    },
  },
  mutations: {},
};

const twoStore = {
  namespaced: true,
  state: {
    two: "two",
  },
  getters: {
    jisuan(state, getters, rootState) {
      return state.one + rootState.root;
    },
  },
};

const threeStore = {
  namespaced: true,
  state: {
    three: "three",
  },
  getters: {
    threeGetters() {
      return 3;
    },
  },
};

export const store = new Vuex.Store({
  modules: {
    oneStore,
    twoStore,
  },
  state: {
    root: "root",
    num: 1,
    arr: [6, 3, 4, 8, 1, 9],
  },
  getters: {},
  mutations: {},
  actions: {},
});
store.registerModule("threeStore", threeStore);
