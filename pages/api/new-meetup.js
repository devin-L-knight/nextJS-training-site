// this is in the api folder, and will act as an API route that NextJS needs to handle server-side code.
// Remember, these API routes will never run on the client and will only run on server...so the functions in files like these
// will only be triggered when a request is sent out.


// created a new MongoDB cluster and installed the dependency. Below are some necessary items to import to use the new cloud db.
import { MongoClient } from 'mongodb';  // this allows us to connect to the cluster and insert / fetch data from there.


// this handler will only be triggered with POST requests...
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data; // these are the four fields we expect to get from the request body.

        // this is code we would NEVER NEVER want to run on the client side because it would expose our login credentials.
        const client = await MongoClient.connect('INSERT MONGO DB API LINK & LOGIN CREDENTIALS HERE'); // this includes the mongoDB user / password that has read/write access to databases.
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);  // this is a query command to insert one new document into the collection (ex: that could be a JS object)...ex: { title, image, address, description}
        console.log(result);

        client.close();


        // this sets the status code and converts the response to json
        res.status(201).json({ message: 'Meetup Added to database!' })
    }
}

export default handler;