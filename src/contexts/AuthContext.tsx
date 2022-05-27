import { NEXTAUTH_URL } from "config/consts";
import { createContext, useContext, useCallback, FormEvent } from "react";

import {
  SessionProvider,
  signIn as handleOAuthLogin,
  signOut as handleOAuthLogout,
} from "next-auth/react";

interface AuthContextData {
  signInGit(event: FormEvent): void;
  signInFB(event: FormEvent): void;
  signInGoogle(event: FormEvent): void;
  signOut(event: FormEvent): void;
}

const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  session: any;
  children: React.ReactNode;
}

export const AuthProvider = ({ session, children }: AuthProviderProps) => {
  const signInFB = useCallback(() => {
    handleOAuthLogin("facebook");
  }, []);

  const signInGit = useCallback(() => {
    handleOAuthLogin("github");
  }, []);

  const signInGoogle = useCallback(() => {
    handleOAuthLogin("google");
  }, []);

  const signOut = useCallback(() => {
    handleOAuthLogout({ callbackUrl: NEXTAUTH_URL });
  }, []);

  return (
    <SessionProvider session={session}>
      <AuthContext.Provider
        value={{ signInGit, signOut, signInFB, signInGoogle }}
      >
        {children}
      </AuthContext.Provider>
    </SessionProvider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error("should be used with AuthProvider");

  return context;
}
