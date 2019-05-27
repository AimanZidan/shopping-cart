<template>
    <div>
        <div class="alert alert-warning" role="alert" v-if="!products.length">
            There are no courses to display
        </div>
        <div v-else>
            <product-detail v-for="product in products" :product="product" :key="product.id"/>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import ProductDetail from './ProductDetail.vue'

    export default {
        name: "productsList",
        components: {
            ProductDetail
        },
        created() {
            this.loadProducts();
        },
        methods: {
            ...mapActions({
                loadProducts: 'products/loadProducts'
            })
        },
        computed: {
            ...mapGetters({
                products: 'products/filteredProducts'
            })
        }
    }
</script>

