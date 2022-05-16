//! var firebaseConfig = {
//!     apiKey: "AIzaSyCuUa4X0nHF03xE0RS5gIcSes4EfGB4Htc",
//!     authDomain:  "form-test-c6780.firebaseapp.com",
//!     databaseURL: "https://form-test-c6780.firebaseio.com",
//!     projectId: "form-test-c6780",
//!     storageBucket: "form-test-c6780.appspot.com",
//!     messagingSenderId: "900825576170",
//!     appId: "1:9008255761710:web:cb6f1bb9f31e351c2f1d93",
//! };
// //! Initialize Firebase
//! firebaseConfig.initializeApp(firebaseConfig);

// // ? Refernece contactInfo collections
//! let contactInfo = firebase.database().ref("infos");


//! document.querySelector(".contact-form").addEventListener("submit",submitForm);

//!function submitForm(e) {
//!     e.preventDefault();

// !    let username = document.querySelector(".username").value
//  !   let password = document.querySelector(".password").value;
//   !  let email = document.querySelector(".email").value;
     
//    ! saveContactInfo(email);

//    ! document.querySelector(".contact-form").reset();

// !    sendEmail(username, password, email)
//! }
//! function saveContactInfo(username,password,email) {
//!     let newContactInfo = contactInfo.push();

//!     newContactInfo.set({
//!     email:email
//!     });

//     retrieveInfos();
// }

// function retrieveInfos() {
//     let ref = firebase.database().ref("infos");
//     ref.on("value", gotData);
// }

// function gotData(data) {
//     let info = data.val();
//     let keys = Object.keys(info);

//     for (let i = 0; i < keys.length; i++){
//         let infoData = keys[i]
//         let email = info[infoData].email;
//         console.log(email);

//         let infosResults = document.querySelector(".infosResults");

//         infosResults.innerHTML += `<div>
//         <h1>Username</h1>
//         <input type="text" name="" id="text">${username}
//         <h1>Password</h1>
//         <input type="password" name="" id="password">${password}
//         <h1>Email</h1>
//         <input type="email" name="" id="email">${email}
//         <h4><a href="/mainpage"><button>Sign Up</button></a></h4>
//         </div>`
//     }
// }

// retrieveInfos();

// function sendEmail(username, email, password) {
//     Email.send({
//         Host:"stmp.gmail.com",
//         Username: 'mchughkeith3@gmail.com',
//         Password: "mk3680pi",
//         To: 'mchughkeith3@gmail.com',
//         From: 'mchughkeith2@gmail.com',
//         Subject: `${username} sent you an email`,
//         Body: `Thank you ${username} for signing up to Dwiern`,
//     }).then((password) => alert("email sent successfully"))
// }
