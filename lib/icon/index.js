import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: 'ZIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `z-icon-${_ctx.name}`
  }, "icon", 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Icon = script;
// import { App } from 'vue'
// import Icon from './src/icon.vue'
// Icon.install = (app: App): void => {
//   app.component(Icon.name, Icon)
// }
// export default Icon
// export default {}

export default _Icon;
