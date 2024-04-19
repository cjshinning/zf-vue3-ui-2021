import { computed } from 'vue';
import { ITransferProps } from './transfer.types';

export const useComputedData = (props: ITransferProps) => {
  // 计算左右数据
  const propsKey = computed(() => props.props.key);
  // 数组格式化成对象，用reduce
  const data = computed(() => {
    return props.data.reduce((memo, current) => {
      memo[current[propsKey.value]] = current;
      return memo;
    }, {})
  })
  const sourceData = computed(() => { //过滤掉不是props中的modelvalue
    return props.data.filter(item => !props.modelValue.includes(item[propsKey.value]))
  })
  const targetData = computed(() => { //过滤掉不是props中的modelvalue
    return props.modelValue.reduce((memo, key) => {
      memo.push(data.value[key]);
      return memo;
    }, [])
  })

  return {
    propsKey,
    sourceData,
    targetData
  }
}