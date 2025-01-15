import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import  { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGJ3XaOyrdS3QzO7F51gsFKP7Yp_UNEjo",
    authDomain: "crwn-clothing-db-85b28.firebaseapp.com",
    projectId: "crwn-clothing-db-85b28",
    storageBucket: "crwn-clothing-db-85b28.firebasestorage.app",
    messagingSenderId: "328937083883",
    appId: "1:328937083883:web:6db92623c4ce9994643fae"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider =  new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        }
        catch (error) {
                console.log('error creating user', (error.message));
            }
        }
        return userDocRef;
    }
  