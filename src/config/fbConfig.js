import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyAWSGT6ZfercebxBvDn-2xUQNazdl49HaM",
    authDomain: "project-manager-47aa8.firebaseapp.com",
    databaseURL: "https://project-manager-47aa8.firebaseio.com",
    projectId: "project-manager-47aa8",
    storageBucket: "",
    messagingSenderId: "846943231481",
    appId: "1:846943231481:web:c8752575d57d5dbf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;