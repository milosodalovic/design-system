<template>
    <div class="tw-inline-grid">
      <!-- Switch Element -->
      <span :class="cssClasses.root" @click="onToggle">
        <span :class="cssClasses.thumb" />
        <span :class="cssClasses.track" />
      </span>

      <!--  Switch Confirmation  -->
      <template v-if="hasConfirmationRequest">
        <BaseTransitionExpand>
          <div v-show="isOnHold">
            <div class="tw-inline-flex tw-items-center tw-pt-4">
              <span class="tw-text-base tw-text-gray-150">
                <slot name="confirmation">
                  {{ confirmationMessage }}
                </slot>
              </span>
              <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-pl-5">
                <BaseIconButton
                    shape="circle"
                    color="primary"
                    :icon="['far', 'check']"
                    @click="onConfirm"
                />
                <BaseIconButton
                    shape="circle"
                    color="ghost"
                    :icon="['far', 'times']"
                    @click="onCancel"
                />
              </div>
            </div>
          </div>
        </BaseTransitionExpand>
      </template>
    </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  toRefs,
  computed
} from '@vue/composition-api'

import BaseIconButton from './BaseIconButton.vue'
import {
  SWITCH_STATES,
  SwitchState,
  useSwitchCssClasses,
  useSwitchNextState
} from './switch'
import BaseTransitionExpand from './shared/base-transition-expand.vue'

export default defineComponent({
  props: {
    /**
     * Switch Current State (v-model is supported)
     * */
    value: {
      type: String as PropType<SwitchState>,
      validator: (value: SwitchState) => SWITCH_STATES.includes(value),
      required: true
    },

    /**
     * Hold check
     *
     * If ture, value will change to 'checkOnHold' on toggle
     * Usually used with confirmationMessage to request confirmation before checking
     * */
    holdCheck: {
      type: Boolean,
      default: false
    },

    /**
     * Hold uncheck
     *
     * If ture, value will change to 'uncheckOnHold' on toggle
     * Usually used with confirmationMessage to request confirmation before unchecking
     * */
    holdUncheck: {
      type: Boolean,
      default: false
    },

    /**
     * Disabled
     * */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Confirmation Message
     *
     * Used with holdCheck/holdUncheck to request user confirmation prior to checking/unchecking
     * */
    confirmationMessage: {
      type: String
    }

    // TODO: (Design locked) Only medium size is supported for now
    /* size: {
      type: String as PropType<SwitchSize>,
      validator: size => SWITCH_SIZES.includes(size),
      default: (): SwitchSize => 'medium'
    } */
    // TODO: (Design locked) Only primary color is supported for now
    /* color: {
      type: String as PropType<SwitchColor>,
      validator: color => SWITCH_COLORS.includes(color),
      default: (): SwitchColor => 'primary'
    } */
  },
  components: { BaseTransitionExpand, BaseIconButton },
  setup (props, { emit, slots }) {
    /** State */
    const {
      value: currentState,
      disabled,
      holdCheck,
      holdUncheck,
      confirmationMessage
    } = toRefs(props)
    const isOnHold = computed(
      () =>
        currentState.value === 'uncheckOnHold' ||
        currentState.value === 'checkOnHold'
    )
    const hasConfirmationRequest = computed(
      () =>
        (confirmationMessage?.value || slots.confirmation) &&
        (holdUncheck.value || holdCheck.value)
    )
    const cssClasses = useSwitchCssClasses(
      reactive({
        state: currentState,
        color: 'primary',
        size: 'medium',
        disabled
      })
    )
    const nextState = useSwitchNextState(
      reactive({
        currentState,
        holdCheck,
        holdUncheck
      })
    )

    /** Listeners */
    const onToggle = () => {
      if (disabled.value) {
        return
      }

      if (currentState.value !== nextState.value) {
        emit('input', nextState.value)
      }
    }
    const onConfirm = () => {
      if (currentState.value === 'uncheckOnHold') {
        emit('input', 'unchecked')
      } else if (currentState.value === 'checkOnHold') {
        emit('input', 'checked')
      }
    }
    const onCancel = () => {
      if (currentState.value === 'uncheckOnHold') {
        emit('input', 'checked')
      } else if (currentState.value === 'checkOnHold') {
        emit('input', 'unchecked')
      }
    }

    return {
      /** State */
      isOnHold,
      hasConfirmationRequest,
      cssClasses,

      /** Listeners */
      onToggle,
      onConfirm,
      onCancel
    }
  }
})
</script>
