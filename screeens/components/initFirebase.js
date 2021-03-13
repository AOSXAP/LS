import * as firebase from "firebase";

const initialize = () => {
        var firebaseConfig = {
            apiKey: "AIzaSyBRT55m8nz_sWQFNVk3KjsGrVzuFLcAP3E",
            authDomain: "rnaosx.firebaseapp.com",
            databaseURL: "https://rnaosx.firebaseio.com",
            projectId: "rnaosx",
            storageBucket: "rnaosx.appspot.com",
            messagingSenderId: "430779929325",
            appId: "1:430779929325:web:ff55021b129dc8c23df2e4"
          };
        
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
    }
}


export default initialize;