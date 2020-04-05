import * as types from '../constants/portfolio';
import { GET_STOCKS } from '../constants/stocks';

const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    [types.PORTFOLIO_BUY_STOCKS](state, { stockId, stockPrice, quantity }) {
        const record = state.stocks.find(ele => ele.id === stockId);

        if (record) {
            record.quantity += quantity
        } else {
            state.stocks = [...state.stocks, {
                id: stockId,
                price: stockPrice,
                quantity
            }];
            console.log(state);
            state.funds -= stockPrice * quantity;
        }
    },
    [types.PORTFOLIO_SELL_STOCKS](state, { stockId, stockPrice, quantity }) {
        const record = state.stocks.find(ele => ele.id === stockId);

        if (record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks = state.stocks.filter(ele => ele.id !== stockId);
        }
        console.log(state);
        state.funds += stockPrice * quantity;
    }
}

const actions = {
    [types.ON_SELL_STOCKS]({ commit }, order) {
        commit(types.PORTFOLIO_SELL_STOCKS, order)
    },
}

const getters = {
    [types.GET_STOCK_PROTFOLIO](state, getters) {
        const allStocks = getters[GET_STOCKS];

        return state.stocks.map(stock => {
            const record = allStocks.find(ele => ele.id === stock.id);
            return {
                ...stock,
                ...record,
            }
        })
    },
    [types.GET_FUND_PROTFOLIO](state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}