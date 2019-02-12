import React from 'react';
import './Button.css';

export default function Button(props){
    const {tag, className, ...otherProps} = props;    
    return React.createElement(
        props.tag,
        {
            className: ['NavButton', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}

Button.defaultProps = {
    tag: 'a'
}