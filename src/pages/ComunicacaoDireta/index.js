import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';
import { Avo } from './../../components/ComDireta';

export default function ComunicacaoDireta({ navigation }){

    const num = 1;

    return(
        <View style = { global.container }>
            <NavBar texto = 'Comunicação direta via props' />
            <Avo nome = 'Mr Catra' sobrenome = 'Silva' />
        </View>
    );
} 

