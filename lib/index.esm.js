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

var script$1 = defineComponent({
    name: 'ZIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `z-icon-${_ctx.name}`
  }, "icon", 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "packages/icon/src/icon.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1);
};
const _Icon = script$1;
// import { App } from 'vue'
// import Icon from './src/icon.vue'
// Icon.install = (app: App): void => {
//   app.component(Icon.name, Icon)
// }
// export default Icon
// export default {}

const component = [
    _Button,
    _Icon
];
const install = (app) => {
    component.forEach(component => {
        app.component(component.name, component);
    });
};
var index = {
    install
};
// 组件库看效果的网站 -> 文档

export default index;
