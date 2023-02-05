const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://avfx_root:irmiot4462281@avianfinance.qc7bqtj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        
        const collection = client.db("AVFX_Events").collection("rentals");

        const doc = { name: "Neapolitan pizza", shape: "round" };
        const result = await collection.insertOne(doc);
        console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
        );

    } finally {
        await client.close();
    }
}
run().catch(console.dir);

