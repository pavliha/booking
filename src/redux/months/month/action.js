export const NEXT_MONTH = 'NEXT_MONTH'
export const PREV_MONTH = 'PREV_MONTH'

const nextMonth = () => ({
  type: NEXT_MONTH,
})

const prevMonth = () => ({
  type: PREV_MONTH,
})

export default { nextMonth, prevMonth }
