import './App.css'
import React from 'react'

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
export default (props) =>(
    <div className="App">
         <Card titulo="#08 - Comunicação indireta " color ="#000"> 
        <Super></Super>
        </Card>
         <Card titulo="#07 - Comunicação direta " color ="#0D0221"> 
        <Pai></Pai>
        </Card>
        <Card titulo="#06 - Condicional v2" color ="#0D0221"> 
        <CondicionalComIf numero={10}></CondicionalComIf>
        </Card>        
        <Card titulo="#05 - Condicional v1"color ="#0D0221"> 
        <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição"color ="#0D0221"> 
        <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos"color ="#0D0221"> 
        <ComFilhos>
            <ul>
                <li>Ana</li>  
                <li>Bia</li>  
                <li>Carlos</li>  
                <li>Daniel</li>              
                
            </ul>
        </ComFilhos>
         </Card>
         <Card titulo="#02 - Componente com Parametro"color ="#0D0221"> 
        <ComParametro titulo="Esse é o titulo"
         subtitulo="Esse é o subtitulo"/>
         </Card>
        <Card titulo="#01 - Primeiro componente"color ="#0D0221">
        <Primeiro/>
        </Card>
        </div>       
        
);
