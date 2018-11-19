import { NEXT_DAY, PREV_DAY } from './action'
import daysInMonth from 'utils/daysInMonth'


const authReducer = (currentState, { type, payload }) => {
  const state = {
    days: daysInMonth(currentState),
    current: (new Date()).getMonth(),
  }

  switch (type) {
    case NEXT_DAY: {
      if (state.current < 11) {
        return {
          ...state,
          current: state.current + 1,
        }
      }
      return {
        ...state,
        current: 0,
      }
    }

    case PREV_DAY: {
      if (state.current > 1) {
        return {
          ...state,
          current: state.current - 1,
        }
      }
      return {
        ...state,
        current: 12,
      }
    }

    default:
      return state
  }
}

export default authReducer
