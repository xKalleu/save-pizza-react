import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar as MaterialToolbar,
  Typography
} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'

import { AuthContext } from '../../contexts/auth'
import { ReactComponent as MainLogo } from '../../images/logo.svg'

function MainPage () {
  const [anchorElement, setAnchorElement] = useState(null)
  const { logout, userInfo } = useContext(AuthContext)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const userName = userInfo.user.displayName.split(' ')[0]

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography color='inherit'>Olá {userName}</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>
              Sair
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Content>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h3'>
              {userName}, qual seu pedido hoje?
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </>
  )
}

const Content = styled.main`
  padding: 80px 20px 20px;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;
`

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

export default MainPage
