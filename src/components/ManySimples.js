import React from 'react';
import { Text } from 'react-native';

//Retorna vários componentes
export default props => {
    return [    
        <Text key={1} >Arrow 1: { props.texto }</Text>,
        <Text key={2} >Arrow 2: { props.texto }</Text>,
        <Text key={3} >Arrow 3: { props.texto }</Text>
    ]  
}