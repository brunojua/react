import React from 'react';

export default props =>
    <div className="Card">
        <h2>{props.titulo}</h2>

        <p>{props.children}</p>
    </div>