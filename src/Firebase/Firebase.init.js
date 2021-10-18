import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';

const firebaseInit = () => {
    initializeApp(firebaseConfig);
};

export default firebaseInit;
