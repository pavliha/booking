import React from 'react'
import { object, func, bool, string, array, shape, node } from 'prop-types'
import { withStyles, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from 'mdi-react/ArrowBackIcon'
import ArrowForwardIcon from 'mdi-react/ArrowForwardIcon'

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}

const MonthPagination = ({ classes, children, onBack, onNext }) =>
  <div className={classes.root}>
    <IconButton onClick={onBack}><ArrowBackIcon /></IconButton>
    <Typography variant="title">{children}</Typography>
    <IconButton onClick={onNext}><ArrowForwardIcon /></IconButton>
  </div>

MonthPagination.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
  onBack: func.isRequired,
  onNext: func.isRequired,
}

export default withStyles(styles)(MonthPagination)
