<template>
    <div class="vapor-app">
        <index class="developers-app__nav"/>

    </div>
</template>

<script>
    import index from 'components/index'
    export default {
        name: 'indexPage',
        components: {
            [index.name]: index
        }
    }
</script>
