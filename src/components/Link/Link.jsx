import React from 'react';

const Link = ({route}) => {
    return (
        <li>
            {
                <a href={route.path}>{route.name}</a>
            }
        </li>
           
    );
};

export default Link;