export const NODE_ENV = process.env.NODE_ENV;

export const GITHUB_ID =
  NODE_ENV === "development"
    ? process.env.GITHUB_DEV_ID
    : process.env.GITHUB_ID;

export const GITHUB_SECRET =
  NODE_ENV === "development"
    ? process.env.GITHUB_DEV_SECRET
    : process.env.GITHUB_SECRET;

export const FB_ID =
  NODE_ENV === "development" ? process.env.FB_DEV_ID : process.env.FB_ID;

export const FB_SECRET =
  NODE_ENV === "development"
    ? process.env.FB_DEV_SECRET
    : process.env.FB_SECRET;

export const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
export const GOOGLE_ID = process.env.GOOGLE_ID;
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
export const MONGODB_NAME = process.env.MONGODB_NAME;
export const JWT_SECRET = process.env.SECRET;
export const MONGODB_URI = process.env.MONGODB_URI;
