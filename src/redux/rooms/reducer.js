import arrayToObject from 'utils/arrayToObject'
import rooms from 'src/data/rooms'
import { SELECT_ROOM } from './action'

const initialState = {
  rooms: arrayToObject(rooms, 'value'),
  current: 'green',
}

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SELECT_ROOM: {
      return {
        ...state,
        current: payload.value,
      }
    }
    default:
      return state
  }
}

export default roomsReducer
