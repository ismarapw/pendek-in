<template>
    <form action="" v-on:submit.prevent>
        <div class="form-group">
            <input type="text" placeholder="Tempel tautan mu disini" v-model="inputUrl">
            <div v-if="invalidInput" class="error-msg">
                <i class="ri-error-warning-line"></i> 
                <span>Tautan harus diisi</span>
            </div>
        </div>
        <div class="form-group">
            <button class="button button-submit" v-on:click = "validateInput"><i class="ri-send-plane-fill"></i> Buat QR</button>
        </div>
    </form>

    <!-- Result -->
    <ModalResult v-if="showModal" v-bind:QrResult="QrURL" v-on:close = "toggleModal"/>
</template>

<script>
import ModalResult from "./ModalResult.vue";

export default {
    components : {
        ModalResult
    },

    data(){
        return {
            QrURL : null,
            inputUrl :'',
            invalidInput : false,
            showModal : false
        }
    },

    methods : {
        validateInput(){
            this.invalidInput = this.inputUrl == "" ?  true : false ;
            if(this.invalidInput == false){
                this.getQR(this.inputUrl);
            }
        },

        async getQR(dataToBeQR){
            try {
                let data = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=png&data=" + dataToBeQR);

                if(!data.ok){
                    throw error("Ada kesalahan, mungkin coba lagi nanti");
                }else {
                    // ambil response sebaga blob
                    let blobData = await data.blob();

                    // ubah blob menjadi URL
                    let urlBlob = URL.createObjectURL(blobData);
                   
                    // update nilai QrURL dan tampilkan modal
                    this.QrURL = urlBlob;
                    this.showModal = true;
                }

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

</style>