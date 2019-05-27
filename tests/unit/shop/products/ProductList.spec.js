import Vuex from "vuex"
import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import sinon from 'sinon'
import ProductsList from '@/components/shop/products/ProductsList.vue'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ProductList', () => {
    let mutations;
    let getters;
    let actions;
    let state;
    let store;
    let products;

    beforeEach(() => {
        state = {
            products: [],
            search: ''
        };
        mutations = {
            setProducts: sinon.stub(),
            setSearch: sinon.stub()
        };
        getters = {
            filteredProducts: sinon.stub().returns(state.products)
        };

        actions = {
            loadProducts: sinon.stub()
        };

        products = {
            namespaced: true,
            state,
            getters,
            actions,
            mutations
        };

        store = new Vuex.Store({
            modules: {
                products
            }
        });
    });

    it('fetch the products data on created by calling loadProducts method', () => {
        mount(ProductsList, {
            localVue,
            store
        });
        expect(actions.loadProducts.calledOnce);
        expect(getters.filteredProducts.calledOnce);

    });


});
