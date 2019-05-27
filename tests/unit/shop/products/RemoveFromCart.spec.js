import Vuex from "vuex"
import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import sinon from 'sinon'
import RemoveFromCart from '@/components/shop/products/RemoveFromCart.vue'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('RemoveFromCart', () => {
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
            getCartProductById: () => sinon.stub().returns(product),
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

    it('the removes to cart button is not disabled when the cart it empty', () => {

        const wrapper = mount(RemoveFromCart, {
            localVue,
            store,
            propsData: {product}
        });
        expect(getters.getCartProductById.calledOnce);
        const button = wrapper.find('button');
        expect(button.attributes().disabled).to.equal(undefined);
    });

    it('the removes to cart button is disabled when the product in the cart', () => {
        getters.getCartProductById = () => sinon.stub().returns(undefined);

        store = new Vuex.Store({
            modules: {
                cart
            }
        });

        const wrapper = mount(RemoveFromCart, {
            localVue,
            store,
            propsData: {product}
        });
        expect(getters.getCartProductById.calledOnce);
        const button = wrapper.find('button');
        expect(button.attributes().disabled).to.equal('disabled');
    });

    it('clicking the button triggers RemoveFromCart function', () => {
        const wrapper = mount(RemoveFromCart, {
            localVue,
            store,
            propsData: {product}
        });
        const button = wrapper.find('button');
        button.trigger('click');
        expect(mutations.removeFromCart.calledOnce);
        expect(mutations.removeFromCart.firstCall.args[1]).to.be.equal(product);
    });
});
