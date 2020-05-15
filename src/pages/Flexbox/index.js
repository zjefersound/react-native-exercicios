import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';

export default function Flexbox({ navigation }){
    return(
        <View style = { styles.container }>
            <View style = { styles.norte }>
                <View style = { styles.circulo } ></View>
            </View>
            <View style = { styles.centro }>
                <View style = { styles.circulo } ></View>
                <View style = { styles.circulo } ></View>
                <View style = { styles.circulo } ></View>
            </View>
            <View style = { styles.sul }>
                <View style = { styles.circulo } ></View>
            </View>
        </View>
    );
} 

