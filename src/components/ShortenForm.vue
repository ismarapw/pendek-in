<template>

    <!-- Form -->
    <form action="" v-on:submit.prevent>
        <div class="form-group">
            <input type="text" placeholder="Tempel tautan mu disini" v-model="inputUrl" v-bind:class = "(invalidInput)?'error-input':''">
            <div v-if="invalidInput" class="error-msg">
                <i class="ri-error-warning-line"></i> 
                <span>Tautan harus diisi</span>
            </div>
        </div>
        <div class="form-group">
            <input type="text" placeholder="Custom alias (opsional)" v-model="inputCustom">
        </div>
        <div class="form-group">
            <button class="button button-submit" v-on:click="validateInput" v-bind:disabled="isWaiting">
                <div v-if="!isWaiting">
                    <i class="ri-send-plane-fill"></i> 
                    Pendekin
                </div>
                <div v-else class="flex flex-justify-center">
                    <img src="../assets/images/loading.svg" alt="" class="loading">
                    <span style="margin-left:5px">Bentar yaa</span>
                </div>
            </button>
        </div>
    </form>

    <!-- Result -->
    <ModalResult v-if="showModal" v-bind:shortenResult="serverResponse" v-on:close = "toggleModal"/>

</template>

<script>
import ModalResult from "./ModalResult.vue"
export default {

    components : {
        ModalResult
    },

    data(){
        return {
            inputUrl : '',
            inputCustom : '',
            invalidInput : false,
            serverResponse : null,
            showModal : false,
            isWaiting : false
        }
    },

    methods : {
        validateInput(){
            this.invalidInput = this.inputUrl == "" ?  true : false ;
            if(this.invalidInput == false){
                this.getShortLink(this.inputUrl, this.inputCustom);
                this.isWaiting = true;
            }
        },

        async getShortLink(url, alias) {
            try {
                // definisikan atribut API
                const baseURL = 'https://api.tinyurl.com/create?';
                const ApiToken = 'nPOYhxIANMPmyqcCSI5AlUFv4OzFD5yH2X716kvFWO7v45D66swAkTCwUJVZ';
                const requestBody = {
                    url : url,
                    alias : alias,
                    domain : "tinyurl.com",
                };

                // Request ke API 
                let data = await fetch(baseURL + 'api_token=' + ApiToken, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(requestBody)
                });

                // ambil response data
                this.serverResponse = await data.json();

                // tampilkan modal
                this.showModal = true;

                // berhentikan loading
                this.isWaiting = false;

            } catch (error) {
                console.log(error);
            }
        },

        toggleModal(){
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style>
    .loading {
        width: 25px;
        height: 25px;
    }

    .button-submit{
        height: 45px !important;
    }

</style>