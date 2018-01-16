import * as firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBL8LfzkYM8t2MBxsExKBv5PyUImiahOMU',
  authDomain: 'fir-test-ca5d0.firebaseapp.com',
  databaseURL: 'https://fir-test-ca5d0.firebaseio.com',
  projectId: 'fir-test-ca5d0',
  storageBucket: 'fir-test-ca5d0.appspot.com',
  messagingSenderId: '491129653058',
};
firebase.initializeApp(config);

export default firebase;
