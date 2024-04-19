import { ref } from 'vue';

export function useCheckbox() {
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