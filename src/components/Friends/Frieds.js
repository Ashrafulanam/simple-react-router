import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Frieds.css'

const Frieds = () => {
    const[frieds,setFrieds]=useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data =>setFrieds(data))
    })
    return (
        <div>
            <h2> friend:{frieds.length}</h2>
           <div className="fried-container">
            {
                frieds.map(fried =><Friend
                             key={fried.id}
                             fried={fried}                     
                                     ></Friend>)
            }
           </div>
        </div>
    );
};

export default Frieds;