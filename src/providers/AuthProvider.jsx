import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo,
        });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, loggedUser => {
            console.log('user in AuthProvider', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;