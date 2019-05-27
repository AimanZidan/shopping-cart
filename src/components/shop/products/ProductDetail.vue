<template>
    <div class="card float-left mr-3 mb-3">
        <div class="card-body" itemscope itemtype="http://schema.org/Product">
            <h5 class="card-title" itemprop="name">{{product.title}}</h5>
            <p class="card-text" itemprop="description">{{product.description}}</p>
            <p class="card-text" itemprop="price">
                Price: ${{product.price}}
            </p>
            <p class="card-text float-left" itemprop="audience">
                Level: {{product.level}}
            </p>
            <div class="btn-group float-right">
                <add-to-cart :product="product"/>
                <remove-from-cart :product="product"/>
            </div>

        </div>
    </div>
</template>

<script>
    import AddToCart from './AddToCart.vue'
    import RemoveFromCart from './RemoveFromCart.vue'

    export default {
        name: 'ProductDetail',
        props: {
            product: {
                type: Object,
                required: true
            }
        },
        components: {
            AddToCart,
            RemoveFromCart
        }
    }
</script>

<style scoped>
    .card {
        max-width: 24rem;
    }
</style>
