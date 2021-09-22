import { Alpine } from './alpine'
import dropdown from './dropdown'
import modal from './modal'
import dialog from './dialog'
import notifications from './notifications'
import maskable from './inputs/maskable'
import currency from './inputs/currency'

export interface Start {
  (Alpine: Alpine): void
}

const start: Start = (Alpine: Alpine) => {
  Alpine.data('wireui_dropdown', dropdown)
  Alpine.data('wireui_modal', modal)
  Alpine.data('wireui_dialog', dialog)
  Alpine.data('wireui_notifications', notifications)
  Alpine.data('wireui_inputs_maskable', maskable)
  Alpine.data('wireui_inputs_currency', currency)
}

export default start
