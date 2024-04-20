<template>
  <transition name="z-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div class="z-message" v-show="visible" :class="classs" :style="styles">
      message
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue';
import { IType } from './message.types';
export default defineComponent({
  props: {
    id: { type: String, default: '' },
    message: { type: String, default: '' },
    type: { type: String as PropType<IType>, default: 'info' },
    duration: { type: Number, default: 2000 },
    center: { type: String, default: '' },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 20 }
  },
  setup(props) {
    const classs = computed(() => [
      'z-message--' + props.type,
      props.center ? 'is-center' : ''
    ])
    const visible = ref(false);
    let timer = null;
    const startTimer = () => {
      timer = setTimeout(() => {
        visible.value = false;
      }, props.duration)
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    })
    onUnmounted(() => {
      clearTimeout(timer);
    })
    const styles = computed(() => ({
      top: `${props.offset}px`
    }))

    return {
      classs,
      visible,
      styles
    }
  },
})
</script>

