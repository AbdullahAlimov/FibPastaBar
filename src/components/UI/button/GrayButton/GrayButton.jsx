import React from 'react';
import classes from './GrayButton.module.scss'

const GrayButton = (props) => {
    return (
        <button {...props} className={`${classes.button} ${props.className}`} style={{margin: props.margin}}>{props.children}</button>
    );
};

export default GrayButton;