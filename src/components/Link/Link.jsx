import React from 'react';
import './Link.css';

const link = props => {
    return <div className="Link-container">
        <a href={props.href} target="_blank">
            {props.ico}
            <span>{props.title}</span>
        </a>
    </div>;
};

export default link;