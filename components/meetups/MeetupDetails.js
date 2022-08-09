import classes from './MeetupDetails.module.css';   // this imports the classes associated with our component (all classes will be available as properties for us to use below)

function MeetupDetails(props) {
    console.log('PROPS...', props)

    return (
        <section className={classes.detail}>
            <img
                src={props?.image}
                alt={props?.title}
            />
            <h1>{props?.title}</h1>
            <address>{props?.address}</address>
            <p>{props?.desciption}</p>
        </section>
    )
}

export default MeetupDetails;