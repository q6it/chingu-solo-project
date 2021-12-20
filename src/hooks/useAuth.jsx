import React, { useEffect, useContext, createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@services/api';
import { setCredentials } from 'src/services/authentication';

const authContext = createContext();

const useProvideAuth = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        const userData = await login(email, password);
        const { email: userEmail, name, refreshToken } = userData;
        dispatch(setCredentials({ email: userEmail, name, token: refreshToken }));
        setUser(userData);
        return userData;
    };

    const signOut = () => {
        setUser(null);
    };

    useEffect(() => {}, []);

    return { signIn, signOut, user };
};

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
