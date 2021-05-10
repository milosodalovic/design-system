import BaseIconButton from '../components/BaseIconButton.vue'

export default {
  title: 'Base Components / Icon Button',
  component: BaseIconButton
}

export const Color: any = () => ({
  components: { BaseIconButton },
  template: `
    <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
      <BaseIconButton color="primary" :icon="['far', 'share-alt']" />
      <BaseIconButton color="accent" :icon="['far', 'share-alt']" />
      <BaseIconButton color="secondary" :icon="['far', 'share-alt']" />
      <BaseIconButton color="white" :icon="['far', 'share-alt']" />
      <BaseIconButton color="dark" :icon="['far', 'share-alt']" />
      <BaseIconButton color="black-dark" :icon="['far', 'share-alt']" />
      <BaseIconButton color="ghost" :icon="['far', 'share-alt']" />
      <BaseIconButton color="black-ghost" :icon="['far', 'share-alt']" />
      <BaseIconButton color="ghost-danger" :icon="['far', 'share-alt']" />
      <BaseIconButton color="danger" :icon="['far', 'share-alt']" />
    </div>
  `
})

export const Shape: any = () => ({
  components: { BaseIconButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
        <BaseIconButton shape="box" :icon="['far', 'share-alt']" />
        <BaseIconButton shape="circle" :icon="['far', 'plus']" />
      </div>
    </div>
  `
})

export const Variant: any = () => ({
  components: { BaseIconButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
        <BaseIconButton variant="contained" :icon="['far', 'share-alt']" />
        <BaseIconButton variant="minimal" color="ghost" :icon="['fas', 'question-circle']" />
      </div>
    </div>
  `
})

export const Loading: any = () => ({
  components: { BaseIconButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
        <BaseIconButton variant="contained" :loading="true" :icon="['far', 'share-alt']" />
        <BaseIconButton variant="minimal" :loading="true" :icon="['fas', 'question-circle']" />
        <BaseIconButton variant="contained" shape="circle" :loading="true" :icon="['fas', 'question-circle']" />
      </div>
    </div>
  `
})

export const Active: any = () => ({
  components: { BaseIconButton },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <div class="tw-inline-grid tw-grid-flow-col tw-gap-4 tw-items-center">
        <BaseIconButton :active="true" color="primary" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="accent" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="secondary" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="white" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="dark" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="black-dark" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="ghost" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="black-ghost" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="ghost-danger" :icon="['far', 'share-alt']" />
        <BaseIconButton :active="true" color="danger" :icon="['far', 'share-alt']" />
      </div>
    </div>
  `
})
