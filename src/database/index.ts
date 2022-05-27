import { MONGODB_NAME, MONGODB_URI } from "config/consts";
import { Db, MongoClient } from "mongodb";

const uri = MONGODB_URI;

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  const db = await new MongoClient(uri, options).connect().then((client) => {
    return client.db(MONGODB_NAME);
  });

  cachedDb = db;

  return db;
}
