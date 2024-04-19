import { createVNode, render } from 'vue';
import { IMessageParam } from './message.types'
import MessageComponent from './message.vue';

const Message = (options: IMessageParam) => {
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }

  // 1.元素应该渲染到哪里？body
  // 2.new Vue
  // 3.createVnode
  const container = document.createElement('div');
  const vm = createVNode(MessageComponent);
  render(vm, container);
  document.body.appendChild(container.firstElementChild);
}

export default Message