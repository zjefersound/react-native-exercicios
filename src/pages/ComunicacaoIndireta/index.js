import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';
import { Entrada } from './../../components/ComIndireta';

export default function ComunicacaoIndireta({ navigation }){

    return(
        <View style = { global.container }>
            <NavBar texto = 'Comunicação indireta via props' />
            <Entrada />
        </View>
    );
} 

