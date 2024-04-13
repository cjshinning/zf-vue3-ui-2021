

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & { install(app: App): void };
  export default component;
}

// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   const component: ReturnType<typeof defineComponent>
//   export default component
// }

// declare module "*.vue" {
//   import { DefineComponent } from 'vue';
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

// declare module '*.vue' {
//   const component: number;
//   export default component;
// }


// 定义所有.vue文件的类型