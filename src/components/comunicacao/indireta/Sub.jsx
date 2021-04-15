import React from 'react';

export default props => {

    function acao() {
        props.clique(Math.random())
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}