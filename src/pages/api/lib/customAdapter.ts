/** @return { import("next-auth/adapters").Adapter } */

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { Adapter } from "next-auth/adapters";
import clientPromise from "./mongodb";

export default function MyCustomAdapter(): Adapter {
  return {
    ...MongoDBAdapter(clientPromise),
    getUserByEmail: async () => {
      return Promise.resolve(undefined);
    },
  };
}
