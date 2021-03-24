import React from 'react';



function Resumedetails(props) {
    return (
        <div className='info about my '>
            {props.name}
            {props.collegeName}
            {props.nameOfDegree}
            {props.description}
        </div>
    )
}

export default Resumedetails
