<template>
  <div class="about">
    <h1>This is an about page!!</h1>
  </div>
</template>

<script>
export default {
    name: 'about',
    components: {
      // HelloWorld
    },
    created () {
        // インスタンスが生成された後にコードを実行したいときに使用
        console.log('About.vue!');
    },
    methods: {
      outputLog() {
        window.console.log("AboutHoge!!!!!!!!!!!!!!!!");
      },
      updateMessage() {
        // do something
      },
      changeState() {
        // do something
        this.outputLog();
      }
    },
    mounted() {
      this.outputLog();
      //
      // window.addEventListener('load', this.changeState, false);
      // window.addEventListener('popstate', this.changeState, false);
      // this.updateMessageTimer = setInterval(this.updateMessage, 5000);
    },
    destroyed() {
      // 破棄
      window.console.log('HOME_destroyed');
      // window.removeEventListener('popstate', this.changeState, false);
      // clearInterval(this.updateMessageTimer);
    }
};
</script>
