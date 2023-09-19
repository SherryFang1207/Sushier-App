import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectToDatabase() {
  const uri =
    "mongodb+srv://zfang1207:nCxtdPefs2RANVtL@sushier.snt0iqz.mongodb.net/UserCredDB?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  return client;
}
