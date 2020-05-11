import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';
import ValidarPropsFunc from './../../components/ValidarPropsFunc';


export default function ValidarProps({ navigation }){

    const num = 1;

    return(
        <View style = { global.container }>
            <NavBar texto = 'Validar Propriedades'/>
            <ValidarPropsFunc ano={20} />
        </View>
    );
} 

