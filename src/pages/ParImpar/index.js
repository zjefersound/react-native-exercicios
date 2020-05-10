import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';
import ParImparFunc from './../../components/ParImparFunc';


export default function ParImpar({ navigation }){

    const num = 1;

    return(
        <View style = { global.container }>
            <NavBar texto = 'ParImpar'/>
            <Text style = { global.title }>{`O número ${num} é:`}</Text>
            <ParImparFunc numero={num} />
        </View>
    );
} 

