
// Ingresar en el head del index.html
<script type="module" src="firebaseconect.js"></script>


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDsh46Wq7Vw3-odbU88j_AeUq8BNXrvmkI",
    authDomain: "gosth30-af8f4.firebaseapp.com",
    projectId: "gosth30-af8f4",
    storageBucket: "gosth30-af8f4.appspot.com",
    messagingSenderId: "330833387267",
    appId: "1:330833387267:web:6437fa6aa0332990c5d336",
    measurementId: "G-GJ2TF1YQ6N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
    register(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((_) => {
                window.location.href = "login.html";
                // Mostrar alerta de registro exitoso
                alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
            })
            .catch((error) => {
                console.error(error.message);
                // Mostrar alerta de error de registro
                alert("Error al registrar: " + error.message);
            });
    }

    authenticate(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((_) => {
                window.location.href = "index.html";
                // Mostrar alerta de inicio de sesión exitoso
                alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
            })
            .catch((error) => {
                console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
            });
    }

    signOut() {
        signOut(auth)
            .then((_) => {
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}