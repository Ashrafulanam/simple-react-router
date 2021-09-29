import React from 'react';
import { Link ,useHistory} from 'react-router-dom';

const Friend = (props) => {
    const{name,id,phone,website,address} = props.fried;
    const history =useHistory()
    const friendStyle={
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: 'gray',
    }
    // const url ={`/friend/${id}`}
    const handleFriendClick =() => {
        // history.push('/home')
        history.push(`/friend/${id}`)
    }
    return (
        
        <div style={friendStyle}>
            <h1>i am:{name}{id}</h1>
            <h2>{phone}</h2>
            <h3>{website}</h3>
            <p>{address.city}</p>
            <Link to={`/friend/${id}`}>visit me</Link><br/>
            <Link to={`/friend/${id}`}><button>visit me</button></Link><br/>
            <button onClick={handleFriendClick}>visit me2</button>
        </div>
    );
};

export default Friend;