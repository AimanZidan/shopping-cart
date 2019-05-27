import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart.js';
import products from './modules/products.js';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    modules: {
        cart,
        products
    },
});
