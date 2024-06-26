
import { App, createApp } from 'vue';
import Transfer from './src/index.vue';

Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer);
}
type IWithInstall<T> = T & { install(app: App): void }
const _Transfer: IWithInstall<typeof Transfer> = Transfer;
export default _Transfer;
