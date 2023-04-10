import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAeBpH89dE0YyCsH6kVyCe86MMe8P8Gpzk',

  authDomain: 'pokedex-portfolio-project.firebaseapp.com',

  projectId: 'pokedex-portfolio-project',

  storageBucket: 'pokedex-portfolio-project.appspot.com',

  messagingSenderId: '765607136816',

  appId: '1:765607136816:web:943621a65c827fafe967f5',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, 'users');
export const pokemonListRef = collection(firebaseDB, 'pokemonList');
