import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from '../../images/logo.svg'

import { AuthContext } from '../../contexts/auth'

function Login () {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify='center' spacing={10}>
        <Grid item>
          <Logo width={200} height={200} />
        </Grid>

        <Grid item xs={12} container justify='center'>
          <GithubButton onClick={login}>
            Entrar com github
          </GithubButton>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`
const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  font-size: 25px;
  max-width: 480px;
  padding: 20px;
  text-transform: none;
`

export default Login
