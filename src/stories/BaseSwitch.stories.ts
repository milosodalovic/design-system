import BaseSwitch from '../components/BaseSwitch.vue'

export default {
  title: 'Base Components / Switch',
  component: BaseSwitch
}

export const States = () => ({
  components: { BaseSwitch },
  template: `
    <div class="tw-inline-grid tw-gap-4">
      <BaseSwitch v-model="switch1"/>
      <BaseSwitch v-model="switch2"/>
      <BaseSwitch v-model="switch3" hold-check confirmation-message="You sure to check?"/>
      <BaseSwitch v-model="switch4" hold-uncheck confirmation-message="You sure to uncheck?"/>
    </div>
  `,
  data () {
    return {
      switch1: 'checked',
      switch2: 'unchecked',
      switch3: 'checkOnHold',
      switch4: 'uncheckOnHold'
    }
  }
})

export const Disabled = () => ({
  components: { BaseSwitch },
  template: `
    <div class="tw-inline-grid tw-gap-4 tw-grid-flow-col">
        <BaseSwitch disabled value="checked"/>
        <BaseSwitch disabled value="unchecked"/>
    </div>`
})

export const WithConfirmation = () => ({
  components: { BaseSwitch },
  template: `
    <BaseSwitch v-model="status"
                hold-uncheck
                confirmation-message="Turning off also removes all collaborators" />
  `,
  data () {
    return {
      status: 'uncheckOnHold'
    }
  }
})
