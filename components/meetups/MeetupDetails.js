import { Fragment } from 'react';

function MeetupDetails(props) {
    console.log('PROPS...', props)

    return (
        <Fragment>
            <img
                src={props?.image}
                alt={props?.title}
            />
            <h1>{props?.title}</h1>
            <address>{props?.address}</address>
            <p>{props?.desciption}</p>
        </Fragment>
    )
}

export default MeetupDetails;