export const NEXT_DAY = 'NEXT_DAY'
export const PREV_DAY = 'PREV_DAY'

const next = () => ({
  type: NEXT_DAY,
})

const prev = () => ({
  type: PREV_DAY,
})

export default { next, prev }
