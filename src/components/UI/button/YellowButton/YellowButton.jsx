import React from 'react';
import classes from './Yellowbutton.module.scss';

const YellowButton = ({ children, margin, width, height, fontSize, onClick,className }) => {
    return (
        <button className={`${classes.button} ${className}`} style={{ margin: margin, width: width, height: height, fontSize: fontSize }} onClick={onClick}>{children}</button>
    );
};

export default YellowButton;