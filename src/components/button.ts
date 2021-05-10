import { computed, reactive } from '@vue/composition-api'

/** Enums */
export const BUTTON_COLORS = [
  'primary',
  'accent',
  'secondary',
  'danger',
  'white',
  'dark',
  'black',
  'ghost',
  'accent-primary',
  'black-dark',
  'black-ghost',
  'ghost-danger',
  'black-danger'
] as const
export const BUTTON_SIZES = ['small', 'medium'] as const
// TODO: Add outline variant when design unlocked
export const BUTTON_VARIANTS = ['contained', 'minimal'] as const
export const BUTTON_SHAPES = ['box', 'circle', 'full'] as const

/** Types (inferred) */
export type ButtonVariant = typeof BUTTON_VARIANTS[number]; // => contained | minimal ..
export type ButtonSize = typeof BUTTON_SIZES[number]; // => small | medium ...
export type ButtonColor = typeof BUTTON_COLORS[number]; // => primary | secondary ...
export type ButtonShape = typeof BUTTON_SHAPES[number]; // => box | circle | dropdown ...

/** Buttons Styles Props */
export interface ButtonStylesProps {
  color: ButtonColor;
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  active: boolean;
  loading: boolean;
}

/** Shared Loading Icon between base button and icon button */
export const LOADING_ICON = ['far', 'spinner']

/** Button css classes composition */
export function useButtonCssClasses (props: ButtonStylesProps) {
  const shapeClasses = computed(() => {
    /** Minimal button has no shape */
    if (props.variant === 'minimal') {
      return []
    }

    return [`air-btn-${props.shape}`, `air-btn-${props.shape}--${props.size}`]
  })

  return reactive({
    root: computed(() => [
      'air-btn-base',
      `air-btn-base--${props.size}`,
      ...shapeClasses.value,
      `air-btn-${props.variant}`,
      `air-btn-${props.variant}--${props.color}`,
      { [`air-btn-${props.variant}--${props.color}-active`]: props.active },
      { [`air-btn-${props.variant}--${props.color}-loading`]: props.loading }
    ]),

    label: ['air-btn-label'],

    prefix: ['air-btn-icon-prefix'],

    suffix: ['air-btn-icon-suffix']
  })
}
