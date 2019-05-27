import { expect } from 'chai'
import {shallowMount} from '@vue/test-utils'
import CartProduct from '@/components/shop/cart/CartProduct.vue'

describe('CartProduct', () => {
    it('renders a product title and price correctly inside the shopping cart', () => {
        const wrapper = shallowMount(CartProduct, {
            propsData: {
                product: {
                    title: "title",
                    price: 25
                }
            }
        });

        expect(wrapper.find('h6').text()).equal('title');
        expect(wrapper.find('.text-muted').text()).equal('$25');
    })
});
