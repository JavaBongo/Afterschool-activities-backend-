const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace <password> with your actual password and ensure the URI is correct
const uri = "mongodb+srv://izitouni336:Hp22Hp96@afterschool.uztgi.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Ping the deployment to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  } finally {
    // Ensures the client closes after completing
    await client.close();
  }
}

run().catch(console.dir);
