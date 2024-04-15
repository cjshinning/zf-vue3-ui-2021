import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: 'ZButton',
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", null, "按钮"))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Button = script;
// import { App } from 'vue'
// import Button from './src/button.vue'
// Button.install = (app: App): void => {
//   app.component(Button.name, Button)
// }
// export default Button
// import { App, createApp } from 'vue';
// import Button from './src/button.vue';
// const install = (app: App): void => {
//   app.component(Button.name, Button)
// }
// // export default {}
// export default Button
// import Button from './src/button.vue'
// Button
// import type { App, Plugin } from 'vue'
// type SFCWithInstall<T> = T & Plugin
// Button.install = (app: App): void => {
//   app.component(Button.name, Button)
// }
// const _Button = Button as SFCWithInstall<typeof Button>
// export default _Button

export default _Button;
