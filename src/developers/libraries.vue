<template>
  <section class="developers-header">

    <span v-for="lib in libs">
    <libsBox
      :headline="lib.headline"
      :text="lib.text"
      :tag="lib.tag"
      :link="lib.link"
    />
    </span>
  </section>
</template>

<script>
    import LibsBox from 'components/libs/libsBox';
    export default {
        name: 'libraries',
        components: {
          [LibsBox.name]: LibsBox
        },
        data() {
          return {
            libs: [
              {
                headline: 'Official Vapor wrapper',
                text: 'Vapor wrapper for the API, implement the API in your Vapor web or CLI',
                tag: '#vapor'
              },
              {
                headline: 'Official Postman Collection',
                text: 'Postman collection for easy test against the API',
                tag: '#postman'
              },
              {
                headline: 'Official Insomnia Collection',
                text: 'Insomnia collection for easy test against the API',
                tag: '#insomnia',
                link: 'https://github.com'
              }
            ]
          }
        }
    };
</script>
