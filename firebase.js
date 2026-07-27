// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAw8ANK0T_xwBR57MC--5FWcf4ZrujRLuI",
  authDomain: "mfn-website-aa11a.firebaseapp.com",
  projectId: "mfn-website-aa11a",
  storageBucket: "mfn-website-aa11a.firebasestorage.app",
  messagingSenderId: "191731530990",
  appId: "1:191731530990:web:a0414243a98b926f9747ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);