import React from 'react';
import { Text } from 'react-native';
import global from './../styles/global';

export const Inverter = props => {
    const inv = props.texto.split('').reverse().join('');
    return( <Text style = { global.title }> { inv } </Text> );
}
