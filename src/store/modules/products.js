import {loadProducts} from '../../api/products.js';

const state = {
    products: [],
    search: ''
};

const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setSearch(state, search) {
        state.search = search;
    }
};

const getters = {
    filteredProducts: (state) => {
        if (!state.search.trim().length) {
            return state.products;
        } else {
            return state.products.filter(p =>
                p.description.toLowerCase().includes(state.search.toLowerCase())
                || p.title.toLowerCase().includes(state.search.toLowerCase()))
        }
    }
};

const actions = {
    loadProducts({commit}) {
        loadProducts.then((response) => {
            commit('setProducts', response);
        })
            .catch((error) => {
                console.error(error);
            });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
