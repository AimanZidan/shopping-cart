<template>
    <button type="button" class="btn btn-primary" title="Remove from cart"
            :disabled="!isAddedToCart"
            @click="removeFromCart(product)">
        -
    </button>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        name: 'RemoveFromCart',
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
                removeFromCart: 'cart/removeFromCart'
            })
        }
    }
</script>
