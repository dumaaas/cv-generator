// stores/counter.js
import {
    defineStore
} from 'pinia'

export const useCounterStore = defineStore('cvStore', {
    state: () => {
        return {
            cvInfo: null
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    getters: {
        getCvInfo: (state) => {
            return state.cvInfo;
        }
    },
    actions: {
        setCvInfo(payload) {
            this.cvInfo = payload;
        },
    },
})