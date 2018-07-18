import React from 'react';
import './Section.css';

const section = props => {
    return <div className={`Section-container ${props.blue ? 'Section-blue' : null}`}>
        <div className="Section-content">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    </div>;
};

export default section;