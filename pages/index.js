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


function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default HomePage;