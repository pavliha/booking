import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'

const styles = () => ({
  root: {
    paddingTop: 30,
  },
})

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions } = this.props
    actions.layout.background('/images/room.jpeg')
    document.title = 'Cubex'
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        aa
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
