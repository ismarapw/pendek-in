<template>
  <Navbar />
  <Hero v-bind:isShortenContent="isShortenContent" />
  <Form v-bind:isShortenContent="isShortenContent"/>
  <Footer />
</template>


<script>

import Navbar from "../components/Navbar.vue"
import Hero from "../components/Hero.vue"
import Form from "../components/Form.vue"
import Footer from "../components/Footer.vue"

export default {
  name: 'ShortenPageView',
  components : {
    Navbar, Hero, Form, Footer
  }, 

  data (){
    return {
      isShortenContent : true
    }
  }
}

</script>

<style>


</style>
