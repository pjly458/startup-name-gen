import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBMf4aJlQtkLUc-98rdIR9JIlT_M-YOriQ",
  authDomain: "startupgenerator-7d87c.firebaseapp.com",
  databaseURL: "https://startupgenerator-7d87c.firebaseio.com",
  projectId: "startupgenerator-7d87c",
  storageBucket: "startupgenerator-7d87c.appspot.com",
  messagingSenderId: "459387759884",
  appId: "1:459387759884:web:663c906abdf05ee57b2d29",
  measurementId: "G-4W6RD8HPSJ"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()
let analytics = firebase.analytics()

export default {
  firebase, db, analytics
}