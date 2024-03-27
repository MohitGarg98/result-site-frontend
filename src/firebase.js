import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgI_YSPeT2Npre_HRHO1bqjyr_jrJo6cI",
  authDomain: "result-db.firebaseapp.com",
  projectId: "result-db",
  storageBucket: "result-db.appspot.com",
  messagingSenderId: "23347398916",
  appId: "1:23347398916:web:2a15ba99ea6b7e1504e851",
  databaseURL: "https://result-db-default-rtdb.firebaseio.com"
};

export  const app = initializeApp(firebaseConfig);