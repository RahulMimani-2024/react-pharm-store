
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyDkxhdOHDM184HIGi8Ge649a1NCUMP-p5U",
  authDomain: "pharmstore-8c39a.firebaseapp.com",
  projectId: "pharmstore-8c39a",
  storageBucket: "pharmstore-8c39a.appspot.com",
  messagingSenderId: "470963572282",
  appId: "1:470963572282:web:1559a604f7a18fdc27ef03",
  measurementId: "G-JS4YB1J6NJ"
};

const app = initializeApp(firebaseConfig);

export default app;