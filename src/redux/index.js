import { combineReducers } from 'redux'
import layoutReducer from './layout/reducer'
import monthsReducer from './months/reducer'
import roomsReducer from './rooms/reducer'

const reducers = combineReducers({
  layoutReducer,
  monthsReducer,
  roomsReducer,
})

export default reducers
