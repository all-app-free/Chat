importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAW9wTUspeZIfVDOrmE11GHsWWZACdaghc",
    projectId: "luvyxchat",
    messagingSenderId: "311815294233",
    appId: "1:311815294233:web:4d6cb198ba2d1068314988"
});

const messaging = firebase.messaging();
