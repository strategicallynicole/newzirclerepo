import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import Zircle from "./main.js";

const myZircle = () => {
  const CustomZircle = wrap(Vue, Zircle);

  window.customElements.define("my-zircle", CustomZircle);
};
export default myZircle;
