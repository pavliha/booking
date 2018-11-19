/* eslint-disable react/prop-types */
import React from 'react'
import { arrayOf, shape, any, func, object, string } from 'prop-types'
import Select from 'react-select'
import { Paper, TextField, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {},
  input: {
    position: 'relative',
    display: 'flex',
    padding: 2,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    fontFamily: 'SFUIText, sans-serif',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '-0.1px',
    color: '#000000',
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing.unit / 2,
    left: 0,
    right: 0,
  },
  selectInput: {},
})

const inputComponent = ({ inputRef, ...props }) =>
  <div ref={inputRef} {...props} />

const Placeholder = ({ selectProps, innerProps, children }) =>
  <Typography
    className={selectProps.classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>

const Control = ({ selectProps, children, innerProps }) =>
  <TextField
    fullWidth
    error={selectProps.error}
    helperText={selectProps.helperText}
    InputProps={{
      inputComponent,
      inputProps: { className: selectProps.classes.input, children, ...innerProps },
    }}
  />

const Menu = ({ selectProps, innerProps, children }) =>
  <Paper
    square
    className={selectProps.classes.paper}
    {...innerProps}
  >
    {children}
  </Paper>

const Autosuggest = ({ classes, name, onChange, value, suggestions, ...props }) =>
  <Select
    classes={classes}
    className={classes.root}
    options={suggestions}
    components={{ Control, Menu, Placeholder }}
    value={value && suggestions.find(s => s.value === value)}
    onChange={val => onChange(name, val)}
    {...props}
  />

Autosuggest.propTypes = {
  classes: object.isRequired,
  name: string.isRequired,
  suggestions: arrayOf(shape({
    label: string.isRequired,
    value: string.isRequired,
  })).isRequired,
  value: any,
  onChange: func.isRequired,
}
Autosuggest.defaultProps = {
  value: null,
}

export default withStyles(styles)(Autosuggest)
