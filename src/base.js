import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC-RweZeQwJs74VUIjajvG_FlW6adGhis8',
  authDomain: 'catch-of-the-day-day.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-day.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
