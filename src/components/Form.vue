<template>
    <div class="main-form flex flex-justify-center container">
        <div class="box-form">
            <div class="title">
                <h2>Hayo letakkan tautan mu disini</h2>
                <hr>
            </div>
            <div v-if="isShortenContent" class="form-content">
                <ShortenForm />
            </div>
            <div v-else class="form-content">
                <QrCodeForm />
            </div>
        </div>
    </div>
</template>

<script>

import ShortenForm from "./ShortenForm.vue"
import QrCodeForm from "./QrCodeForm.vue"

export default {
    props : ['isShortenContent'],
    components : {
        ShortenForm, QrCodeForm
    }

}
</script>

<style>
    .title h2 {
        text-align: center;
        font-size: 26px;
        font-weight: 600;
        margin: 25px 0 0 0;
    }

    .title hr {
        width: 40%;
        border: 1px solid #FF3D00;
    }

    .box-form {
        width: 797px;
        padding: 0 0 40px 0;
        background: #FFFFFF;
        box-shadow: 6px 4px 12px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        margin: 50px 0 0 0;
    }

    form {
        margin: 40px 0 0 0;
    }
    
    .form-group {
        margin: 18px auto;
        width: 60%;
    }

    input {
        width: 100%;
        padding: 10px 15px;
        border: 2px solid #727272;
        border-radius: 25px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    input:focus{
        outline: none !important;
        border: 2px solid #4A20F2;
        transition: .2s ease-in;
        color: #4A20F2;
    }

    .error-input {
        border: 2px solid #ff1f2b;
    }

    @media only screen and (max-width: 768px) {
        .title h2 {
            font-size: 22px;
        }

        .form-group {
            width: 70%;
            position: relative;
            left: -10px;
        }

        input {
            padding: 10px 10px;
        }

        .button-submit {
            width: 108% !important;
        }
    }


</style>