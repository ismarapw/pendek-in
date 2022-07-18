<template>
    <div class="hero-bg"></div>
    <div class="hero-content container">
        <div class="tagline">
            <p v-if="isShortenContent">Tautan kamu <strong>kepanjangan</strong> ? </p>
            <p v-else>Tautan kamu perlu di <strong>scan</strong> ? </p>
        </div>
        <div class="sub-tagline">
            <p v-if="isShortenContent"><strong>Ayo</strong> segera <strong>pendekin link</strong> kamu hanya di <strong>Pendek.in</strong></p>
            <p v-else><strong>Ayo</strong> segera <strong>buat QR Code</strong> kamu hanya di <strong>Pendek.in</strong></p>
        </div>
    </div>

</template>

<script>
export default {
    props : [
        'isShortenContent'
    ]
}
</script>

<style>
    .hero-bg {
        background-image: url("../assets/images/hero-bg.svg");
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: center;
        z-index: -1;
    }

    .tagline, .sub-tagline {
        text-align: center;
        color: white;
        max-width: 900px;
        margin: auto;
    }

    .tagline p {
        font-size: 32px;
        font-weight: 500;
        margin: 80px 0 0 0;
    }

    .sub-tagline p{
        font-size: 54px;
        margin: 20px 0;
    }

    @media only screen and (max-width: 1200px) {
        .hero-bg {
            background-size: inherit;
        }
    }

    @media only screen and (max-width: 768px) {
        .tagline p {
            font-size: 24px;
        }

        .sub-tagline p{
            font-size: 38px;
        }
    }





</style>