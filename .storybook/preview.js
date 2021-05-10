import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import FontAwesomeIcon from '../src/modules/font-awesome'

Vue.use(VueCompositionAPI)
Vue.component('font-awesome-icon', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
