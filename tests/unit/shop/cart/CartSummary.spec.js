import Vuex from "vuex"
import {expect} from 'chai'
import {mount, createLocalVue} from '@vue/test-utils'
import sinon from 'sinon'
import CartSummary from '@/components/shop/cart/CartSummary.vue'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CartSummary', () => {
    let getters;
    let store;
    let cart;

    beforeEach(() => {
        getters = {
            cartTotal: sinon.stub().returns(25),
        };

        cart = {
            namespaced: true,
            getters,
        };

        store = new Vuex.Store({
            modules: {
                cart
            }
        });
    });

    it('the renders the correct cart total', () => {
        const wrapper = mount(CartSummary, {
            localVue,
            store,
        });
        expect(getters.cartTotal.calledOnce);
        expect(wrapper.find('strong').text()).equal('$25');

    });

});
