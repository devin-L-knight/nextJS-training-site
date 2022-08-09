// bring in necessary components
import MeetupDetails from '../../components/meetups/MeetupDetails'


function singleMeetUpDetails() {
    return (
        <MeetupDetails
            image='https://thumbs.dreamstime.com/b/teamwork-couple-celebrating-inspiring-mountains-sunset-silhouette-team-climbers-celebrate-reached-goal-success-114128475.jpg'
            title='a First Meetup'
            address='123 Main Street, Los Angeles, CA'
            desciption='This is the first meetup of our test app.'
        />
    )
}

export default singleMeetUpDetails;