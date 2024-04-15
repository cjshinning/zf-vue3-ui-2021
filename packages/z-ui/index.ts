import Button from '@z-ui/button';
import Icon from '@z-ui/icon';
import ButtonGroup from '@z-ui/button-group';
import { App } from 'vue';

const component = [
  Button,
  Icon,
  ButtonGroup
]

const install = (app: App): void => {
  component.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}

// 组件库看效果的网站 -> 文档 