export const ADD_TIME = 'ADD_TIME'

const addTime = (id, value) => ({
  type: ADD_TIME,
  id,
  payload: value,
})

export default { addTime }
