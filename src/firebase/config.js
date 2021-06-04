import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCP_kZqVhMTszNL1uzamPAvR1_SE8yLOuo",
    authDomain: "vue-blog-22bd6.firebaseapp.com",
    projectId: "vue-blog-22bd6",
    storageBucket: "vue-blog-22bd6.appspot.com",
    messagingSenderId: "923395259380",
    appId: "1:923395259380:web:8d18782c2246faf12397a1"
  };

// init firebase 
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth,projectFirestore, timestamp}






