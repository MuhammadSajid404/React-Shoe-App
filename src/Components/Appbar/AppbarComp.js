import React from 'react'
import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import savelogosnip from '../../Components/savelogosnip.PNG'
import { Link } from 'react-router-dom'
import './DropDown.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  logo: {
    marginLeft: theme.spacing(1)
  }
}))

export const AppbarComp = () => {
  const classes = useStyles()

  const DropDown = () => {
    return (
      <div>
      <div display=" inline-block">
        <ul className="ui">
          <li>
            BRANDS
            <ul className="dropdown">
              <li>
                <Link to="/nike" style={{ textDecoration: 'none' }}>Nike</Link>
              </li>
              <li>
                <Link to="/adidas" style={{ textDecoration: 'none' }}>Adidas</Link>
              </li>
              <li>
                <Link to="/champion" style={{ textDecoration: 'none' }}>Champion</Link>
                </li>
                <li>
                <Link to="/jordan" style={{ textDecoration: 'none' }}>Jordan</Link>
                </li>
            </ul>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>HOME</Link>
          </li>
        </ul>
      </div>
    </div>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar color="#FFFFFF" position="sticky">
        <Toolbar>
          <img src={savelogosnip} alt="savelogo" className={classes.logo} />
          <DropDown />
        </Toolbar>
      </AppBar>
    </div>
  )
}