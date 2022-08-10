// importing our components to be used in our home page
// (Note: those from the Components folder are standard React components)
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'a First Meetup',
        image: 'https://thumbs.dreamstime.com/b/teamwork-couple-celebrating-inspiring-mountains-sunset-silhouette-team-climbers-celebrate-reached-goal-success-114128475.jpg',
        address: '123 Main Street, Los Angeles, CA',
        description: 'This is the first meetup of our test app.'
    },
    {
        id: 'm2',
        title: 'a Second Meetup',
        image: 'https://eventsoutsourced.com.au/wp-content/uploads/Community-Events-1.png',
        address: '123 Main Street, New York City, NY',
        description: 'And this is the second meetup of our test app.'
    }
]


function HomePage(props) {
    console.log('PROPS >>>>> ',props)
    return (
        <MeetupList meetups={props.meetups} />
    )
}


// // This is an ALTERNATE async function to the getStaticProps func below. This is guaranteed to run for every request (but supports multiple changes to the page and any required site authentication, etc.)
// export async function getServerSideProps(context) {
//     const request = context.req;
//     const response = context.res;

//     // similar to getStaticProps, this function MUST always return an object that has a nested props object.
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }


// export nextJS functions from the home page to use elsewhere. This function (getStaticProps) is good to use when data doesn't change all the time (like multiple times a second) and when don't need authentication, this is better.
// the getStaticProps can run code that would usually run in the server (because the code that is executed here is not on the client and is ONLY run during the initial build process). This is a faster option to get props compared to the getServerSideProps above.
export async function getStaticProps() {
    // fetch data from an API

    // this function MUST always return an object, which must have a nested props object.
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // revalidate is for "incremental static generation". This property wants a number that represents the number of seconds nextJS will wait before regenerating if requests come in for the page
        revalidate: 5
    };
}

export default HomePage;