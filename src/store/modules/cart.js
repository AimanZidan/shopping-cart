const state = {
    cart: [],
};

const mutations = {
    addToCart(state, {id}) {
        state.cart.push(id);
    },
    removeFromCart(state, {id}) {
        const index = state.cart.findIndex(i => i === id);
        state.cart.splice(index, 1);
    }
};

const getters = {
    cartProducts: (state, getters, rootState) => {
        return rootState.products.products.filter(p => state.cart.includes(p.id))
    },
    cartTotal: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => total + product.price, 0)
    },
    getCartProductById: (state, getters) => (id) => {
        return getters.cartProducts.find(product => product.id === id);
    },
    cartSize: state => state.cart.length
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
