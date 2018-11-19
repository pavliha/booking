import months from 'src/data/months'
import { NEXT_MONTH, PREV_MONTH } from 'src/redux/months/action'

const initialState = {
  months,
  current: (new Date()).getMonth(),
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NEXT_MONTH: {
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

    case PREV_MONTH: {
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

    default: {
      const months = { ...state.months }
      const month = months[state.current]
      const month = monthReducer(months[state.current], { type, payload, meta })

      months = {
        []
      }
      return {
        months[state.current] = weeksReducer(month, { type, payload, meta })
      }
    }
  }
}

export default authReducer
