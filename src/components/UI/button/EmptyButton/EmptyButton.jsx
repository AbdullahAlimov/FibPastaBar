import React from 'react';
import classes from "./EmptyButton.module.scss"

const EmptyButton = ({src,alt,children}) => {
    return (
        <button className={classes.button}>
            <img src={src} alt={alt} />
            {children}
        </button>
    );
};

export default EmptyButton;