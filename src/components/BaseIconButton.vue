<template>
    <button
        type="button"
        :class="cssClasses.root"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners"
    >
      <font-awesome-icon :spin="loading" :icon="loading ? loadingIcon : icon" />
    </button>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, computed } from '@vue/composition-api'

import {
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  BUTTON_SHAPES,
  ButtonColor,
  ButtonVariant,
  ButtonShape,
  useButtonCssClasses,
  ButtonStylesProps,
  LOADING_ICON
} from './button'

export default defineComponent({
  name: 'BaseIconButton',
  inheritAttrs: false,
  props: {
    /** Font Awesome Icon */
    icon: {
      type: [Object, Array, String],
      required: true
    },
    /** Variant: 'contained' or 'minimal'. 'outlined' isn't supported yet */
    variant: {
      type: String as PropType<ButtonVariant>,
      validator: (variant: ButtonVariant) => BUTTON_VARIANTS.includes(variant),
      default: (): ButtonVariant => 'contained'
    },

    /** Color: 'primary', 'secondary', 'white', 'dark', 'ghost', 'periwinkle' */
    color: {
      type: String as PropType<ButtonColor>,
      validator: (color: ButtonColor) => BUTTON_COLORS.includes(color),
      default: (): ButtonColor => 'primary'
    },

    /** Shape: 'box', 'circle', 'full', 'corner'. Ignored if variant is minimal */
    shape: {
      type: String as PropType<ButtonShape>,
      validator: (shape: ButtonShape) => BUTTON_SHAPES.includes(shape),
      default: (): ButtonShape => 'box'
    },

    /** Force button active styles */
    active: {
      type: Boolean,
      default: false
    },

    /** Loading */
    loading: {
      type: Boolean,
      default: false
    }

    /** TODO (Design Locked) */
    /* size: {
      type: String as PropType<ButtonSize>,
      validator: (size: ButtonSize) => BUTTON_SIZES.includes(size),
      default: (): ButtonSize => 'medium'
    }, */
  },
  setup (props, { attrs, listeners }) {
    const stylesProps: ButtonStylesProps = reactive({
      ...toRefs(props),
      size: 'medium'
    })
    const cssClasses = useButtonCssClasses(stylesProps)
    const disabled = computed(() => attrs.disabled || props.loading)

    return {
      loadingIcon: LOADING_ICON,
      cssClasses,
      disabled,
      attrs,
      listeners
    }
  }
})
</script>
