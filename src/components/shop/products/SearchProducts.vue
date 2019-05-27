<template>
    <input class="form-control" type="text" placeholder="Search Courses..."
           @input="search"/>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "Search",
        methods: {
            ...mapMutations({
                setSearch: "products/setSearch"
            }),
            search(e) {
                this.setSearch(e.target.value);
            }
        },


    }
</script>
