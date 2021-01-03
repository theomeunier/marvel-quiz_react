import app from 'firebase/app'

const config  = {
    apiKey: "AIzaSyBfLZRuTuCI54GnhlcA8Y4QNa6_8JG0kGw",
    authDomain: "marvel-quiz-f4ce0.firebaseapp.com",
    projectId: "marvel-quiz-f4ce0",
    storageBucket: "marvel-quiz-f4ce0.appspot.com",
    messagingSenderId: "103544349135",
    appId: "1:103544349135:web:06f8ad690c4d5ba3e2b2ba"
};


export default class firebase {
    constructor() {
        app.initializeApp(config)
    }
}