import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import calendar from 'src/redux/months/action'

const initMapStateToProps = store => ({
  calendar: store.calendarReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    calendar: bindActionCreators(calendar, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
