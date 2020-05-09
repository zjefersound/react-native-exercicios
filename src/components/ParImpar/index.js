import React from 'react';
import { View, Text } from 'react-native';
import global from './../../styles/global';

function parOuImpar(num){
    if(num % 2 == 0){
        return(<Text style={global.ex}>Par</Text>);
    }else{
        return <Text style={global.ex}>Ímpar</Text>
    }
}

export default props => parOuImpar(props.numero)