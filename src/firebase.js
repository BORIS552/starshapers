import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyABig2aGr3ttPYTul5arqpywHIom6Kv1l8",
	authDomain: "starshapers-49b93.firebaseapp.com",
	databaseURL: "https://starshapers-49b93.firebaseio.com/",
	projectId: "starshapers-49b93",
	storageBucket: "starshapers-49b93.appspot.com",
	messagingSenderId: "291156826796"
};

firebase.initializeApp(config);
export default firebase;