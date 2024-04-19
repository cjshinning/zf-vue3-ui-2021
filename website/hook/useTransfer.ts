import { ref } from 'vue';

export function useTransfer() {
  const generateData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return ref(data);
  }
  return {
    transferData: generateData(),
    rightValue: ref([1, 4]),
    transferProp: {
      key: 'key',
      label: 'label',
      disabled: 'disabled'
    }
  }
}
