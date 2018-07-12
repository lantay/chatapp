// Initialize Firebase
import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCn0qavNizHEdoYfbcC7MXrvjWAroNpYrY',
  authDomain: 'vue-firebase-ae075.firebaseapp.com',
  databaseURL: 'https://vue-firebase-ae075.firebaseio.com',
  projectId: 'vue-firebase-ae075',
  storageBucket: '',
  messagingSenderId: '980067630024'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let articlesRef = db.ref('articles')

export default articlesRef
