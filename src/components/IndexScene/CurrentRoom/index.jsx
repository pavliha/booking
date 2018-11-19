import React, { Component } from 'react'
import { object, func, bool, string, array, shape, node } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import connector from './connector'
import Autosuggest from 'components/controls/Autosuggest'

const styles = {
  root: {},
}

class CurrentMonth extends Component {
  handleChange = (name, room) => {
    const { actions } = this.props
    actions.rooms.select(room)
  }

  render() {
    const { classes, rooms: { rooms, current } } = this.props
    return <div className={classes.root}>
      <Autosuggest
        name="rooms"
        onChange={this.handleChange}
        suggestions={Object.values(rooms)}
        value={rooms[current]}
      />
    </div>
  }
}

CurrentMonth.propTypes = {
  classes: object.isRequired,
  rooms: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(CurrentMonth))
