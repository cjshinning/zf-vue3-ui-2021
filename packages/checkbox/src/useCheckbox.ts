import { computed, getCurrentInstance, inject, WritableComputedRef } from 'vue';
import { ICheckboxGroupProvide, ICheckboxProps } from './checkbox.types';
const useCheckboxGroup = () => {
  const checkboxGroup = inject<ICheckboxGroupProvide>('ZCheckboxGroup', {});
  const isGroup = checkboxGroup.name === 'ZCheckboxGroup';
  return {
    isGroup,
    checkboxGroup
  }
}

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance();  //只有checkbox时，用户会传递modelValue
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const store = computed(() => checkboxGroup ? checkboxGroup.modelValue?.value : props.modelValue); //从父亲的modelValue取出来传递给自己
  const model = computed({
    get() {
      let xxx = isGroup ? store.value : props.modelValue;
      return isGroup ? store.value : props.modelValue;
    },
    set(val) {
      if (isGroup) {
        return checkboxGroup.changeEvent(val);
      }
      emit('update:modelValue', val);
    }
  })
  return model;
}

const useCheckboxStatus = (props: ICheckboxProps, model: WritableComputedRef<unknown>) => {
  const isChecked = computed(() => {
    const value = model.value;  //当前是不是选中的
    if (Array.isArray(value)) { //父组件传递过来的数组
      return value.includes(props.label);
    } else {  //true false
      return value;
    }

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

  // 每次状态发生变化都需要调用changeEvent来触发更新

  return {
    model,
    isChecked,
    handleChange
  }
}