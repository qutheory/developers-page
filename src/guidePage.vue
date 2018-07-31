<template>
    <div class="vapor-app">
        <guide class="developers-app__nav"/>

    </div>
</template>

<script>
    import guide from 'components/guide'
    export default {
        name: 'guidePage',
        components: {
            [guide.name]: guide
        }
    }
</script>
