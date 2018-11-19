import React from 'react'
import { object } from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import { ArrowBackIcon, ArrowForwardIcon } from 'mdi-react'

const styles = {
  root: {},
}

const Months = ({ classes }) =>
  <div className="flex">
    <IconButton><ArrowBackIcon /></IconButton>
    <Typography variant="subheading" className="self">Июнь</Typography>
    <IconButton><ArrowForwardIcon /></IconButton>
  </div>

Months.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Months)
