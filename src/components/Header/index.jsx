/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react'
import { object } from 'prop-types'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  appBar: {
    background: theme.palette.primary.main,
  },
  toolbar: {
    display: 'flex',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left',
    },
  },
})

const Header = ({ classes }) =>
  <header className={classes.root}>
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>

        <Typography variant="title" color="secondary" className={classes.title}>
          <Link to="/">Бронирование переговорок</Link>
        </Typography>

      </Toolbar>
    </AppBar>
  </header>

Header.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Header)
