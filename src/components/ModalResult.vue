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
      <section>
        <div v-if="result.code === 0">
          <p>Wih ada link baru nich</p>
          <div class="result flex">
            <input class="input-result" type="text" readonly v-model = "result.data.tiny_url">
            <button class="button button-copy" v-on:click = "copyToClipboard">Copy</button>
          </div>
        </div>
        <div v-if="result.code !== 0">
          <p class="error-result">Waduh gagal, katanya "{{result.errors[0]}}"</p>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
export default {
  props : ['result','modalStatus'],

  methods : {
    closeModal(){
      this.$emit('close')
    },

    copyToClipboard(){
      navigator.clipboard.writeText(this.result.data.tiny_url);
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
    }

    .ri-close-line {
      position: relative;
      top: 4.5px;
      left: 5.5px;
      color: #757575;
      font-size: 20px;
    }

    .input-result {
      width: 70%;
    }

    .button-copy {
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


</style>