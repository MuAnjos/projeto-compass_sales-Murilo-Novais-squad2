import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthenticatedContext = createContext({
    token: '',
    user: {},
    authenticated: false,
    logIn: (user: any, token: string) => { },
    logOut: () => { },
});

export function AuthenticatedContextProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState({});

    function logOut() {
        setToken('');
        setUser({});
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('user');
    }

    function logIn(user: any, token: string) {
        setUser(user);
        setToken(token);
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(user));
    }

    const value = {
        token: token,
        user: user,
        authenticated: !!token,
        logIn: logIn,
        logOut: logOut
    }

    return (
        <AuthenticatedContext.Provider value={value}>
            {children}
        </AuthenticatedContext.Provider >
    )
}
