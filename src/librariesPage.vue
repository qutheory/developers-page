<template>
    <div class="vapor-app">
        <libraries class="developers-app__nav"/>

    </div>
</template>

<script>
    import libraries from 'components/libraries'
    export default {
        name: 'librariesPage',
        components: {
            [libraries.name]: libraries
        }
    }
</script>
