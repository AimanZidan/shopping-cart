<template>
    <aside>
        <!-- Heading -->
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your Cart</span>
        </h4>

        <!-- Cart -->
        <ul class="list-group mb-3 z-depth-1">
            <cart-product v-for="product in cartProducts" :product="product" :key="product.id"/>
        </ul>

        <cart-summary/>
    </aside>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CartProduct from './CartProduct.vue'
    import CartSummary from './CartSummary.vue'

    export default {
        name: "Cart",
        components: {
            CartProduct,
            CartSummary
        },
        computed: {
            ...mapGetters({
                cartProducts: 'cart/cartProducts'
            })
        }
    }
</script>
