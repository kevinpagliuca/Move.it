import { MongoClient } from "mongodb";
import { MONGODB_URI, NODE_ENV } from "config/consts";

const uri = MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
