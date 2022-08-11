// bring in necessary components
import MeetupDetails from '../../components/meetups/MeetupDetails'
import { MongoClient, ObjectId } from 'mongodb';


function singleMeetUpDetails(props) {
    return (
        <MeetupDetails
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticProps(context) {
    // fetch data for a single meetUp.
    const meetupId = context.params.meetupID; // this id can be captured through the context parameter that exists on getStaticProps (will contain the parent key, which has identifiers)

    // fetch data from an API
    const client = await MongoClient.connect('INSERT MONGO DB API LINK & LOGIN CREDENTIALS HERE'); // this includes the mongoDB user / password that has read/write access to databases.
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const clickedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }); // this finds one single document in our database

    client.close(); // close our client connection.

    console.log('ID>>>>>', meetupId)
    return {
        props: {
            // meetupData: {
            //     id: meetupId,
            //     meetupData.: 'https://thumbs.dreamstime.com/b/teamwork-couple-celebrating-inspiring-mountains-sunset-silhouette-team-climbers-celebrate-reached-goal-success-114128475.jpg',
            //     title: 'a First Meetup',
            //     address: '123 Main Street, Los Angeles, CA',
            //     desciption: 'This is the first meetup of our test app.'
            // }
            meetupData: {
                id: clickedMeetup._id.toString(),
                title: clickedMeetup.title,
                address: clickedMeetup.address,
                description: clickedMeetup.description,
                image: clickedMeetup.image
            }
        }
    }
}

// NOTE...if we are in a dynamic component (like this one) and if we're using the getStaticProps function, then we NEED to include getStaticPaths as well.
// this is necessary for NextJS to pregenerate all pages & URLs (ex: our meetup ID values that might be entered).
export async function getStaticPaths() {
    // fetch data from an API
    const client = await MongoClient.connect('INSERT MONGO DB API LINK & LOGIN CREDENTIALS HERE'); // this includes the mongoDB user / password that has read/write access to databases.
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const retrievedMeetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); // this is searching for the id specifically and a second argument to find which fields should be extracted for each entry

    client.close(); // close our client connection.

    // this returns an object with all values that are required for the page to be pre-generated.
    return {
        paths: retrievedMeetups.map(meetup => ({ params: { meetupID: meetup._id.toString() } })),
        // paths: [ { params: { meetupID: 'm1' } }, { params: { meetupID: 'm2' } }],

        // this is a nice feature because it allows nextJS to pregenerate some supported paths.
        // Setting fallback to false says our paths include ALL supported values (if it's true, next JS will try to generate pages dynamically on the server for incoming requests)
        fallback: false
    }
}

export default singleMeetUpDetails;