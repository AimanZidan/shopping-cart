import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ProductDetail from '@/components/shop/products/ProductDetail.vue'

describe('ProductDetail', () => {
    it('renders a product details correctly', () => {
        const wrapper = shallowMount(ProductDetail, {
            propsData: {
                product: {
                    id: '100',
                    title: 'title',
                    description: 'description',
                    level: 'level',
                    price: 25
                }
            }
        });

        expect(wrapper.find('[itemprop="name"]').text()).equal('title');
        expect(wrapper.find('[itemprop="description"]').text()).equal('description');
        expect(wrapper.find('[itemprop="audience"]').text()).equal('Level: level');
        expect(wrapper.find('[itemprop="price"]').text()).equal('Price: $25');
    })
});
