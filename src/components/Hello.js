import React from 'react';
import './Hello.css';

function Hello(props) {
    return (
        <div className="f1 tc">
            <h1>Hello world</h1>
            <p>{props.greeting}</p>
        </div>
    );   
}

export default Hello;