import { createVNode, render, VNode } from 'vue';
import { IMessageParam } from './message.types'
import MessageComponent from './message.vue';

const instances: VNode[] = [];

const Message = (options: IMessageParam) => {
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }

  // 1.元素应该渲染到哪里？body
  // 2.new Vue
  // 3.createVnode
  let offset = options.offset || 20;
  instances.forEach(vm => {
    offset += vm.el.offsetHeight + 20;
  })  //创建组件的时候，给他传进去偏移量

  let userClose = options.onClose
  let opts = {
    ...options,
    offset,
    onClose: () => {
      // console.log('用户知道弹窗要关闭了');
      // 当移动的时候，需要把位置进行调整，把当前的位置向上移，移除实例
      // 根据id移除对应的弹窗
      userClose?.();  //ES10的链判断运算符userClose&&userClose()
    }
  }

  const container = document.createElement('div');
  // 1.渲染组件
  const vm = createVNode(MessageComponent, opts as any);
  vm.props.onDestroy = () => {
    render(null, container);  //此render会移除dom，vue2的卸载不会
  }
  render(vm, container);
  // 2.将渲染后的结果，放到body下
  document.body.appendChild(container.firstElementChild);
  instances.push(vm);
}

export default Message