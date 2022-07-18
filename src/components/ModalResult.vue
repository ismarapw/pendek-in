<template>
  <div class="modal flex flex-justify-center flex-align-center">
    <div class="modal-box">
      <header>
        <div class="header-content flex flex-justify-between">
          <h3 class="header-text">Pesan Tautan</h3>
          <div class="bg-close-modal flex-align-self-center">
            <i class="ri-close-line" v-on:click = "closeModal"></i>
          </div>
        </div>
        <hr class="header-line">
      </header>

      <section v-if="shortenResult">
        <div v-if="shortenResult.code === 0">
          <p>Wih ada link baru nich</p>
          <div class="result flex">
            <input class="input-result" type="text" readonly v-model = "shortenResult.data.tiny_url">
            <button class="button button-copy" v-on:click = "copyToClipboard(shortenResult.data.tiny_url)"><i class="ri-file-copy-line"></i> Copy</button>
          </div>
        </div>
        <div v-if="shortenResult.code !== 0">
          <p class="error-result">Waduh gagal, katanya "{{shortenResult.errors[0]}}"</p>
        </div>
      </section>

      <section v-if="QrResult">
        <p class="msg-qr">Wih ada QR Code nih, buruan scan!</p>
        <div class="flex flex-justify-center">
          <img v-bind:src="QrResult" alt="hasil-generate">
        </div>
        <div class="flex flex-justify-center" style="margin-top: 20px">
          <a v-bind:href="QrResult" download target="_blank" class="button button-download"><i class="ri-download-fill"></i>Download</a>
          <button class="button button-copy-secondary" style="margin-left: 20px" v-on:click = "copyToClipboard(QrResult)"><i class="ri-file-copy-line"></i>Copy</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props : ['shortenResult','modalStatus', 'QrResult'],

  mounted (){
    console.log(this.QrResult);
  },

  methods : {
    closeModal(){
      this.$emit('close')
    },

    copyToClipboard(data){
      navigator.clipboard.writeText(data);
    }
  }

}
</script>

<style>
    .modal {
      position: fixed;
      top: 0;
      left : 0;
      right : 0;
      bottom: 0;
      background-color: rgba(20, 20, 20,0.6);
    }

    .modal-box {
      width: 400px;
      padding : 20px;
      background-color: white;  
      border-radius: 15px;
    }

    .header-text {
      margin: 0;
      text-align: center;
      color : #1A1A1A;
      font-size: 24px;
      margin-left: 5px;
    }

    .header-line {
      border: 1px solid #cccccc;
      margin-top: 15px;
    }

    .bg-close-modal {
      width: 30px;
      height: 30px;
      background-color: #ececec;
      border-radius: 100%;
      cursor: pointer;
    }

    .ri-close-line {
      position: relative;
      top: 4.5px;
      left: 5.5px;
      color: #757575;
      font-size: 20px;
    }

    .input-result {
      width: 65%;
    }

    .button-copy, .button-download{
      margin-left: 10px;
      background: linear-gradient(90deg, #4A20F2 0%, #9B50FB 154.01%);
      color: white;
    }

    .error-result {
      text-align: center;
    }

    .result {
      padding-bottom: 20px;
    }

    .msg-qr {
      text-align: center;
    }
    
    .button-copy-secondary{
      background-color: #dfdfdf;
      color: #1A1A1A;
    }

</style>