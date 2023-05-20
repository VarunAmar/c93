// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBbADqW4PAM5U2Xbnbcs20rEUJ8kSwkj-M",
      authDomain: "letschat-web-app---1-1675c.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-1675c-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-1675c",
      storageBucket: "letschat-web-app---1-1675c.appspot.com",
      messagingSenderId: "870504744755",
      appId: "1:870504744755:web:27c81d873225f8b0d12046"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "welcome"+user_name+"";

function add_room (){

      room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname",roomname);
    
    Window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
