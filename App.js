import 'react-native-gesture-handler';

import * as React from 'react';
import AuthStack from './Authentication/stack';
import { initializeApp } from "firebase/app";

function App() {
    const firebaseConfig = {
      apiKey: "AIzaSyDGTM-ZXvr4Wmo31afIVLxqWTScd1c-6KM",
      authDomain: "ccfc-ce810.firebaseapp.com",
      databaseURL: "https://ccfc-ce810-default-rtdb.firebaseio.com",
      projectId: "ccfc-ce810",
      storageBucket: "ccfc-ce810.appspot.com",
      messagingSenderId: "68146802683",
      appId: "1:68146802683:web:eca1d72be798d75d85a55e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  return (
    <AuthStack/>
  );
}

export default App;