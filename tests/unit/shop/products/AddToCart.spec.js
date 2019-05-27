import Vuex from "vuex"
import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import sinon from 'sinon'
import AddToCart from '@/components/shop/products/AddToCart.vue'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddToCart', () => {
    let product;
    let mutations;
    let getters;
    let state;
    let store;
    let cart;

    beforeEach(() => {
        product = {
            id: '100',
            title: 'title',
            description: 'description',
            level: 'level',
            price: 25
        };
        state = {
            cart: []
        };
        mutations = {
            addToCart: sinon.stub(),
            removeFromCart: sinon.stub()
        };
        getters = {
            cartProducts: sinon.stub(),
            cartTotal: sinon.stub(),
            getCartProductById: () => sinon.stub().returns(undefined),
            cartSize: sinon.stub()
        };

        cart = {
            namespaced: true,
            state,
            getters,
            mutations
        };

        store = new Vuex.Store({
            modules: {
                cart
            }
        });
    });

    it('the add to cart button is not disabled when the cart it empty', () => {

        const wrapper = mount(AddToCart, {
            localVue,
            store,
            propsData: {product}
        });
        expect(getters.getCartProductById.calledOnce);
        const button = wrapper.find('button');
        expect(button.attributes().disabled).to.equal(undefined);
    });

    it('the add to cart button is disabled when the product in the cart', () => {
        getters.getCartProductById = () => sinon.stub().returns(product);

        store = new Vuex.Store({
            modules: {
                cart
            }
        });

        const wrapper = mount(AddToCart, {
            localVue,
            store,
            propsData: {product}
        });
        expect(getters.getCartProductById.calledOnce);
        const button = wrapper.find('button');
        expect(button.attributes().disabled).to.equal('disabled');
    });

    it('clicking the button triggers addToCart function', () => {
        const wrapper = mount(AddToCart, {
            localVue,
            store,
            propsData: {product}
        });
        const button = wrapper.find('button');
        button.trigger('click');
        expect(mutations.addToCart.calledOnce);
        expect(mutations.addToCart.firstCall.args[1]).to.be.equal(product);
    });
});
