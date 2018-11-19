import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Months from './Months'

const styles = {}

const MyTableHead = ({ classes }) =>
  <div className="flex">
    <Typography variant="subheading">Комната</Typography>
    <Months />
  </div>

MyTableHead.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(MyTableHead)
