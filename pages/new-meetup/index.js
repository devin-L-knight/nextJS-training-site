// import other components needed here
import NewMeetupForm from '../../components/meetups/NewMeetupForm';



// our domain for this is <our-domain-address>.com/new-meetup
function NewMeetupPage() {

    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage;