import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBGt1Yof9uavawh2nf9NEWXThJtPmhpyWw",
    authDomain: "crown-db-9cab7.firebaseapp.com",
    databaseURL: "https://crown-db-9cab7.firebaseio.com",
    projectId: "crown-db-9cab7",
    storageBucket: "crown-db-9cab7.appspot.com",
    messagingSenderId: "651715387771",
    appId: "1:651715387771:web:f11cb02e71c32771509dde",
    measurementId: "G-8GNZXCY44K"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;