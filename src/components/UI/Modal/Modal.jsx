import React from 'react';
import classes from "./Modal.module.scss"

const Modal = ({ children, value, changeValue }) => {
    const rootClasses = [classes.screen];
    if (value) { rootClasses.push(classes.active) };
    return (
        <div className={rootClasses.join(" ")}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <button type="button" className={classes.exit} onClick={() => changeValue(false)}></button>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;