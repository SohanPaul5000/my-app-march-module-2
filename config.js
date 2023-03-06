import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCjVieNALpXcGS_QQ_hpRd-w5qcGpv0_qM",
  authDomain: "my-app-ae58c.firebaseapp.com",
  databaseURL: "https://my-app-ae58c-default-rtdb.firebaseio.com",
  projectId: "my-app-ae58c",
  storageBucket: "my-app-ae58c.appspot.com",
  messagingSenderId: "365180534182",
  appId: "1:365180534182:web:d57d9c6ce1914e7152a367"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()