// PREVIOUSLY: import firebase from 'firebase';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' // For authentication later

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: "meal-smart",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

// PREVIOUSLY: delete line below
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;