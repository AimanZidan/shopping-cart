<template>
    <div>
        <header class="section-header">
            <navbar />
        </header>
        <section class="section-content bg padding-y">
        <div class="container">
            <div class="row mt-4">
                <div class="col-sm-4">
                    <search-products />
                </div>
            </div>
            <div class="row mt-4">
                    <main class="col-sm-9">
                        <products-list />
                    </main>
                    <div class="col-sm-3">
                        <cart />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Navbar from './../shared/Navbar.vue'
    import ProductsList from './products/ProductsList.vue'
    import Cart from './cart/Cart.vue'
    import SearchProducts from './products/SearchProducts.vue'

    export default {
        name: "Shop",
        components: {
            Navbar,
            ProductsList,
            Cart,
            SearchProducts
        }
    }
</script>
