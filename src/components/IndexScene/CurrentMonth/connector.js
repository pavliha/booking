import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import months from 'src/redux/months/action'

const initMapStateToProps = store => ({
  months: store.monthsReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    months: bindActionCreators(months, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
