import monthsData from 'src/data/months'
import { NEXT_MONTH, PREV_MONTH } from 'src/redux/months/action'
import monthReducer from './month/reducer'

const initialState = {
  months: [
    {
      label: 'Январь',
      weeks: {
        weeks: [],
        current: 1
      }
    },
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Окрябрь',
    'Ноябрь',
    'Декабрь',
  ],
  current: (new Date()).getMonth(),
}

const authReducer = (state = initialState, { type, payload, meta }) => {
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

      months[state.current] = monthReducer(months[state.current], { type, payload, meta })
      return {
        ...state,
        months,
      }
    }
  }
}

export default authReducer
