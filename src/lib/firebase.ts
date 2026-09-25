import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR7giUquPrzV_UyHYunu6BUDY8AvbnwhY",
  authDomain: "xplit-ca38f.firebaseapp.com",
  projectId: "xplit-ca38f",
  storageBucket: "xplit-ca38f.firebasestorage.app",
  messagingSenderId: "761999716748",
  appId: "1:761999716748:web:f1e33ded805eef7d8726a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)