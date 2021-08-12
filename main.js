// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import zircle from "zircle";
import "zircle/dist/zircle.css";
import wrap from "@vue/web-component-wrapper";

const CustomElement = wrap(Vue, App);

window.customElements.define("my-custom-element", CustomElement);

Vue.use(zircle);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
