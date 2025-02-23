// public/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7cvp7yThFHYCRYPNyeSIUt5mKsQ5RIo8",
  authDomain: "paselistarfid.firebaseapp.com",
  projectId: "paselistarfid",
  storageBucket: "paselistarfid.firebasestorage.app",
  messagingSenderId: "90651000574",
  appId: "1:90651000574:web:d690f95a7d53a046b86faf",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar `db` para que otros scripts puedan usarlo
export { db };
