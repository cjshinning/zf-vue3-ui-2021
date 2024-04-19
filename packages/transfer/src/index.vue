<template>
  <div class="z-transfer">
    <ZTransferPanel :data="sourceData" :props="props" @checked-change="onSourceCheckedChange"></ZTransferPanel>

    <div class="z-transfer__buttons">
      <z-button icon="z-icon-arrow-left-bold" @click="addToLeft" :disabled="rightChecked.length === 0"></z-button>
      &nbsp;
      <z-button icon="z-icon-arrow-right-bold" @click="addToRight" :disabled="leftChecked.length === 0"></z-button>
    </div>

    <ZTransferPanel :data="targetData" :props="props" @checked-change="onTargetCheckedChange"></ZTransferPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import ZTransferPanel from './transfer-panel.vue';
import ZButton from '@z-ui/button';
import { DataItem, Key, Props } from './transfer.types';
import { useComputedData } from './useComputedData';

export default defineComponent({
  name: 'ZTransfer',
  components: {
    ZTransferPanel,
    ZButton
  },
  props: {
    data: {
      type: Array as PropType<DataItem[]>
    },
    modelValue: {
      type: Array as PropType<Key[]>
    },
    props: {
      type: Object as PropType<Props>,
      default: {
        label: 'label',
        key: 'key',
        disabled: 'disabled'
      }
    }
  },
  setup(props, { emit }) {
    // 1.将数据分成两堆，一边放左，一边放右
    let { propKey, sourceData, targetData } = useComputedData(props);

    const checkedState = reactive({
      leftChecked: [],
      rightChecked: []
    })

    const onSourceCheckedChange = (leftValue) => {
      checkedState.leftChecked = leftValue;
    }
    const onTargetCheckedChange = (rightValue) => {
      checkedState.rightChecked = rightValue;
    }

    const addToLeft = () => {
      const currentValue = props.modelValue.slice(0);  //当前右边的索引
      checkedState.rightChecked.forEach(item => {
        // 直接从左边删掉即可
        let index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      emit('update:modelValue', currentValue);
    }

    const addToRight = () => {
      // 将当前左边的映射成key和右边的拼接一下，把数据发射出去即可
    }

    return {
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      ...toRefs(checkedState),
      addToLeft,
      addToRight
    }
  }
})
</script>