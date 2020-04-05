
const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => state.counter
};

const mutations = {
    increment(state, payload) {
        // this.$emit('updated', 1);
        state.counter += payload ? payload : 1;
    },
    decrement(state) {
        // this.$emit('updated', -1);
        state.counter -= 1;
    }
};

const actions = {
    increment({ commit }, payload) {
        // this.$emit('updated', 1);
        commit('increment', payload)
    },
    decrement({ commit }) {
        // this.$emit('updated', -1);
        commit('decrement')
    },
    asyncIncrement({ commit }) {
        // this.$emit('updated', 1);
        setTimeout(() => {
            commit('increment')
        }, 1000);
    },
    asyncDecrement({ commit }) {
        // this.$emit('updated', -1);
        setTimeout(() => {
            commit('decrement')
        }, 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}