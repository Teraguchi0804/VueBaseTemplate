<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    created() {
        // インスタンスが生成された後にコードを実行したいときに使用
        // 初回のみではなく毎回呼ばれる
        console.log('Home.vue');
    },
    data() {
      return {
        updateMessageTimer : null
      }
    },
    methods: {
      outputLog() {
        window.console.log("HomeHoge!!!!!!!!!!!!!!!!");
      },
      updateMessage() {
        // do something
      },
      changeState() {
        // do something
        this.outputLog();
      },
      goAbout() {
        // 指定のパスへルーティング(遷移)
        this.$router.push({ path: 'about' });
      }
    },
    mounted() {
      this.outputLog();

      // 3秒後にaboutに遷移
      // setTimeout(this.goAbout, 3000);

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
