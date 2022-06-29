import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCvfZ0lCN53hRZEkPpLzteaV9VtPT69yTk",
  authDomain: "pharm-api.firebaseapp.com",
  projectId: "pharm-api",
  storageBucket: "pharm-api.appspot.com",
  messagingSenderId: "965267615799",
  appId: "1:965267615799:web:c2d7e4190f8599fcce8fb2",
  measurementId: "G-9S56CB65RN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;