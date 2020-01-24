import firebase from 'firebase'
import Rebase from 're-base'

// Your web app's Firebase configuration
var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBMIXbryBr_iPCCGKvki7kBpR7IRNwnCDc",
    authDomain: "quiz-react-35d9f.firebaseapp.com",
    databaseURL: "https://quiz-react-35d9f.firebaseio.com",
    projectId: "quiz-react-35d9f",
    storageBucket: "quiz-react-35d9f.appspot.com",
    messagingSenderId: "71118757200",
    appId: "1:71118757200:web:fe2643c7b3a70efabba055",
    measurementId: "G-BPPSD62QSW"
});
const db = firebase.database(firebase)
const configauth = Rebase.createClass(db)

export const providers ={
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'google': new firebase.auth.GoogleAuthProvider()
}

export const auth = firebaseConfig.auth()
export default configauth;