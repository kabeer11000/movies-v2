// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGob4CVGtJ0NIxLNLx6oRfn0QH1I_AlW4",
  authDomain: "movies-v2-8d85d.firebaseapp.com",
  projectId: "movies-v2-8d85d",
  storageBucket: "movies-v2-8d85d.appspot.com",
  messagingSenderId: "885386854526",
  appId: "1:885386854526:web:e66e17a7987f961b8d582f",
  measurementId: "G-J1KXM1KXJ4"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
