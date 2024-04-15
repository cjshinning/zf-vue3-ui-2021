<template>
  <z-button icon="z-icon-menu" type="primary" round :loading="buttonLoading"></z-button>
  <z-button icon="z-icon-loading" type="success" round>按钮</z-button>
  <z-button icon="z-icon-loading" type="warning" round>按钮</z-button>
  <z-icon name="loading"></z-icon>

  <z-button-group>
    <z-button icon="z-icon-arrow-left-bold" type="primary">上一页</z-button>
    <z-button type="primary">下一页<i class="z-icon-arrow-right-bold"></i></z-button>
  </z-button-group>
</template>

<script>
import { defineComponent, ref } from 'vue';
const useButton = () => {
  const buttonLoading = ref(true);
  const handleClick = () => {
    console.log('handleClick')
  };
  setTimeout(() => {
    buttonLoading.value = false;
  }, 5000);
  return {
    handleClick,
    buttonLoading
  }
}
export default defineComponent({
  setup() {
    return {
      ...useButton()
    }
  }
})
</script>