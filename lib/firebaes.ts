import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDIUeFAbjrL265u-8WjQKC17QKUs530BKg",
    authDomain: "kw-new-59cb9.firebaseapp.com",
    projectId: "kw-new-59cb9",
    storageBucket: "kw-new-59cb9.firebasestorage.app",
    messagingSenderId: "1004892216777",
    appId: "1:1004892216777:web:a86f1e237001b5a0a15c18",
    measurementId: "G-5PWR9E9PV8"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

