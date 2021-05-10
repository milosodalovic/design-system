<template>
    <component
        :is="disabled ? 'button' : component"
        :type="type"
        :class="cssClasses.root"
        :disabled="forceDisabled"
        v-bind="attrs"
        v-on="listeners"
    >
      <font-awesome-icon v-if="startIcon || loading" :fixed-width="iconsFixedWidth" :class="cssClasses.prefix" :spin="loading" :icon="loading ? loadingIcon : startIcon" />
      <span :class="cssClasses.label">
        <slot>{{ label }}</slot>
      </span>
      <font-awesome-icon v-if="endIcon" :fixed-width="iconsFixedWidth" :class="cssClasses.suffix" :icon="endIcon" />
    </component>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, computed } from '@vue/composition-api'

import {
  BUTTON_COLORS, BUTTON_SHAPES,
  BUTTON_VARIANTS,
  ButtonColor, ButtonShape,
  ButtonStylesProps,
  ButtonVariant, LOADING_ICON,
  useButtonCssClasses
} from './button'

export default defineComponent({
  inheritAttrs: false,
  name: 'BaseButton',
  props: {
    /**
     * Custom button tag (e.g nuxt-link)
     * */
    component: {
      type: String,
      default: 'button'
    },

    /**
     * Label
     * */
    label: {
      type: [String, Number]
    },

    /**
     * Variant
     * */
    variant: {
      type: String as PropType<ButtonVariant>,
      validator: (variant: ButtonVariant) => BUTTON_VARIANTS.includes(variant),
      default: (): ButtonVariant => 'contained'
    },

    /**
     * Color
     * */
    color: {
      type: String as PropType<ButtonColor>,
      validator: (color: ButtonColor) => BUTTON_COLORS.includes(color),
      default: (): ButtonColor => 'primary'
    },

    /**
     * Font Awesome Icon as a prefix
     * */
    startIcon: {
      type: [Object, Array, String]
    },

    /**
     * Font Awesome Icon as a suffix
     * */
    endIcon: {
      type: [Object, Array, String]
    },

    /**
     * Force button active state
     * */
    active: {
      type: Boolean,
      default: false
    },

    /**
     * Loading
     * */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * @ignore
     * Used internally by other base components (e.g BaseDropdownButton)
     * */
    shape: {
      type: String as PropType<ButtonShape>,
      validator: (shape: ButtonShape) => BUTTON_SHAPES.includes(shape),
      default: (): ButtonShape => 'box'
    },

    /**
     * Disabled
     * */
    disabled: {
      type: Boolean,
      default: false
    }
    // TODO: (Design locked)
    /* size: {
      type: String as PropType<ButtonSize>,
      validator: (size: ButtonSize) => BUTTON_SIZES.includes(size),
      default: (): ButtonSize => 'medium'
    }, */
  },
  setup (props, { attrs, listeners }) {
    /** State */
    const { color, variant, shape, active, loading, component } = toRefs(props)
    const stylesProps: ButtonStylesProps = reactive({
      color,
      variant,
      size: 'medium',
      shape,
      active,
      loading
    })
    const cssClasses = useButtonCssClasses(stylesProps)
    const forceDisabled = computed(() => {
      return props.disabled || loading.value
    })
    const type = computed(() => {
      if (attrs.type) {
        return attrs.type
      } else if (component.value === 'button') {
        return 'button'
      }
    })
    const iconsFixedWidth = computed(() => shape.value === 'full')

    return {
      loadingIcon: LOADING_ICON,
      type,
      iconsFixedWidth,
      cssClasses,
      forceDisabled,
      attrs,
      listeners
    }
  }
})

</script>

<style lang="scss">
</style>
