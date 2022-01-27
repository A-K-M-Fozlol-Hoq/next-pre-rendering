import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.id}</p>
        </div>
    );
};

export default User;