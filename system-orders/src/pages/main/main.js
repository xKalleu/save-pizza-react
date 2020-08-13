import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar as MaterialToolbar,
  Typography,
  withStyles
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

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3'>
            {userName}, qual seu pedido hoje?
          </Typography>
          <Typography variant='h4'>
            Escolha tamanho da pizaa:
          </Typography>
        </Grid>
        <Grid container spacing={16}>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs={4}>
              <Paper style={{ padding: 20 }}>
                <div>{pizza.size}</div>
                <Typography>
                  {pizza.name}
                </Typography>
                <Typography>
                  {pizza.slices},{pizza.flavours}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Content>
    </>
  )
}

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Media',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const Content = styled.main`
  padding: 20px;
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

const style = (theme) => ({
  main: theme.mixins.toolbar
})

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default MainPage
