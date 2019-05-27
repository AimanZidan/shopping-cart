<template>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0 text-truncate">{{ product.title }}</h6>
        </div>
        <span class="text-muted">${{ product.price }}</span>
    </li>
</template>

<script>
    export default {
        name: "CartProduct",
        props: {
            product: {
                type: Object,
                required: true
            }
        }
    }
</script>
