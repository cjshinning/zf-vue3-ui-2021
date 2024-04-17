import { computed, getCurrentInstance, WritableComputedRef } from 'vue';
import { ICheckboxProps } from './checkbox.types';

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance();
  const model = computed({
    get() {
      return props.modalValue;
    },
    set(val) {
      emit('update:modelValue', val);
    }
  })
  console.log(model, '----------------')
  return model;
}

const useCheckboxStatus = (props: ICheckboxProps, model: WritableComputedRef<unknown>) => {
  const isChecked = computed(() => {
    const value = model.value;  //当前是不是选中的
    // todo...
    return value;
  })
  return isChecked;
}

const useEvent = () => {
  const { emit } = getCurrentInstance();
  const handleChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    emit('change', target.checked);
  }
  return handleChange;
}

export const useCheckbox = (props: ICheckboxProps) => {
  // 1.设计一个属性，这个属性采用的就是modalValue，还能更改，更改的时候要出发一个事件，更新数据
  let model = useModel(props);

  // 2.给checkbox设置一个checked的状态，等更改checkbox时选中或者取消选中需要获取到checked状态
  let isChecked = useCheckboxStatus(props, model);

  // 3.创造一个change事件，可以触发绑定到子级的事件
  const handleChange = useEvent();

  return {
    model,
    isChecked,
    handleChange
  }
}