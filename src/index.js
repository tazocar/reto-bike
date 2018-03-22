import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAZlY1IM_tRndjUAmD91mjjP_D-qf9Fnvg",
	authDomain: "react-firebase-demo-19d6c.firebaseapp.com",
	databaseURL: "https://react-firebase-demo-19d6c.firebaseio.com",
	projectId: "react-firebase-demo-19d6c",
	storageBucket: "react-firebase-demo-19d6c.appspot.com",
	messagingSenderId: "809590808552"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();