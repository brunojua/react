import React, { useState } from 'react';

import Sub from './Sub'

export default props => {

    const [num, setNumero] = useState(0)

    function Clique(valor) {
        setNumero(valor)
    }

    return (
        <div>
            <h4>{num}</h4>
            <Sub clique={Clique}>Pedro</Sub>
        </div>
    )
}
