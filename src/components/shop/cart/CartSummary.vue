<template>
    <li class="list-group-item d-flex justify-content-between">
        <span>Sum</span>
        <strong>${{ cartTotal }}</strong>
    </li>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "CartSummary",
        computed: {
            ...mapGetters({
                cartTotal: 'cart/cartTotal'
            })
        }
    }
</script>
