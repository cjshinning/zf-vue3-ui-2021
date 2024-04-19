import { computed, getCurrentInstance, watch } from 'vue';
import { IPanelState, ITransferPanelProps } from './transfer.types';


export const useCheck = (props: ITransferPanelProps, panelState: IPanelState) => {
  const { emit } = getCurrentInstance();
  const labelProp = computed(() => props.props.label);
  const keyProp = computed(() => props.props.key);
  const disabledProp = computed(() => props.props.disabled);

  const checkableData = computed(() => {  //过滤出不是禁用的
    return props.data.filter(item => !item[disabledProp.value]);
  })

  const handleCheckAllChange = (val) => {
    // 1.需要将所有数据拿到，通过当前的值来做筛选

    panelState.allChecked = val;
    panelState.checked = val ? checkableData.value.map(item => item[keyProp.value]) : [];
  }

  watch(() => panelState.checked, () => {
    // 看一眼有没有false，有的话就就表示没选中
    const checkKeys = checkableData.value.map(item => item[keyProp.value]); //获取所有的key
    // 去所有的key里看，看panelState.checked是否包含这个key
    panelState.allChecked = checkKeys.length > 0 && checkKeys.every(key => panelState.checked.includes(key));

    emit('checked-change', panelState.checked);
  })

  // 数据变化后清空checked属性，保证还原allChecked
  watch(() => props.data, () => {
    panelState.checked = [];
  })

  return {
    labelProp,
    keyProp,
    disabledProp,
    handleCheckAllChange
  }
}