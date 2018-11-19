/* eslint-disable no-return-assign */
import React from 'react'
import { number, object, array, string } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import connector from '../connector'

const styles = theme => ({
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.light,
    '&:hover': {
      color: 'inherit',
    },
  },
})

class AddTimeButton extends React.Component {
  handleClick = (id, value) => {
    const { actions } = this.props
    actions.table.addTime(id, value)
  }

  checkColor = (rowId, value, data) => {
    let isCheck = false
    data.forEach(values => (rowId === values.id && value === values.time) && (isCheck = !isCheck))
    return isCheck
  }

  render() {
    const { classes, rowId, value, data } = this.props
    return <Button
      className={this.checkColor(rowId, value, data) && classes.primary}
      onClick={() => this.handleClick(rowId, value)}
    >
      {value}
    </Button>
  }
}


AddTimeButton.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  data: array.isRequired,
  rowId: number.isRequired,
  value: string.isRequired,
}

export default withStyles(styles)(connector(AddTimeButton))
