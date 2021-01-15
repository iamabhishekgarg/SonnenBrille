import firebase from 'firebase'


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyA97wZgcLJci93y3lXabGFbRnzC6dGoPVU",
    authDomain: "shoppingwebsite-970e1.firebaseapp.com",
    databaseURL: "https://shoppingwebsite-970e1.firebaseio.com",
    projectId: "shoppingwebsite-970e1",
    storageBucket: "shoppingwebsite-970e1.appspot.com",
    messagingSenderId: "260978838500",
    appId: "1:260978838500:web:99ebbe635fc1bc50b555f1",
    measurementId: "G-6Q0TM0CMLP"
})


//const db=firebaseApp.firestore();
const auth=firebase.auth();


export {auth};
