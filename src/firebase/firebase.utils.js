import  { initializeApp}  from 'firebase/app'
import 'firebase/auth'
import { getAuth,  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBMIQjkkIDc9KGeSyIHg7rTdOzyKNOVMew",
    authDomain: "shopping-site-153d7.firebaseapp.com",
    projectId: "shopping-site-153d7",
    storageBucket: "shopping-site-153d7.appspot.com",
    messagingSenderId: "810765108866",
    appId: "1:810765108866:web:b132a99f2a59e120be169b",
    measurementId: "G-662BM07GS1"
  };
  initializeApp(firebaseConfig);
  export const auth= getAuth();
  export const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const GoogleSignIn=()=>{

    signInWithPopup(auth,provider);
  }

//   export default firebase;