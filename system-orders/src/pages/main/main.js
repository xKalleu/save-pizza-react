import React from 'react'
import {
  AppBar,
  Toolbar
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'

import { ReactComponent as MainLogo } from '../login/logo.svg'

function MainPage () {
  return (
    <AppBar>
      <Toolbar>
        <MainLogo />
        <IconButton color='inherit'>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainPage
