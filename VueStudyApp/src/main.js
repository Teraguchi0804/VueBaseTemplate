import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    data: {
        string: 'mainjss'
    },
    // created: function () {
    created () {
    // インスタンスが生成された後にコードを実行したいときに使用
        console.log(this.string);
    }
}).$mount('#app');
