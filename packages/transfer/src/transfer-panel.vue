<template>
  <div class="z-transfer__panel">
    <z-checkbox v-model="allChecked" @change="handleCheckAllChange">全选/反选</z-checkbox>
    <div class="z-transfer__body">
      <div>
        <z-checkbox-group v-model="checked">
          <z-checkbox :disabled="item[disabledProp]" v-for="item in data" :key="item[keyProp]" :label="item[keyProp]">{{
            item[labelProp] }}</z-checkbox>
        </z-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { Props } from './transfer.types';
import ZCheckboxGroup from '@z-ui/checkbox-group';
import ZCheckbox from '@z-ui/checkbox';
import { useCheck } from './useCheck';
export default defineComponent({
  name: 'ZTransferPanel',
  components: {
    ZCheckboxGroup,
    ZCheckbox
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    props: Object as PropType<Props>
  },
  emits: ['checked-change'],
  setup(props) {
    // 应该有一个属性面板自己的状态
    const panelState = reactive({
      checked: [],  //选中的值
      allChecked: false  //是否全选
    })

    // 根据props算出key 禁用对应的值用于模板渲染
    const { keyProp, labelProp, disabledProp, handleCheckAllChange } = useCheck(props, panelState);

    return {
      keyProp,
      labelProp,
      disabledProp,
      ...toRefs(panelState),
      handleCheckAllChange
    }
  }
})
</script>