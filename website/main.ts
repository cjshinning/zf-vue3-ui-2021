import { createApp } from 'vue';
import App from './App.vue';

// import ZUI from 'z-ui';
// import ZUI from '../lib/index.js';
// import ZUI from '../lib/index.esm.js';
import Button from '../lib/button/index';
import Icon from '../lib/icon/index';
import 'theme-chalk/src/index.scss';


// 创建应用，并使用组件库
createApp(App).use(Button).use(Icon).mount('#app');