<template>
  <div class="z-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue';

export default defineComponent({
  name: 'ZCheckboxGroup',
  props: {
    modelValue: Array
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const modelValue = computed(() => props.modelValue);
    const changeEvent = (val) => {
      emit('change', val);
      emit('update:modelValue', val);
    }
    provide('ZCheckboxGroup', {
      name: 'ZCheckboxGroup',
      modelValue,
      changeEvent
    })
  }
})
</script>