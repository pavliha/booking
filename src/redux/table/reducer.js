import LocalStorage from 'services/LocalStorage'
import { ADD_TIME } from './action'

const initialState = {
  id: null,
  data: LocalStorage.get('time') || [],
}

const tableReducer = (state = initialState, { type, id, payload }) => {
  switch (type) {
    case ADD_TIME: {
      const { data } = state
      data.push({ id, time: payload })
      LocalStorage.put('time', data)

      return {
        ...state,
        id,
        data,
      }
    }

    default: {
      return state
    }
  }
}

export default tableReducer
