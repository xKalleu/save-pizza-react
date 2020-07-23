import firebase from 'firebase'

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

export default firebase
