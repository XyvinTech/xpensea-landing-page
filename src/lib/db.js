import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";
const MONGODB_DB = process.env.MONGODB_DB || "xpensea";

if (!MONGODB_URI) {
  console.warn(
    "Please define the MONGODB_URI environment variable inside .env.local or in your deployment platform"
  );
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  try {
    if (cachedDb) {
      return cachedDb;
    }

    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local or in your deployment platform"
      );
    }

    if (!cachedClient) {
      cachedClient = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const db = cachedClient.db(MONGODB_DB);
    cachedDb = db;
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
} 