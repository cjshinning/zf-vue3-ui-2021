import { ref } from 'vue';

export const useButton = () => {
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