// bring in necessary components
import MeetupDetails from '../../components/meetups/MeetupDetails'


function singleMeetUpDetails() {
    return (
        <MeetupDetails
            image='https://thumbs.dreamstime.com/b/teamwork-couple-celebrating-inspiring-mountains-sunset-silhouette-team-climbers-celebrate-reached-goal-success-114128475.jpg'
            title='testing'
            address='test address'
            description='test description'
        />
    )
}

export async function getStaticProps(context) {
    // fetch data for a single meetUp.
    const meetupId = context.params.meetupID; // this id can be captured through the context parameter that exists on getStaticProps (will contain the parent key, which has identifiers)

    console.log('ID>>>>>', meetupId)
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://thumbs.dreamstime.com/b/teamwork-couple-celebrating-inspiring-mountains-sunset-silhouette-team-climbers-celebrate-reached-goal-success-114128475.jpg',
                title: 'a First Meetup',
                address: '123 Main Street, Los Angeles, CA',
                desciption: 'This is the first meetup of our test app.'
            }
        }
    }
}

// NOTE...if we are in a dynamic component (like this one) and if we're using the getStaticProps function, then we NEED to include getStaticPaths as well.
// this is necessary for NextJS to pregenerate all pages & URLs (ex: our meetup ID values that might be entered).
export async function getStaticPaths() {
    // this returns an object with all values that are required for the page to be pre-generated.
    return {
        paths: [
            {
                params: {
                    meetupID: 'm1',
                }
            },
            {
                params: {
                    meetupID: 'm2',
                }
            }
        ],
        // this is a nice feature because it allows nextJS to pregenerate some supported paths. 
        // Setting fallback to false says our paths include ALL supported values (if it's true, next JS will try to generate pages dynamically on the server for incoming requests)
        fallback: false
    }
}

export default singleMeetUpDetails;