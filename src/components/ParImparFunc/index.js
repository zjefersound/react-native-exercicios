import React from 'react';
import { View, Text } from 'react-native';
import global from './../../styles/global';

function ParImparFunc(num){
    if( num % 2 == 0 ){
        return(<Text style = { global.bloco }>Par</Text>);
    }else{
        return <Text style = { global.bloco }>Ímpar</Text>
    }
}

export default props => ParImparFunc( props.numero )