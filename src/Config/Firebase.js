import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBrUE8naUVEjDDqbAOiO0CQyqD1ZyeaMR0",
  authDomain: "rayuwamaidadi-8aebc.firebaseapp.com",
  databaseURL: "https://rayuwamaidadi-8aebc-default-rtdb.firebaseio.com",
  projectId: "rayuwamaidadi-8aebc",
  storageBucket: "rayuwamaidadi-8aebc.appspot.com",
  messagingSenderId: "377097478160",
  appId: "1:377097478160:web:98041ef0df4aa0a89b6a95",
  measurementId: "G-6FMPSFGBEG"
  });

  firebase.analytics();

  const storage = firebaseApp.storage();
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();
  // var provider = new firebase.auth.GoogleAuthProvider();

  export {db, storage, auth}; 