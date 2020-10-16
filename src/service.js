var firebase = require('firebase');
const config = {
    apiKey: "AIzaSyB-fkPLT-4u31LqGDcqPuISF_qPsOPPCw4",
    authDomain: "testdemo-d02fd.firebaseapp.com",
    databaseURL: "https://testdemo-d02fd.firebaseio.com",
    projectId: "testdemo-d02fd",
    storageBucket: "testdemo-d02fd.appspot.com",
    messagingSenderId: "728622055791",
    appId: "1:728622055791:web:9bb1bf66c90e940d33a89a"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();