<template>
    <button type="button" class="btn btn-primary" title="Add to cart"
            :disabled="isAddedToCart"
            @click="addToCart(product)">
        +
    </button>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        name: 'AddToCart',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        computed: {
            isAddedToCart() {
                return this.getCartProductById(this.product.id);
            },
            ...mapGetters({
                getCartProductById: 'cart/getCartProductById'
            })
        },
        methods: {
            ...mapMutations({
                addToCart: 'cart/addToCart'
            })
        }
    }
</script>
