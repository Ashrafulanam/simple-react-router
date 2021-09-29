import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link ,useHistory} from 'react-router-dom';

const FriendDetails = () => {
    const{friendId} = useParams()
    const [friend,setFriend]=useState({})
    const history = useHistory()
    useEffect(() => {
        const url =(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        fetch(url)
        .then(response => response.json())
        .then(data =>setFriend(data))
    },[])
    const handleClick =()=>{
        history.push('/friends')
    }
    return (
        <div>
            <h3>Details comming soon:{friendId}</h3>
            <h1>i am:{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h3>{friend.website}</h3>
            <p>{friend.address?.city}</p>
            <button onClick={handleClick}>see all friend</button>
          
        </div>
    );
};

export default FriendDetails;