import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import rooms from 'src/redux/rooms/action'

const initMapStateToProps = store => ({
  rooms: store.roomsReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    rooms: bindActionCreators(rooms, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
