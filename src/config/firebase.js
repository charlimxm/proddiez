import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCHY31jEpT7eVG02HV1RicV9jYHQATb_0s',
  authDomain: 'proddiez.firebaseapp.com',
  databaseURL: 'https://proddiez.firebaseio.com',
  storageBucket: 'proddiez.appspot.com',
  messagingSenderId: '390604713039'
}
var fire = firebase.initializeApp(config)
export default fire
