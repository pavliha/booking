import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import connector from './connector'
import MonthPagination from './MonthPagination'

const styles = {
  root: {},
}

const CurrentMonth = ({ classes, actions, months: { months, current } }) =>
  <div className={classes.root}>
    <MonthPagination
      onNext={actions.calendar.nextMonth}
      onBack={actions.calendar.prevMonth}
    >
      {months[current]}
    </MonthPagination>
  </div>

CurrentMonth.propTypes = {
  classes: object.isRequired,
  months: object.isRequired,
  actions: object.isRequired,
}

export default withStyles(styles)(connector(CurrentMonth))
