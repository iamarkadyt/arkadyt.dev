import React from 'react';
import './styles.scss';

const link = props => {
    return <div className="Link-container">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {props.ico}<span>{props.title}</span>
        </a>
    </div>;
};

export default link;