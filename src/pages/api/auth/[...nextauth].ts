import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../lib/mongodb";
import {
  FB_ID,
  FB_SECRET,
  GITHUB_ID,
  GITHUB_SECRET,
  GOOGLE_ID,
  GOOGLE_SECRET,
  JWT_SECRET,
  NEXTAUTH_URL,
} from "config/consts";
import MyCustomAdapter from "../lib/customAdapter";

const options: NextAuthOptions = {
  adapter: MyCustomAdapter(),
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: FB_ID,
      clientSecret: FB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    signIn: async (data) => {
      return await Promise.resolve(!!data.user);
    },
    session: async ({ session, token, user }) => {
      session.id = user.id;
      return await Promise.resolve(session);
    },
    jwt: async (data) => {
      return await Promise.resolve(data.token);
    },
    redirect: () => {
      return Promise.resolve(NEXTAUTH_URL);
    },
  },
  secret: JWT_SECRET,
  debug: true,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, options);
};
