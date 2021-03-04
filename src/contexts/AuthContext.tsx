import { createContext, useContext, useCallback, FormEvent } from 'react';

import {
    Provider,
    signIn as handleOAuthLogin,
    signOut as handleOAuthLogout
} from 'next-auth/client';

interface AuthContextData {
    signInGit(event: FormEvent): void;
    signInFB(event: FormEvent): void;
    signInGoogle(event: FormEvent): void;
    signOut(event: FormEvent): void;
}

const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
    session: any;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ session, children }) => {
    const signInFB = useCallback(() => {
        handleOAuthLogin('facebook');
    }, []);

    const signInGit = useCallback(() => {
        handleOAuthLogin('github');
    }, []);

    const signInGoogle = useCallback(() => {
        handleOAuthLogin('google');
    }, []);

    const signOut = useCallback(() => {
        handleOAuthLogout({ callbackUrl: process.env.NEXTAUTH_URL});
    }, []);

    return (
        <Provider session={session}>
            <AuthContext.Provider value={{ signInGit, signOut, signInFB, signInGoogle }}>
                {children}
            </AuthContext.Provider>
        </Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('should be used with AuthProvider');
    }

    return context;
}