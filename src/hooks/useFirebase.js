import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    GithubAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import firebaseInit from "../firebase/firebase.init";
import { useHistory } from "react-router-dom";

firebaseInit();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider(); //Google Provider
    const githubProvider = new GithubAuthProvider(); //Github Provider
    const auth = getAuth();
    const history = useHistory();
    const [userName, setUserName] = useState(" ");
    const [userEmail, setUserEmail] = useState(" ");
    const [userPassword, setUserPassword] = useState(" ");
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);
    const [isLogin, setIsLogin] = useState([true])

    const getName = (e) => {
        setUserName(e.target.value);
    };
    const getEmail = (e) => {
        console.log(e.target.value);
        setUserEmail(e.target.value);
    };
    const getPassword = (e) => {
        console.log(e.target.value);
        setUserPassword(e.target.value);
    };
    const handleGoogleSignIn = () => {
        setIsLogin(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                history.push("/");
            })
            .finally(() => setIsLogin(false))
            .catch((err) => {
                setError(err);
            });
    };
    const handleGithubSignIn = () => {
        setIsLogin(true)
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                history.push("/");
            })
            .finally(() => setIsLogin(false))
            .catch((err) => {
                setError(err);
            });
    };
    const registerWithEmailAndPass = (e) => {
        e.preventDefault();
        setIsLogin(true)
        createUserWithEmailAndPassword(auth, userEmail, userPassword, userName)
            .then((result) => {
                setUser(result.user);
                updateProfile(auth.currentUser, {
                    displayName: userName,
                });
                history.push("/");
            })
            .finally(() => setIsLogin(false))
            .catch((err) => {
                setError(err.message);
            });
    };
    const handleEmailAndPassword = (e) => {
        e.preventDefault();
        setIsLogin(true)
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((result) => {
                setUser(result.user);
                history.push("/");
            })
            .finally(() => setIsLogin(false))
            .catch((err) => {
                setError(err);
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLogin(false)
        });
    }, [auth]);

    const logOut = () => {
        signOut(auth).then(() => {
            
            setUser({});
        });
    };
    console.log(userName);
    return {
        handleGoogleSignIn,
        handleGithubSignIn,
        handleEmailAndPassword,
        registerWithEmailAndPass,
        getName,
        getEmail,
        getPassword,
        logOut,
        user,
        error,
        isLogin
    };
};

export default useFirebase;
