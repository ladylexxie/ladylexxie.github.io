var firebaseConfig = {
  apiKey: "AIzaSyCOlT6AM4Ni63Gdq0U1j2vsyFCzNfQvgQc",
  authDomain: "lexxie-s-main-website.firebaseapp.com",
  databaseURL: "https://lexxie-s-main-website-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lexxie-s-main-website",
  storageBucket: "lexxie-s-main-website.appspot.com",
  messagingSenderId: "248030106659",
  appId: "1:248030106659:web:9e2cede0c7584c76014d96",
  measurementId: "G-KWHVWCMT6R"
}


function preload(){
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

}

function setup(){

}

function draw()
