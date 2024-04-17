<template>
  <div class="z-checkbox">
    <span class="z-checkbox__input">
      <input type="checkbox">
    </span>
    <span class="z-checkbox-label">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZCheckbox',
  props: {
    name: String,
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String | Number | Boolean],
    modalValue: [String | Number | Boolean]
  },
  setup(props) {

  }
})
</script>