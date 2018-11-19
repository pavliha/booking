import React from 'react'
import { object, func, bool, string, array, shape, node } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'
import connector from './connector'
import MonthPagination from './MonthPagination'

const styles = {
  root: {},
}

const CurrentDay = ({ classes, actions, calendar: { months, current } }) =>
  <div className={classes.root}>
    <MonthPagination
      onNext={actions.calendar.nextMonth}
      onBack={actions.calendar.prevMonth}
    >
      {months[current]}
    </MonthPagination>
  </div>

CurrentDay.propTypes = {
  classes: object.isRequired,
  calendar: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(CurrentDay))
