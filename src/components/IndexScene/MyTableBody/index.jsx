/* eslint-disable no-shadow */
import React from 'react'
import { object } from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableRow, withStyles } from '@material-ui/core'
import AddTimeButton from './AddTimeButton'

const styles = () => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
})

let id = 0

function createData(day, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen) {
  id += 1
  return { id, day, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen }
}

const rows = [
  createData('Понедельник', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'),
  createData('Вторник', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'),
  createData('Среда', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'),
  createData('Четверг', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'),
  createData('Пятница', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'),
]

const MyTableBody = ({ classes }) =>
  <div className={classes.root}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row =>
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.day}</TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.ten} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.eleven} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.twelve} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.thirteen} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.fourteen} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.fifteen} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.sixteen} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.seventeen} /> </TableCell>
              <TableCell numeric> <AddTimeButton rowId={row.id} value={row.eighteen} /> </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
  </div>

MyTableBody.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(MyTableBody)
