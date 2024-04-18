<template>
  <z-button icon="z-icon-menu" type="primary" round :loading="buttonLoading"></z-button>
  <z-button icon="z-icon-loading" type="success" round>按钮</z-button>
  <z-button icon="z-icon-loading" type="warning" round>按钮</z-button>
  <z-icon name="loading"></z-icon>

  <z-button-group>
    <z-button icon="z-icon-arrow-left-bold" type="primary">上一页</z-button>
    <z-button type="primary">下一页<i class="z-icon-arrow-right-bold"></i></z-button>
  </z-button-group>

  <hr>

  <z-row>
    <z-col :span="6">
      <div style="background:red ;">111</div>
    </z-col>
    <z-col :span="6" :offset="6">
      <div style="background: yellow;">222</div>
    </z-col>
    <z-col :span="6">
      <div style="background: blue;">333</div>
    </z-col>
  </z-row>

  <z-row :gutter="20">
    <z-col :span="8">
      <div style="background:red ;">111</div>
    </z-col>
    <z-col :span="8">
      <div style="background: yellow;">222</div>
    </z-col>
    <z-col :span="8">
      <div style="background: blue;">333</div>
    </z-col>
  </z-row>


  <z-row justify="space-around">
    <z-col :span="2">
      <div style="background:red ;">111</div>
    </z-col>
    <z-col :span="2">
      <div style="background: yellow;">222</div>
    </z-col>
    <z-col :span="2">
      <div style="background: blue;">333</div>
    </z-col>
  </z-row>

  <hr>

  <!-- {{ checkVal }}
  <z-checkbox v-model="checkVal" @change="checkboxChange">checkbox</z-checkbox> -->
  <!-- <z-checkbox-group></z-checkbox-group> -->

  {{ checkVal }}
  <z-checkbox-group v-model="checkVal" @change="checkboxChange">
    <z-checkbox v-for="c in checks" :key="c" :label="c"></z-checkbox>
    <!-- <z-checkbox v-model="checkVal" @change="checkboxChange">checkbox</z-checkbox> -->
  </z-checkbox-group>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useButton } from './hook/useButton';
function useCheckbox() {
  // const checkVal = ref(true);
  const checkVal = ref(['北京', '深圳']);
  const checks = ref(['北京', '上海', '广州', '深圳']);
  const checkboxChange = (val) => {
    console.log(val);
  }
  return {
    checkVal,
    checkboxChange,
    checks
  }
}
export default defineComponent({
  setup() {
    return {
      ...useButton(),
      ...useCheckbox()
    }
  }
})
</script>