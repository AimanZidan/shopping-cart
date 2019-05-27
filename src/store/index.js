import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
import products from './modules/products.js'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexPersist = new VuexPersist({
    key: 'buy-courses',
    storage: localStorage,
    modules: ['cart']
});

export default new Vuex.Store({
    strict: debug,
    modules: {
        cart,
        products
    },
    plugins: [vuexPersist.plugin]
});
