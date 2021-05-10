import BaseButton from './BaseButton.vue'
import { BUTTON_COLORS, BUTTON_VARIANTS } from './button'

export default {
  title: 'Base Components / Button',
  component: BaseButton
}

export const Color: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-grid-flow-col tw-gap-4">
      <BaseButton label="Primary" color="primary" />
      <BaseButton label="Secondary" color="secondary" />
      <BaseButton label="White" color="white" />
      <BaseButton label="Dark" color="dark" />
      <BaseButton label="Ghost" color="ghost" />
      <BaseButton label="Danger" color="danger" />
      <BaseButton label="Ghost Danger" color="ghost-danger" />
      <BaseButton label="Black Ghost" color="black-ghost" />
    </div>
  `
})

export const Variant: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-grid-flow-col tw-gap-4">
      <BaseButton variant="contained" label="Contained" color="secondary" />
      <BaseButton variant="minimal" label="Minimal" color="secondary" />
    </div>
  `
})

export const StartIcon: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
      <BaseButton label="Start Icon" :start-icon="['far', 'music']" />
    </div>
  `
})

export const EndIcon: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
      <BaseButton label="End Icon" :end-icon="['far', 'arrow-right']" />
    </div>
  `
})

export const Loading: any = () => ({
  components: { BaseButton },
  template: `
    <BaseButton label="Button" :loading="true" />
  `
})

export const Disabled: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4">
        <BaseButton label="Primary" color="primary" :disabled="true" />
        <BaseButton label="Secondary" color="secondary" :disabled="true" />
        <BaseButton label="White" color="white" :disabled="true" />
        <BaseButton label="Dark" color="dark" :disabled="true" />
        <BaseButton label="Ghost" color="ghost" :disabled="true" />
        <BaseButton label="Danger" color="danger" :disabled="true" />
        <BaseButton label="Ghost Danger" color="ghost-danger" :disabled="true" />
        <BaseButton label="Black Ghost" color="black-ghost" :disabled="true" />
      </div>
    </div>
  `
})

export const Active: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4">
        <BaseButton label="Primary" color="primary" :active="true" />
        <BaseButton label="Secondary" color="secondary" :active="true" />
        <BaseButton label="White" color="white" :active="true" />
        <BaseButton label="Dark" color="dark" :active="true" />
        <BaseButton label="Ghost" color="ghost" :active="true" />
        <BaseButton label="Danger" color="danger" :active="true" />
        <BaseButton label="Ghost Danger" color="ghost-danger" :active="true" />
        <BaseButton label="Black Ghost" color="black-ghost" :active="true" />
      </div>
    </div>
  `
})

export const Link: any = () => ({
  components: { BaseButton },
  template: `
    <div class="tw-inline-grid tw-gap-4 tw-grid-flow-col">
      <BaseButton component="nuxt-link"
                  to="/explore"
                  label="Nuxt Link"
                  variant="minimal"
                  color="ghost" />
      <BaseButton component="a"
                  href="//google.com"
                  target="_blank"
                  label="Anchor Link"
                  color="danger" />
    </div>
  `
})

export const Playground: any = (args: any, { argTypes }: any) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  mounted () {
  },
  template: `
    <BaseButton v-bind="$props" />
  `
})

Playground.argTypes = {
  color: {
    control: {
      type: 'select',
      options: BUTTON_COLORS
    }
  },
  variant: {
    control: {
      type: 'select',
      options: BUTTON_VARIANTS
    }
  }
}
Playground.args = {
  color: 'primary',
  variant: 'contained',
  label: 'Test Button'
}
