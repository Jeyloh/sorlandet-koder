var config = {
  apiKey: "AIzaSyDz3BPV14CtArn_iYdqNQaAH4ZhoFOmdho",
  authDomain: "sorlandetkoder.firebaseapp.com",
  databaseURL: "https://sorlandetkoder.firebaseio.com",
  storageBucket: "sorlandetkoder.appspot.com",
  messagingSenderId: "951635052405"
};

// Initialize the default app
var app = firebase.initializeApp(config);

console.log(app.name);  // "[DEFAULT]"

var defaultStorage = firebase.storage();
var defaultDatabase = firebase.database();
