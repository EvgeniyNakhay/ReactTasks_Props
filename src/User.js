import React from 'react'

const  User = ({name, age, func, obj}) => (
    <div>
        <h1>{func}, my name is {name}!</h1>
        <p>I'm {age} years old</p>
        <hr></hr>
        <p>I have a lot of friends:</p>
        <ul>
            <li>{obj.friendsName1}</li>
            <li>{obj.friendsName2}</li>
            <li>{obj.friendsName3}</li>
        </ul>

    </div>
)
export default User;
