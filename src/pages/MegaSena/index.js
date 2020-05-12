import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//Componentes
import NavBar from './../../components/NavBar';

const MegaSenaComp = props => {
    const [min,max] = [1, 60];
    const numeros = Array( props.numeros || 6 ).fill(0)
    for(let i = 0; i < numeros.length; i++){
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1) + min);
        }
        numeros[i] = novo;
    }
    numeros.sort( (a,b) => a - b );

    return <Text style = { styles.bloco_verde }> { numeros.join(', ') } </Text>
}

export default function MegaSena({ navigation }){

    //const navigation = useNavigation();
    const num = 1;

    return(
        <View style = { global.container }>
            <NavBar texto = 'MegaSena'/>
            <Text style = { styles.title }>MegaSena:</Text>
            <MegaSenaComp numeros = {6} />
            <Button style = { styles.bloco_verde } 
            onPress = { () => navigation.goBack() } 
            title = "Go back home" />

        </View>
    );
} 
