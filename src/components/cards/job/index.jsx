import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

/**
 * Work experience card.
 */
const ExpCard = props => {
    const separatorClass = props.start && props.end ? 'stick-hidden' :
        props.start ? 'stick-start' :
            props.end ? 'stick-end' :
                '';
    const { theme } = useContext(ThemeContext);
    return <div className={clsx("ExpCard-container", theme)}>
        <img src={props.image} 
             style={{ width: `${props.imgWidth}%` }} 
             alt='' />
        <div className="Separator-container">
            <div className={['stick', separatorClass].join(' ')} />
            <div className="circle" />
        </div>
        <div className="text">
            <h4>{props.date}</h4>
            <h2>{props.company}</h2>
            <h3>{props.title}</h3>
        </div>
    </div>;
};

export default ExpCard;
