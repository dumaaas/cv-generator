import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// Create a new store instance.
export const store = new Vuex.Store({
  state: {
    cvInfo: {}
  },
  getters: {
    getCvInfo (state) {
        return state.cvInfo;
    }
  },
  mutations: {
    setCvInfo (state, payload) {
      state.cvInfo = payload;
    }
  }
})

export default store;
