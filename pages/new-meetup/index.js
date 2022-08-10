// import other components needed here
import NewMeetupForm from '../../components/meetups/NewMeetupForm';



// our domain for this is <our-domain-address>.com/new-meetup
function NewMeetupPage() {

    async function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
        // here is where we'll send our request to the API...because we're using the form in this page.
        // this will use an INTERNAL api, which is why an absolute path is used instead...so we reference to the api we've constructed.
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(' DATA  >>>>>  ', data);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetupPage;