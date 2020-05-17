import React, { Component, useState, useCallback } from 'react';
import { View, Button, Text, TextInput, StatusBar } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';
import ParImparFunc from './../../components/ParImparFunc';

export const Entrada = props => {
    return (
        <TextInput style = { global.input }
                onChangeText = { props.callback } 
                value={ props.value } />
    );
}

export default function ParImpar({ navigation }){

    const [ num, setNum ] = useState(0);

    const atualizaTexto = (valor) => {
        setNum(String(valor));
    }
    return(
        <View style = { global.container }>
            <NavBar texto = 'ParImpar'/>
            <Entrada value = { num } callback = { atualizaTexto } />
            <Text style = { global.title }>{ `O número ${num} é:` }</Text>
            <ParImparFunc numero = { num } />
        </View>
    );
} 

