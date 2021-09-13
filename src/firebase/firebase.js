import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8PRefhNrRLXS91Tf1eK-C8US6hGiTFRE",
    authDomain: "expensify-38d07.firebaseapp.com",
    projectId: "expensify-38d07",
    storageBucket: "expensify-38d07.appspot.com",
    messagingSenderId: "742299234588",
    appId: "1:742299234588:web:848e6064a8748787818ad9"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref().set({
        name: "Ivan Beerli"
    });
