import firebase from 'firebase';
// require('@firebase/firestore')


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBptSu94brIyYJhEvrny_S8EjOWFR3HBmI",
  authDomain: "donation-7f98c.firebaseapp.com",
  projectId: "donation-7f98c",
  storageBucket: "donation-7f98c.appspot.com",
  messagingSenderId: "584496075506",
  appId: "1:584496075506:web:b7724d1ff4a2e51899f66b"
};
 


// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}


export default firebase.firestore();
