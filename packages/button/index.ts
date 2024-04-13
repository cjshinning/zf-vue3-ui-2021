
import { App, createApp } from 'vue';
import Button from './src/button.vue';

Button.install = (app: App): void => {
  app.component(Button.name, Button);
}
type IWithInstall<T> = T & { install(app: App): void }
const _Button: IWithInstall<typeof Button> = Button;
export default _Button;



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