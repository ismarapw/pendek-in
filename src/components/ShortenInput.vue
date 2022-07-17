<template>
    <form action="" v-on:submit.prevent>
        <div class="form-group">
            <input type="text" placeholder="Tempel tautan mu disini">
        </div>
        <div class="form-group">
            <input type="text" placeholder="Custom nama (opsional)">
        </div>
        <div class="form-group">
            <button class="button button-submit" v-on:click="getShortLink"><i class="ri-send-plane-fill"></i> Pendekin</button>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            inputUrl : '',
            ApiKey : 'e6967829a1dc682879b65363c813823be4119',
            baseURL : 'https://cutt.ly/api/api.php?'
        }
    },

    methods : {
        getShortLink() {
            fetch( 'https://cutt.ly/')
            .then( response => response.json() )
            .then( response => {
                // Do something with response.
                console.log(response);
            } );
        }
    }
}
</script>

<style>


</style>