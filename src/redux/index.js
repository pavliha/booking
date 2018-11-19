import { combineReducers } from 'redux'
import layoutReducer from './layout/reducer'
import tableReducer from './table/reducer'

const reducers = combineReducers({
  layoutReducer,
  tableReducer,
})

export default reducers
