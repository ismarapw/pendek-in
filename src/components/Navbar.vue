<template>
    <nav class="flex flex-justify-between container">
        <div class="brand">
            <h1>Pendek.in</h1>
        </div>
        <div class="nav-links flex flex-align-center">
            <div class="nav-item">
                <router-link v-bind:to="{name: 'shorten'}" class="button button-orange">Shorten</router-link>
            </div>
            <div class="nav-item">
                <router-link v-bind:to="{name: 'qrcode'}" class="button button-white">QR Code</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
    nav {
        margin: 20px 0 0 0;
    }

    .brand h1 {
        font-family: 'Pacifico';
        font-weight: 400;
        font-size: 32px;
        margin: 0;
        color: white;
    }

    .nav-item:nth-child(1){
        margin-right: 15px;
    }

    a{
        text-decoration: none;
    }


</style>