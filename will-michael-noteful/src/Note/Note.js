import React from 'react';
import {Link} from 'react-router-dom';
import './Note.css';
import { format } from 'url';

export default function Note(props){
    return(
        <div className="Note">
            <h2>
                <Link to={`/Note/${props.id}`}>
                    {props.name}
                </Link>
            </h2>
            <div className="noteDate">
                Modified
                <span className="date">
                    {format(props.modified, 'Do MMM YYYY')}
                </span>
            </div>
        </div>
    )
}