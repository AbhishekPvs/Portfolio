import './Resume.css';
import Resumedetails from './Resumedetails.js'
import React from 'react'


function Resume() {
    return (
        <div>
            <Resumedetails name ={'Abhishek'} collegename ={'BTH'} nameOfDegree={"Master's in Software Engineering"} 
 description={'Descprition about my course'}/>

        </div>
    )
}

export default Resume
