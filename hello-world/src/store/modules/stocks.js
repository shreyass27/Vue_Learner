import * as types from '../constants/stocks';
import { PORTFOLIO_BUY_STOCKS } from '../constants/portfolio';
import initStocks from '../../data/stocks';


const state = {
    stocks: []
}

const mutations = {
    [types.SET_STOCKS](state, stocks) {
        state.stocks = stocks;
    },
    [types.RND_STOCKS](state) {
        state.stocks = state.stocks.map(itm => {
            const price = Math.round(itm.price * (1 + Math.random() - 0.5));

            return {
                ...itm,
                price
            }
        });
    }
}

const actions = {
    [types.BUY_STOCKS]({ commit }, order) {
        commit(PORTFOLIO_BUY_STOCKS, order)
    },
    [types.INIT_STOCKS]({ commit }) {
        commit(types.SET_STOCKS, initStocks)
    },
    [types.SET_RND_STOCKS]({ commit }) {
        commit(types.RND_STOCKS)
    },

}

const getters = {
    [types.GET_STOCKS](state) {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}