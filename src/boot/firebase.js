import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC2JmmBVfYWHidDnU1TrLGeqdgupFidE8Q",
  authDomain: "qwitter-e492e.firebaseapp.com",
  projectId: "qwitter-e492e",
  storageBucket: "qwitter-e492e.appspot.com",
  messagingSenderId: "516955905424",
  appId: "1:516955905424:web:b40bda5c94b66a73726715",
  measurementId: "G-FG2MRGHWPM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

 async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export default db



