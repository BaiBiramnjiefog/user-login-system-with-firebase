// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCFm-CypcR_mijgl71nU1rEuRP58TcwT54",
    authDomain: "contact-form-da540.firebaseapp.com",
    databaseURL: "https://contact-form-da540.firebaseio.com",
    projectId: "contact-form-da540",
    storageBucket: "contact-form-da540.appspot.com",
    messagingSenderId: "1025026437732",
    appId: "1:1025026437732:web:53a83eb6c4f4d06b89e571",
    measurementId: "G-57G8142ZRN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

//   reference messages collection
var messagesRef=firebase.database().ref('messages');



// listen for form submit
document.getElementById("contactform").addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal("name");
    var phone = getInputVal("phone");
    var email = getInputVal("email");
    var password = getInputVal("password");
    
    // save message to firebase
    saveMessage(name,phone,email,password);
    // show alert
    document.querySelector(".alert").style.display="block";
    // set timer
    setTimeout(function(){
        document.querySelector(".alert").style.display="none";
    },3000);

    // clear form
    document.getElementById('contactform').reset();
}

// function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

function saveMessage(name,phone,email,password){
    var newmessageRef=messagesRef.push();
    newmessageRef.set({
        name:name,
        phone:phone,
        email:email,
        password:password
    });
}