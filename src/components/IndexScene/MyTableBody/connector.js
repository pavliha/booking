import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import table from 'src/redux/table/action'

const initMapStateToProps = store => ({
  data: store.tableReducer.data,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    table: bindActionCreators(table, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
