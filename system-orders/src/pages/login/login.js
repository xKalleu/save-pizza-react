import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyC16DJup_T8W3gapBw3GL859_FX79QbSSI',
  authDomain: 'pizza-love-k.firebaseapp.com',
  databaseURL: 'https://pizza-love-k.firebaseio.com',
  projectId: 'pizza-love-k',
  storageBucket: 'pizza-love-k.appspot.com',
  messagingSenderId: '83894013710',
  appId: '1:83894013710:web:2d784ac596c2bcb742115f',
  measurementId: 'G-HS1P7XK13T'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }, [])

  return (
    <Container>
      <Grid container justify='center' spacing={10}>
        <Grid item>
          <Logo width={200} height={200} />
        </Grid>

        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button
                variant='contained'
                fullWidth
                // eslint-disable-next-line react/jsx-handler-names
                onClick={logout}
              >
                Deslogar
              </Button>
            </>
          )}

          {!isUserLoggedIn && (
            // eslint-disable-next-line react/jsx-handler-names
            <GithubButton onClick={login}>
              Entrar com github
            </GithubButton>
          )}

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
