import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

import styles from './styles';

//componentes
import NavBar from './../../components/NavBar';
import Contador from './../../components/Contador';


export default function Home({ navigation }){

    //const navigation = useNavigation();
    const num = 1;

    return(
        <View style = { styles.container }>
            <NavBar texto = 'Home'/>
            <Text style = { styles.title }>Home page:</Text>
            <Contador />
        </View>
    );
} 

