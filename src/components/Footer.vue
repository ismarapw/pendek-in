<template>
  <footer class="footer">
    <hr>
    <div class="footer-content flex flex-justify-between">
        <div class="author">
            <p>Copyright 2022 @ismar_apw</p>
        </div>
        <div class="powered">
            <p> API Powered by tiny.url</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
    footer {
        margin-top: 30vh;
    }
    footer p {
        margin: 0;
        font-size: 14px;
    }

    @media only screen and (min-width: 2560px) {
        footer {
            margin-top: 100vh;
        }
    }

    
</style>