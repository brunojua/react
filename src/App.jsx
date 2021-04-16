import React from 'react';

import Primeiro from './components/primeiro'
import Parametro from './components/parametro'
import Filhos from './components/filhos'
import Card from './components/layout/Card'
import './App.css'
import Numero from './components/Numero'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'

import './index.css';

export default props =>
    <div className="App">
        {/* <Primeiro /> */}

        {/* <Parametro titulo="Este é o título" subtitulo="Subtitulo" /> */}

        {/* <Filhos>
            <ul>
                <li>Ana</li>
                <li>Claudia</li>
                <li>Marcia</li>
                <li>Renata</li>
                <li>Laura</li>
            </ul>
        </Filhos> */}

        <Card titulo="Titulo da aula">
            Conteúdo 01
        </Card>

        <Card titulo="Saber se é par ou impar">
            <Numero numero={15}></Numero>
        </Card>

        <Card titulo="Comunicação">
            <Pai></Pai>
        </Card>

        <Card titulo="Comunicação indireta">
            <Super></Super>
        </Card>

        <Card titulo="Input">
            <Input></Input>
        </Card>

        <Card titulo="Contador">
            <Contador></Contador>
        </Card>
    </div>