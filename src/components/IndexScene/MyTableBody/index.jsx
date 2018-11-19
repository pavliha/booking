import React from 'react'
import { object } from 'prop-types'
import { Paper, Table, TableBody, TableCell, TableRow, Button, withStyles } from '@material-ui/core'

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
              <TableCell numeric><Button>{row.ten}</Button></TableCell>
              <TableCell numeric><Button>{row.eleven}</Button></TableCell>
              <TableCell numeric><Button>{row.twelve}</Button></TableCell>
              <TableCell numeric><Button>{row.thirteen}</Button></TableCell>
              <TableCell numeric><Button>{row.fourteen}</Button></TableCell>
              <TableCell numeric><Button>{row.fifteen}</Button></TableCell>
              <TableCell numeric><Button>{row.sixteen}</Button></TableCell>
              <TableCell numeric><Button>{row.seventeen}</Button></TableCell>
              <TableCell numeric><Button>{row.eighteen}</Button></TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </Paper>
  </div>

MyTableBody.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(MyTableBody)
