import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as Logo } from './logo.svg'

var firebaseConfig = {
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

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isUserLoggedIn: !!user,
        user
      })
    })
  }

  login () {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou')
      this.setState({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  render () {
    const { isUserLoggedIn, user } = this.state

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
                  onClick={this.logout}
                >
                  Deslogar
                </Button>
              </>
            )}

            {!isUserLoggedIn && (
              // eslint-disable-next-line react/jsx-handler-names
              <GithubButton onClick={this.login}>
                Entrar com github
              </GithubButton>
            )}

          </Grid>
        </Grid>
      </Container>
    )
  }
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
