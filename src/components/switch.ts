import { computed, reactive, Ref } from '@vue/composition-api'

/** Enums */
export const SWITCH_SIZES = ['small', 'medium', 'large'] as const
export const SWITCH_COLORS = ['primary'] as const
/**
 * Switch State
 * * UX Details:
 * - Check On Hold: Confirmation is required prior to checking
 * - Uncheck On Hold: Confirmation is required prior to unchecking
 * - Checked: Successfully checked
 * - Unchecked: Successfully unchecked
 * */
export const SWITCH_STATES = [
  'checkOnHold',
  'uncheckOnHold',
  'checked',
  'unchecked'
] as const

/** Types (inferred) */
export type SwitchSize = typeof SWITCH_SIZES[number]; // => small | medium ...
export type SwitchColor = typeof SWITCH_COLORS[number]; // => primary | ...
export type SwitchState = typeof SWITCH_STATES[number]; // => checked | unchecked ...

export interface SwitchStylesProps {
  size: SwitchSize;
  color: SwitchColor;
  state: SwitchState;
  disabled: boolean;
}

export interface SwitchNextStateProps {
  currentState: SwitchState;
  holdCheck: boolean;
  holdUncheck: boolean;
}

export function useSwitchCssClasses (props: SwitchStylesProps) {
  return reactive({
    root: computed(() => [
      'air-switch',
      `air-switch--${props.size}`,
      `air-switch--${props.color}`,
      `air-switch--${props.state}`,
      { 'air-switch--disabled': props.disabled }
    ]),
    thumb: computed(() => ['air-switch-thumb']),
    track: ['air-switch-track']
  })
}

export function useSwitchNextState (
  props: SwitchNextStateProps
): Ref<SwitchState> {
  return computed<SwitchState>(() => {
    switch (props.currentState) {
      case 'checked':
        return props.holdUncheck ? 'uncheckOnHold' : 'unchecked'
      case 'unchecked':
        return props.holdCheck ? 'checkOnHold' : 'checked'
      case 'checkOnHold':
        return 'unchecked'
      case 'uncheckOnHold':
        return 'checked'
      default:
        return props.currentState
    }
  })
}
