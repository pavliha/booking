import React from 'react'
import { object } from 'prop-types'
import { withStyles, Card } from '@material-ui/core'
import connector from './connector'
import MyTableHead from './MyTableHead'
import MyTableBody from './MyTableBody'

const styles = () => ({
  root: {
    marginTop: 30,
  },
  card: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
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
          <div>
            <MyTableHead />
            <MyTableBody />
          </div>
        </Card>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
