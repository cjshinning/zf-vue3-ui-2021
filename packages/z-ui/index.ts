import Button from '@z-ui/button';
import Icon from '@z-ui/icon';
import ButtonGroup from '@z-ui/button-group';
import Row from '@z-ui/row';
import Col from '@z-ui/col';
import Checkbox from '@z-ui/checkbox';
import CheckboxGroup from '@z-ui/checkbox-group';
import Transfer from '@z-ui/transfer';
import { App } from 'vue';

const component = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  Transfer
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