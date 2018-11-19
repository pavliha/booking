export const SELECT_ROOM = 'SELECT_ROOM'

const select = (room) => ({
  type: SELECT_ROOM,
  payload: room,
})

export default { select }
