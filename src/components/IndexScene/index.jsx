import React from 'react'
import { object } from 'prop-types'
import { withStyles, Card } from '@material-ui/core'
import connector from './connector'
import CurrentMonth from './CurrentMonth'
import CurrentRoom from './CurrentRoom'
import CurrentDay from './CurrentDay'

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  card: {
    minHeight: 500,
    padding: 20,
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
        <Card className={classes.card}>
          <CurrentMonth />
          <CurrentDay />
          <CurrentRoom />
        </Card>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  calendar: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
