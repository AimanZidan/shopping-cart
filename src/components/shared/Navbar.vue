<template>
     <nav class="navbar navbar-light navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Buy Courses</a>
            <span class="badge badge-dark float-right">{{ cartSize }}</span>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Navbar",
        computed: {
            ...mapGetters({
                cartSize: 'cart/cartSize'
            })
        }
    }
</script>
