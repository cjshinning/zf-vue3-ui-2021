<template>
    <button :class="classs" @click="handleClick">
        <i v-if="loading" class="z-icon-loading"></i>
        <i v-if="icon && !loading" :class="icon"></i>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
type IButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default';

export default defineComponent({
    props: {
        type: {
            type: String as PropType<IButtonType>,
            default: 'primary',
            validate: (val: string) => {
                return [
                    'primary', 'success', 'info', 'warning', 'danger', 'default'
                ].includes(val);
            }
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        loading: Boolean,
        round: Boolean
    },
    emits: ['click'],
    name: 'ZButton',
    setup(props, ctx) {
        const classs = computed(() => [
            'z-button',
            'z-button--' + props.type,
            {
                "is-disabled": props.disabled,
                'is-loading': props.loading,
                'is-round': props.round
            }
        ])
        const handleClick = (e) => {
            console.log('innerClick');
            ctx.emit('click', e);
        }
        return {
            classs,
            handleClick
        }
    }
})
</script>